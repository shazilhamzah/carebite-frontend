"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Check, Clock, X } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { workers, getAttendanceByDate, getAttendanceStats } from "@/lib/attendance-data"

// Simple date formatting function to replace date-fns dependency
function formatDate(date: Date, format: string): string {
  if (format === "yyyy-MM-dd") {
    return date.toISOString().split("T")[0]
  } else if (format === "EEEE, MMMM d, yyyy") {
    return date.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }
  return date.toLocaleDateString()
}

interface AttendanceManagementProps {
  canMark?: boolean
}

export default function AttendanceManagement({ canMark = false }: AttendanceManagementProps) {
  const [date, setDate] = useState<Date | undefined>(new Date())
  const [selectedRole, setSelectedRole] = useState("all")
  const [attendanceRecords, setAttendanceRecords] = useState<any[]>([])
  const [stats, setStats] = useState({
    total: 0,
    present: 0,
    absent: 0,
    percentage: 0,
  })

  useEffect(() => {
    if (date) {
      const formattedDate = formatDate(date, "yyyy-MM-dd")
      const records = getAttendanceByDate(formattedDate)
      setAttendanceRecords(records)
      setStats(getAttendanceStats(formattedDate))
    }
  }, [date])

  // Filter workers based on role
  const filteredWorkers =
    selectedRole === "all"
      ? workers
      : workers.filter((worker) => worker.role.toLowerCase() === selectedRole.toLowerCase())

  // Get attendance status for a worker
  const getAttendanceStatus = (workerId: number) => {
    const record = attendanceRecords.find((record) => record.attendance_id === workerId)
    return record ? record.status : "absent"
  }

  // Handle marking attendance
  const handleMarkAttendance = (workerId: number, status: string) => {
    if (!date) return

    const formattedDate = formatDate(date, "yyyy-MM-dd")
    const existingRecordIndex = attendanceRecords.findIndex(
      (record) => record.attendance_id === workerId && record.curr_date === formattedDate,
    )

    if (existingRecordIndex >= 0) {
      // Update existing record
      const updatedRecords = [...attendanceRecords]
      updatedRecords[existingRecordIndex] = {
        ...updatedRecords[existingRecordIndex],
        status,
      }
      setAttendanceRecords(updatedRecords)
    } else {
      // Create new record
      const newRecord = {
        attendance_id: workerId,
        hospital_id: 1,
        curr_date: formattedDate,
        status,
      }
      setAttendanceRecords([...attendanceRecords, newRecord])
    }

    // Update stats
    const newStats = { ...stats }
    if (status === "present") {
      newStats.present += 1
      newStats.absent -= 1
    } else {
      newStats.present -= 1
      newStats.absent += 1
    }
    newStats.percentage = Math.round((newStats.present / newStats.total) * 100)
    setStats(newStats)
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row gap-6">
        <Card className="flex-1">
          <CardHeader>
            <CardTitle>Attendance Calendar</CardTitle>
            <CardDescription>View and mark attendance by date</CardDescription>
          </CardHeader>
          <CardContent>
            <Calendar mode="single" selected={date} onSelect={setDate} className="rounded-md border" />
          </CardContent>
        </Card>

        <Card className="flex-1">
          <CardHeader>
            <CardTitle>Attendance Summary</CardTitle>
            <CardDescription>{date ? formatDate(date, "EEEE, MMMM d, yyyy") : "Select a date"}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex flex-col items-center p-4 bg-green-50 rounded-lg">
                <span className="text-2xl font-bold text-green-600">{stats.present}</span>
                <span className="text-sm text-muted-foreground">Present</span>
              </div>
              <div className="flex flex-col items-center p-4 bg-red-50 rounded-lg">
                <span className="text-2xl font-bold text-red-600">{stats.absent}</span>
                <span className="text-sm text-muted-foreground">Absent</span>
              </div>
              <div className="flex flex-col items-center p-4 bg-yellow-50 rounded-lg">
                <span className="text-2xl font-bold text-yellow-600">{stats.percentage}%</span>
                <span className="text-sm text-muted-foreground">Attendance Rate</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle>Attendance Records</CardTitle>
            <CardDescription>Manage staff attendance records</CardDescription>
          </div>
          <div className="flex items-center gap-2">
            <Select value={selectedRole} onValueChange={setSelectedRole}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Filter by role" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Roles</SelectItem>
                <SelectItem value="cook">Cook</SelectItem>
                <SelectItem value="server">Server</SelectItem>
                <SelectItem value="cleaner">Cleaner</SelectItem>
                <SelectItem value="assistant">Assistant</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Role</TableHead>
                <TableHead>Status</TableHead>
                {canMark && <TableHead>Actions</TableHead>}
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredWorkers.map((worker) => {
                const status = getAttendanceStatus(worker.id)
                return (
                  <TableRow key={worker.id}>
                    <TableCell>{worker.name}</TableCell>
                    <TableCell className="capitalize">{worker.role}</TableCell>
                    <TableCell>
                      {status === "present" && (
                        <Badge variant="outline" className="bg-green-50 text-green-600 hover:bg-green-50">
                          <Check className="mr-1 h-3 w-3" /> Present
                        </Badge>
                      )}
                      {status === "absent" && (
                        <Badge variant="outline" className="bg-red-50 text-red-600 hover:bg-red-50">
                          <X className="mr-1 h-3 w-3" /> Absent
                        </Badge>
                      )}
                      {status === "late" && (
                        <Badge variant="outline" className="bg-yellow-50 text-yellow-600 hover:bg-yellow-50">
                          <Clock className="mr-1 h-3 w-3" /> Late
                        </Badge>
                      )}
                    </TableCell>
                    {canMark && (
                      <TableCell>
                        <div className="flex gap-2">
                          <Button
                            size="sm"
                            variant="outline"
                            className="h-8 bg-green-50 text-green-600 hover:bg-green-100 hover:text-green-700"
                            onClick={() => handleMarkAttendance(worker.id, "present")}
                          >
                            <Check className="mr-1 h-3 w-3" /> Present
                          </Button>
                          <Button
                            size="sm"
                            variant="outline"
                            className="h-8 bg-red-50 text-red-600 hover:bg-red-100 hover:text-red-700"
                            onClick={() => handleMarkAttendance(worker.id, "absent")}
                          >
                            <X className="mr-1 h-3 w-3" /> Absent
                          </Button>
                          <Button
                            size="sm"
                            variant="outline"
                            className="h-8 bg-yellow-50 text-yellow-600 hover:bg-yellow-100 hover:text-yellow-700"
                            onClick={() => handleMarkAttendance(worker.id, "late")}
                          >
                            <Clock className="mr-1 h-3 w-3" /> Late
                          </Button>
                        </div>
                      </TableCell>
                    )}
                  </TableRow>
                )
              })}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}
