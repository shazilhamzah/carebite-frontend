"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Badge } from "@/components/ui/badge"
import { Clock, CheckCircle2 } from "lucide-react"
import { useState } from "react"

export default function Attendance() {
  const [date, setDate] = useState<Date | undefined>(new Date())
  const [clockedIn, setClockedIn] = useState(false)

  // Sample attendance data
  const attendanceData = [
    { date: "2023-04-22", clockIn: "08:55 AM", clockOut: "05:05 PM", status: "Present" },
    { date: "2023-04-21", clockIn: "09:02 AM", clockOut: "05:15 PM", status: "Present" },
    { date: "2023-04-20", clockIn: "08:45 AM", clockOut: "04:50 PM", status: "Present" },
    { date: "2023-04-19", clockIn: "09:10 AM", clockOut: "05:30 PM", status: "Present" },
    { date: "2023-04-18", clockIn: "08:50 AM", clockOut: "05:00 PM", status: "Present" },
  ]

  const handleClockInOut = () => {
    setClockedIn(!clockedIn)
  }

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
              <CardDescription>Your attendance statistics for this month</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-lg bg-muted p-4 text-center">
                  <div className="text-2xl font-bold">22</div>
                  <div className="text-sm text-muted-foreground">Present Days</div>
                </div>
                <div className="rounded-lg bg-muted p-4 text-center">
                  <div className="text-2xl font-bold">1</div>
                  <div className="text-sm text-muted-foreground">Absent Days</div>
                </div>
                <div className="rounded-lg bg-muted p-4 text-center">
                  <div className="text-2xl font-bold">2</div>
                  <div className="text-sm text-muted-foreground">Late Arrivals</div>
                </div>
                <div className="rounded-lg bg-muted p-4 text-center">
                  <div className="text-2xl font-bold">176</div>
                  <div className="text-sm text-muted-foreground">Total Hours</div>
                </div>
              </div>
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
              <CardDescription>Your attendance for the past week</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {attendanceData.map((record, index) => (
                  <div key={index} className="flex items-center justify-between border-b pb-2">
                    <div>
                      <div className="font-medium">
                        {new Date(record.date).toLocaleDateString([], {
                          weekday: "short",
                          month: "short",
                          day: "numeric",
                        })}
                      </div>
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
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
