"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Badge } from "@/components/ui/badge"
import { Clock, CheckCircle2, Loader2, AlertCircle } from "lucide-react"
import { fetchWorkerAttendance } from "@/lib/api"
import { AlertDialog, AlertDialogDescription, AlertDialogTitle } from "@/components/ui/alert-dialog"

interface AttendanceRecord {
  attendance_id: number
  date: string
  clock_in: string
  clock_out: string
  status: string
}

interface AttendanceProps {
  userId: number
}

export default function Attendance({ userId }: AttendanceProps) {
  const [date, setDate] = useState<Date | undefined>(new Date())
  const [clockedIn, setClockedIn] = useState(false)
  const [attendanceData, setAttendanceData] = useState<AttendanceRecord[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const loadAttendance = async () => {
      try {
        const data = await fetchWorkerAttendance(userId)
        if (typeof data === "string") {
          // Handle the case where the API returns a string message
          setAttendanceData([])
        } else {
          setAttendanceData(data)
        }
      } catch (err) {
        setError("Failed to load attendance records")
        console.error(err)
      } finally {
        setLoading(false)
      }
    }

    loadAttendance()
  }, [userId])

  const handleClockInOut = () => {
    // This is just UI state since the API doesn't support real-time clock in/out
    setClockedIn(!clockedIn)
  }

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    )
  }

  if (error) {
    return (
      <div className="container mx-auto p-6">
        <div className="flex items-center gap-3 rounded-md border border-red-300 bg-red-50 p-4 text-red-700">
          <AlertCircle className="h-5 w-5 text-red-600" />
          <span>{error}</span>
        </div>
      </div>
    )
  }

  // Format attendance data for display
  const formattedAttendance = attendanceData
    .map((record) => ({
      date: new Date(record.date).toLocaleDateString(),
      clockIn: record.clock_in || "N/A",
      clockOut: record.clock_out || "N/A",
      status: record.status || "Present",
    }))
    .slice(0, 5) // Show only the 5 most recent records

  return (
    <div className="container mx-auto p-6">
      <div className="grid gap-6 md:grid-cols-2">
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Time Clock</CardTitle>
              <CardDescription>Track your work hours</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col items-center space-y-6">
                <div className="text-4xl font-bold">
                  {new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                </div>
                <div className="text-lg text-muted-foreground">
                  {new Date().toLocaleDateString([], {
                    weekday: "long",
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </div>
                <Button
                  size="lg"
                  className="w-full"
                  onClick={handleClockInOut}
                  variant={clockedIn ? "destructive" : "default"}
                >
                  <Clock className="mr-2 h-4 w-4" />
                  {clockedIn ? "Clock Out" : "Clock In"}
                </Button>
                {clockedIn && (
                  <div className="flex items-center text-green-600">
                    <CheckCircle2 className="mr-2 h-5 w-5" />
                    <span>You are currently clocked in</span>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Attendance Summary</CardTitle>
              <CardDescription>Your attendance statistics</CardDescription>
            </CardHeader>
            <CardContent>
              {attendanceData.length === 0 ? (
                <div className="text-center text-muted-foreground py-4">No attendance records found</div>
              ) : (
                <div className="grid grid-cols-2 gap-4">
                  <div className="rounded-lg bg-muted p-4 text-center">
                    <div className="text-2xl font-bold">
                      {attendanceData.filter((a) => a.status === "Present").length}
                    </div>
                    <div className="text-sm text-muted-foreground">Present Days</div>
                  </div>
                  <div className="rounded-lg bg-muted p-4 text-center">
                    <div className="text-2xl font-bold">
                      {attendanceData.filter((a) => a.status === "Absent").length}
                    </div>
                    <div className="text-sm text-muted-foreground">Absent Days</div>
                  </div>
                  <div className="rounded-lg bg-muted p-4 text-center">
                    <div className="text-2xl font-bold">
                      {attendanceData.filter((a) => a.clock_in && new Date(a.clock_in).getHours() >= 9).length}
                    </div>
                    <div className="text-sm text-muted-foreground">Late Arrivals</div>
                  </div>
                  <div className="rounded-lg bg-muted p-4 text-center">
                    <div className="text-2xl font-bold">{attendanceData.length}</div>
                    <div className="text-sm text-muted-foreground">Total Records</div>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Attendance Calendar</CardTitle>
              <CardDescription>View your monthly attendance</CardDescription>
            </CardHeader>
            <CardContent>
              <Calendar mode="single" selected={date} onSelect={setDate} className="rounded-md border" />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Recent Attendance</CardTitle>
              <CardDescription>Your recent attendance records</CardDescription>
            </CardHeader>
            <CardContent>
              {formattedAttendance.length === 0 ? (
                <div className="text-center text-muted-foreground py-4">No recent attendance records found</div>
              ) : (
                <div className="space-y-4">
                  {formattedAttendance.map((record, index) => (
                    <div key={index} className="flex items-center justify-between border-b pb-2">
                      <div>
                        <div className="font-medium">{record.date}</div>
                        <div className="text-sm text-muted-foreground">
                          {record.clockIn} - {record.clockOut}
                        </div>
                      </div>
                      <Badge variant="outline" className="bg-green-50 text-green-700">
                        {record.status}
                      </Badge>
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
