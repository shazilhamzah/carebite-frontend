"use client";

import { useState, useEffect, SetStateAction } from "react";
import {
  Card,
  CardContent,
  CardDescription,
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
import {
  CalendarIcon,
  Search,
  Save,
  UserCheck,
  UserX,
  Filter,
} from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

// Types based on the schema
interface User {
  id: number;
  hospital_id: number;
  name: string;
  role: string;
}

interface Worker extends User {
  worker_id: number;
}

interface AttendanceRecord {
  attendance_id: number;
  hospital_id: number;
  curr_date: string;
  status: string;
}

interface AttendanceData {
  worker: Worker;
  attendance: AttendanceRecord | null;
}

export default function AttendancePageGMHosp() {
  // State for current user (supervisor)
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  // State for workers
  const [workers, setWorkers] = useState<Worker[]>([]);

  // State for attendance records
  const [attendanceRecords, setAttendanceRecords] = useState<
    AttendanceRecord[]
  >([]);

  // State for date
  const [date, setDate] = useState<Date>(new Date());

  // State for search
  const [search, setSearch] = useState("");

  // State for filter
  const [filter, setFilter] = useState("all");

  // State for attendance data (combined worker and attendance)
  const [attendanceData, setAttendanceData] = useState<AttendanceData[]>([]);

  // State for unsaved changes
  const [hasUnsavedChanges, setHasUnsavedChanges] = useState(false);

  // State for attendance statistics
  const [stats, setStats] = useState({
    total: 0,
    present: 0,
    absent: 0,
    percentage: 0,
  });

  // Load mock data on component mount
  useEffect(() => {
    // Mock data for current user (supervisor)
    const mockSupervisor: User = {
      id: 1,
      hospital_id: 1,
      name: "John Supervisor",
      role: "supervisor",
    };

    // Mock data for workers
    const mockWorkers: Worker[] = [
      {
        id: 2,
        hospital_id: 1,
        name: "Alice Worker",
        role: "cook",
        worker_id: 2,
      },
      {
        id: 3,
        hospital_id: 1,
        name: "Bob Worker",
        role: "assistant",
        worker_id: 3,
      },
      {
        id: 4,
        hospital_id: 1,
        name: "Charlie Worker",
        role: "cleaner",
        worker_id: 4,
      },
      {
        id: 5,
        hospital_id: 1,
        name: "Diana Worker",
        role: "server",
        worker_id: 5,
      },
      {
        id: 6,
        hospital_id: 1,
        name: "Edward Worker",
        role: "cook",
        worker_id: 6,
      },
    ];

    // Mock data for attendance records
    const mockAttendanceRecords: AttendanceRecord[] = [
      {
        attendance_id: 2,
        hospital_id: 1,
        curr_date: format(new Date(), "yyyy-MM-dd"),
        status: "present",
      },
      {
        attendance_id: 3,
        hospital_id: 1,
        curr_date: format(new Date(), "yyyy-MM-dd"),
        status: "absent",
      },
      {
        attendance_id: 5,
        hospital_id: 1,
        curr_date: format(new Date(), "yyyy-MM-dd"),
        status: "present",
      },
    ];

    setCurrentUser(mockSupervisor);
    setWorkers(mockWorkers);
    setAttendanceRecords(mockAttendanceRecords);

    // In a real application, you would fetch this data from your API
    // Example:
    // fetch('/api/workers?hospital_id=1')
    //   .then(response => response.json())
    //   .then(data => setWorkers(data))
  }, []);

  // Update attendance data when workers or attendance records change
  useEffect(() => {
    const formattedDate = format(date, "yyyy-MM-dd");

    const data = workers.map((worker) => {
      const attendance =
        attendanceRecords.find(
          (record) =>
            record.attendance_id === worker.id &&
            record.curr_date === formattedDate
        ) || null; // Add null fallback here

      return {
        worker,
        attendance,
      };
    });

    setAttendanceData(data);

    // Calculate statistics
    const total = data.length;
    const present = data.filter(
      (item) => item.attendance?.status === "present"
    ).length;
    const absent = data.filter(
      (item) => item.attendance?.status === "absent"
    ).length;
    const percentage = total > 0 ? Math.round((present / total) * 100) : 0;

    setStats({
      total,
      present,
      absent,
      percentage,
    });
  }, [workers, attendanceRecords, date]);

  // Filter attendance data based on search and filter
  const filteredAttendanceData = attendanceData.filter((item) => {
    // Filter by search
    const matchesSearch =
      item.worker.name.toLowerCase().includes(search.toLowerCase()) ||
      item.worker.role.toLowerCase().includes(search.toLowerCase());

    // Filter by status
    if (filter === "present") {
      return matchesSearch && item.attendance?.status === "present";
    } else if (filter === "absent") {
      return (
        matchesSearch &&
        (item.attendance?.status === "absent" || !item.attendance)
      );
    } else {
      return matchesSearch;
    }
  });

  // Handle marking attendance
  const handleMarkAttendance = (workerId: number, status: string) => {
    const formattedDate = format(date, "yyyy-MM-dd");

    // Check if attendance record already exists
    const existingRecordIndex = attendanceRecords.findIndex(
      (record) =>
        record.attendance_id === workerId && record.curr_date === formattedDate
    );

    if (existingRecordIndex >= 0) {
      // Update existing record
      const updatedRecords = [...attendanceRecords];
      updatedRecords[existingRecordIndex] = {
        ...updatedRecords[existingRecordIndex],
        status,
      };
      setAttendanceRecords(updatedRecords);
    } else {
      // Create new record
      const newRecord: AttendanceRecord = {
        attendance_id: workerId,
        hospital_id: currentUser?.hospital_id || 1,
        curr_date: formattedDate,
        status,
      };
      setAttendanceRecords([...attendanceRecords, newRecord]);
    }

    setHasUnsavedChanges(true);
  };

  // Handle saving attendance records
  const handleSaveAttendance = () => {
    // In a real application, you would send this data to your API
    // Example:
    // fetch('/api/attendance', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(attendanceRecords.filter(record => record.curr_date === format(date, "yyyy-MM-dd")))
    // })

    alert("Attendance saved successfully!");
    setHasUnsavedChanges(false);
  };

  // Handle marking all as present
  const handleMarkAllPresent = () => {
    const formattedDate = format(date, "yyyy-MM-dd");

    const updatedRecords = [...attendanceRecords];

    workers.forEach((worker) => {
      const existingRecordIndex = updatedRecords.findIndex(
        (record) =>
          record.attendance_id === worker.id &&
          record.curr_date === formattedDate
      );

      if (existingRecordIndex >= 0) {
        // Update existing record
        updatedRecords[existingRecordIndex] = {
          ...updatedRecords[existingRecordIndex],
          status: "present",
        };
      } else {
        // Create new record
        updatedRecords.push({
          attendance_id: worker.id,
          hospital_id: currentUser?.hospital_id || 1,
          curr_date: formattedDate,
          status: "present",
        });
      }
    });

    setAttendanceRecords(updatedRecords);
    setHasUnsavedChanges(true);
  };

  return (
    <div className="container mx-auto py-6 px-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Worker Attendance</CardTitle>
          <CardDescription>
            Mark and track attendance for workers at{" "}
            {currentUser?.name ? `${currentUser.name}'s` : "your"} hospital
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="mark" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="mark">Mark Attendance</TabsTrigger>
              <TabsTrigger value="history">Attendance History</TabsTrigger>
            </TabsList>

            {/* Mark Attendance Tab */}
            <TabsContent value="mark">
              <Card>
                <CardHeader className="pb-3">
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                    <div className="flex items-center gap-2">
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant={"outline"}
                            className={cn(
                              "w-[240px] justify-start text-left font-normal",
                              !date && "text-muted-foreground"
                            )}
                          >
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            {date ? (
                              format(date, "PPP")
                            ) : (
                              <span>Pick a date</span>
                            )}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                          <Calendar
                            mode="single"
                            selected={date}
                            onSelect={(date) => date && setDate(date)}
                            initialFocus
                          />
                        </PopoverContent>
                      </Popover>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-2 w-full md:w-auto">
                      <div className="flex items-center gap-2">
                        <Search className="h-4 w-4 text-muted-foreground" />
                        <Input
                          placeholder="Search workers..."
                          className="w-full sm:w-[200px]"
                          value={search}
                          onChange={(e) => setSearch(e.target.value)}
                        />
                      </div>
                      <div className="flex items-center gap-2">
                        <Filter className="h-4 w-4 text-muted-foreground" />
                        <Select value={filter} onValueChange={setFilter}>
                          <SelectTrigger className="w-full sm:w-[150px]">
                            <SelectValue placeholder="Filter by status" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="all">All Workers</SelectItem>
                            <SelectItem value="present">Present</SelectItem>
                            <SelectItem value="absent">Absent</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <AlertDialog>
                        <AlertDialogTrigger asChild>
                          <Button
                            variant="outline"
                            className="w-full sm:w-auto"
                          >
                            <UserCheck className="h-4 w-4 mr-2" />
                            Mark All Present
                          </Button>
                        </AlertDialogTrigger>
                        <AlertDialogContent>
                          <AlertDialogHeader>
                            <AlertDialogTitle>
                              Mark All as Present
                            </AlertDialogTitle>
                            <AlertDialogDescription>
                              This will mark all workers as present for{" "}
                              {format(date, "PPP")}. Are you sure you want to
                              continue?
                            </AlertDialogDescription>
                          </AlertDialogHeader>
                          <AlertDialogFooter>
                            <AlertDialogCancel>Cancel</AlertDialogCancel>
                            <AlertDialogAction onClick={handleMarkAllPresent}>
                              Continue
                            </AlertDialogAction>
                          </AlertDialogFooter>
                        </AlertDialogContent>
                      </AlertDialog>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="rounded-md border">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>ID</TableHead>
                          <TableHead>Name</TableHead>
                          <TableHead>Role</TableHead>
                          <TableHead>Status</TableHead>
                          <TableHead className="text-right">Actions</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {filteredAttendanceData.length > 0 ? (
                          filteredAttendanceData.map((item) => (
                            <TableRow key={item.worker.id}>
                              <TableCell className="font-medium">
                                {item.worker.id}
                              </TableCell>
                              <TableCell>{item.worker.name}</TableCell>
                              <TableCell className="capitalize">
                                {item.worker.role}
                              </TableCell>
                              <TableCell>
                                {item.attendance?.status === "present" ? (
                                  <Badge className="bg-green-500">
                                    Present
                                  </Badge>
                                ) : (
                                  <Badge className="bg-red-500">Absent</Badge>
                                )}
                              </TableCell>
                              <TableCell className="text-right">
                                <div className="flex justify-end gap-2">
                                  <Button
                                    variant={
                                      item.attendance?.status === "present"
                                        ? "default"
                                        : "outline"
                                    }
                                    size="sm"
                                    onClick={() =>
                                      handleMarkAttendance(
                                        item.worker.id,
                                        "present"
                                      )
                                    }
                                  >
                                    <UserCheck className="h-4 w-4 mr-2" />
                                    Present
                                  </Button>
                                  <Button
                                    variant={
                                      item.attendance?.status === "absent" ||
                                      !item.attendance
                                        ? "default"
                                        : "outline"
                                    }
                                    size="sm"
                                    onClick={() =>
                                      handleMarkAttendance(
                                        item.worker.id,
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
                          ))
                        ) : (
                          <TableRow>
                            <TableCell
                              colSpan={5}
                              className="text-center py-4 text-muted-foreground"
                            >
                              No workers found
                            </TableCell>
                          </TableRow>
                        )}
                      </TableBody>
                    </Table>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      <Badge className="bg-green-500">{stats.present}</Badge>
                      <span className="text-sm text-muted-foreground">
                        Present
                      </span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Badge className="bg-red-500">{stats.absent}</Badge>
                      <span className="text-sm text-muted-foreground">
                        Absent
                      </span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Badge variant="outline">{stats.percentage}%</Badge>
                      <span className="text-sm text-muted-foreground">
                        Attendance Rate
                      </span>
                    </div>
                  </div>
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

            {/* Attendance History Tab */}
            <TabsContent value="history">
              <Card>
                <CardHeader>
                  <CardTitle>Attendance History</CardTitle>
                  <CardDescription>
                    View past attendance records for workers
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col gap-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                      <Card>
                        <CardHeader className="pb-2">
                          <CardTitle className="text-sm font-medium">
                            Total Workers
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="text-2xl font-bold">
                            {stats.total}
                          </div>
                        </CardContent>
                      </Card>
                      <Card>
                        <CardHeader className="pb-2">
                          <CardTitle className="text-sm font-medium">
                            Present Today
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="text-2xl font-bold text-green-600">
                            {stats.present}
                          </div>
                        </CardContent>
                      </Card>
                      <Card>
                        <CardHeader className="pb-2">
                          <CardTitle className="text-sm font-medium">
                            Absent Today
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="text-2xl font-bold text-red-600">
                            {stats.absent}
                          </div>
                        </CardContent>
                      </Card>
                      <Card>
                        <CardHeader className="pb-2">
                          <CardTitle className="text-sm font-medium">
                            Attendance Rate
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="text-2xl font-bold">
                            {stats.percentage}%
                          </div>
                        </CardContent>
                      </Card>
                    </div>

                    <div className="mt-4">
                      <h3 className="text-lg font-semibold mb-2">
                        Recent Attendance
                      </h3>
                      <div className="rounded-md border">
                        <Table>
                          <TableHeader>
                            <TableRow>
                              <TableHead>Date</TableHead>
                              <TableHead>Worker</TableHead>
                              <TableHead>Status</TableHead>
                            </TableRow>
                          </TableHeader>
                          <TableBody>
                            {attendanceRecords.length > 0 ? (
                              attendanceRecords.map((record, index) => {
                                const worker = workers.find(
                                  (w) => w.id === record.attendance_id
                                );
                                return (
                                  <TableRow key={index}>
                                    <TableCell>{record.curr_date}</TableCell>
                                    <TableCell>
                                      {worker?.name ||
                                        `Worker #${record.attendance_id}`}
                                    </TableCell>
                                    <TableCell>
                                      {record.status === "present" ? (
                                        <Badge className="bg-green-500">
                                          Present
                                        </Badge>
                                      ) : (
                                        <Badge className="bg-red-500">
                                          Absent
                                        </Badge>
                                      )}
                                    </TableCell>
                                  </TableRow>
                                );
                              })
                            ) : (
                              <TableRow>
                                <TableCell
                                  colSpan={3}
                                  className="text-center py-4 text-muted-foreground"
                                >
                                  No attendance records found
                                </TableCell>
                              </TableRow>
                            )}
                          </TableBody>
                        </Table>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
}
