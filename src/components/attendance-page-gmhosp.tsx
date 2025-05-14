"use client";

import { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Search, Save, UserCheck, UserX, Filter } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface AttendanceRecord {
  attendance_id: number;
  hospital_id: number;
  curr_date: string;
  status: string;
  users: {
    name: string;
  };
}

export default function AttendancePageGMHosp() {
  const [attendanceRecords, setAttendanceRecords] = useState<
    AttendanceRecord[]
  >([]);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");
  const [hasUnsavedChanges, setHasUnsavedChanges] = useState(false);
  const [currentUser, setUser] = useState<any | null>(null);


  const BACKEND_HOST = process.env.NEXT_PUBLIC_BACKEND_HOST;

  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      const parsedUser = JSON.parse(savedUser);
      setUser(parsedUser);
    }
  }, []);

  useEffect(() => {
    if (!currentUser) return;

    const fetchAttendance = async () => {
      try {
        const response = await fetch(
          `${BACKEND_HOST}/api/gmh/attendance/${currentUser.id}`
        );
        const data = await response.json();

        if (typeof data === "string") {
          alert(data); // Handle "Refresh the page" message
        } else {
          setAttendanceRecords(data);
        }
      } catch (error) {
        console.error("Error fetching attendance:", error);
      }
    };

    fetchAttendance();
  }, [currentUser]);

  const filteredRecords = attendanceRecords.filter((record) => {
    const matchesSearch = record.users.name
      .toLowerCase()
      .includes(search.toLowerCase());
    if (filter === "present")
      return matchesSearch && record.status.toLowerCase() === "present";
    if (filter === "absent")
      return matchesSearch && record.status.toLowerCase() === "absent";
    return matchesSearch;
  });

  const handleMarkAttendance = (attendanceId: number, status: string) => {
    const updated = attendanceRecords.map((record) =>
      record.attendance_id === attendanceId ? { ...record, status } : record
    );
    setAttendanceRecords(updated);
    setHasUnsavedChanges(true);
  };

  const handleSaveAttendance = async () => {
    try {
      const response = await fetch(
        `${BACKEND_HOST}/api/gmh/attendance/${currentUser.id}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ list: attendanceRecords }),
        }
      );

      if (!response.ok) throw new Error("Failed to save attendance");
      alert("Attendance saved successfully!");
      setHasUnsavedChanges(false);
    } catch (error) {
      console.error("Error saving attendance:", error);
      alert("Failed to save attendance");
    }
  };

  return (
    <div className="container mx-auto py-6 px-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Mark Attendance</CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="mark">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="mark">Mark Attendance</TabsTrigger>
              <TabsTrigger value="history">Attendance History</TabsTrigger>
            </TabsList>

            <TabsContent value="mark">
              <Card>
                <CardHeader>
                  <div className="flex flex-col sm:flex-row justify-between items-start gap-4">
                    <div className="flex items-center gap-2">
                      <Search className="h-4 w-4 text-muted-foreground" />
                      <Input
                        placeholder="Search workers..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                      />
                    </div>
                    <div className="flex items-center gap-2">
                      <Filter className="h-4 w-4 text-muted-foreground" />
                      <Select value={filter} onValueChange={setFilter}>
                        <SelectTrigger className="w-[150px]">
                          <SelectValue placeholder="Filter status" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">All</SelectItem>
                          <SelectItem value="present">Present</SelectItem>
                          <SelectItem value="absent">Absent</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="rounded-md border">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Name</TableHead>
                          <TableHead>Status</TableHead>
                          <TableHead className="text-right">Actions</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {filteredRecords.map((record) => (
                          <TableRow key={record.attendance_id}>
                            <TableCell>{record.users.name}</TableCell>
                            <TableCell>
                              <Badge
                                className={
                                  record.status.toLowerCase() === "present"
                                    ? "bg-green-500"
                                    : "bg-red-500"
                                }
                              >
                                {record.status}
                              </Badge>
                            </TableCell>
                            <TableCell className="text-right">
                              <div className="flex justify-end gap-2">
                                <Button
                                  variant={
                                    record.status.toLowerCase() === "present"
                                      ? "default"
                                      : "outline"
                                  }
                                  onClick={() =>
                                    handleMarkAttendance(
                                      record.attendance_id,
                                      "present"
                                    )
                                  }
                                >
                                  <UserCheck className="h-4 w-4 mr-2" />
                                  Present
                                </Button>
                                <Button
                                  variant={
                                    record.status.toLowerCase() === "absent"
                                      ? "default"
                                      : "outline"
                                  }
                                  onClick={() =>
                                    handleMarkAttendance(
                                      record.attendance_id,
                                      "absent"
                                    )
                                  }
                                >
                                  <UserX className="h-4 w-4 mr-2" />
                                  Absent
                                </Button>
                              </div>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-end">
                  <Button
                    onClick={handleSaveAttendance}
                    disabled={!hasUnsavedChanges}
                  >
                    <Save className="h-4 w-4 mr-2" />
                    Save Attendance
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>

            <TabsContent value="history">
              <Card>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Date</TableHead>
                        <TableHead>Name</TableHead>
                        <TableHead>Status</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {attendanceRecords.map((record) => (
                        <TableRow
                          key={`${record.attendance_id}-${record.curr_date}`}
                        >
                          <TableCell>
                            {new Date(record.curr_date).toDateString()}
                          </TableCell>
                          <TableCell>{record.users.name}</TableCell>
                          <TableCell>
                            <Badge
                              className={
                                record.status.toLowerCase() === "present"
                                  ? "bg-green-500"
                                  : "bg-red-500"
                              }
                            >
                              {record.status}
                            </Badge>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
}
