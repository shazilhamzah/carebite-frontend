// "use client";

// import type React from "react";

// import { Badge } from "@/components/ui/badge";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Progress } from "@/components/ui/progress";
// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from "@/components/ui/table";
// import { Calendar, CheckCircle, Clock, XCircle } from "lucide-react";
// import { useEffect, useState } from "react";

// // Sample attendance data - in a real app, this would come from an API or database
// const attendanceData = [
//   { date: "2023-04-01", day: "Monday", status: "present" },
//   { date: "2023-04-02", day: "Tuesday", status: "present" },
//   { date: "2023-04-03", day: "Wednesday", status: "present" },
//   { date: "2023-04-04", day: "Thursday", status: "late" },
//   { date: "2023-04-05", day: "Friday", status: "present" },
//   { date: "2023-04-08", day: "Monday", status: "present" },
//   { date: "2023-04-09", day: "Tuesday", status: "absent" },
//   { date: "2023-04-10", day: "Wednesday", status: "present" },
//   { date: "2023-04-11", day: "Thursday", status: "present" },
//   { date: "2023-04-12", day: "Friday", status: "late" },
//   { date: "2023-04-15", day: "Monday", status: "present" },
//   { date: "2023-04-16", day: "Tuesday", status: "present" },
//   { date: "2023-04-17", day: "Wednesday", status: "absent" },
//   { date: "2023-04-18", day: "Thursday", status: "present" },
//   { date: "2023-04-19", day: "Friday", status: "present" },
// ];

// export default function Attendance() {
//   // Calculate attendance percentage
//   const totalDays = attendanceData.length;
//   const presentDays = attendanceData.filter(
//     (day) => day.status === "present"
//   ).length;
//   const lateDays = attendanceData.filter((day) => day.status === "late").length;
//   const absentDays = attendanceData.filter(
//     (day) => day.status === "absent"
//   ).length;

//   // Count late as half-present for percentage calculation
//   const attendancePercentage = Math.round(
//     ((presentDays + lateDays * 0.5) / totalDays) * 100
//   );

//   // Determine color based on percentage
//   const getColorClass = (percentage: number) => {
//     if (percentage >= 90) return "text-green-600";
//     if (percentage >= 75) return "text-amber-600";
//     return "text-red-600";
//   };

//   // Format date for display
//   const formatDate = (dateString: string) => {
//     const date = new Date(dateString);
//     return date.toLocaleDateString("en-US", {
//       month: "short",
//       day: "numeric",
//       year: "numeric",
//     });
//   };

//   const [currentUser, setUser] = useState<any | null>(null);
//   const [attendance, setAttendance] = useState<any[]>([]);
//   // const BACKEND_HOST = process.env.NEXT_PUBLIC_BACKEND_HOST;
//   const BACKEND_HOST =
//     "https://carebite-backend-dsgqf7fceqc0gmcw.canadacentral-01.azurewebsites.net";

//   useEffect(() => {
//     const savedUser = localStorage.getItem("user");
//     if (savedUser) {
//       setUser(JSON.parse(savedUser));
//     }
//   }, []);

//   useEffect(() => {
//     console.log("Current user after load:", currentUser);
//   }, [currentUser]);

//   async function getAnnouncements(role: String) {
//     try {
//       if (role === "Worker") {
//         const res = await fetch(
//           `${BACKEND_HOST}/api/worker/announcements/${currentUser.id}`,
//           {
//             method: "GET",
//             headers: {
//               "Content-Type": "application/json",
//             },
//           }
//         );
//         const data = await res.json();
//         console.log("API response:", data);
//         if (!res.ok) throw new Error(data.message || "Failed to fetch");

//         // Assuming API returns [{ date_added, title, details }]
//         const formatted = data.map((item: any, index: number) => ({
//           id: item.id || index,
//           title: item.title,
//           date: item.date_added,
//           category: "information", // API doesn’t return category
//           content: `<p>${item.details}</p>`, // Wrap in <p> for consistency
//         }));

//         setAttendance(formatted);
//       }
//     } catch (err) {
//       console.error("Error fetching announcements:", err);
//     }
//   }

//   useEffect(() => {
//     if (!currentUser) return;

//     let role: string = "";
//     if (currentUser.role === "Worker") {
//       role = "Worker";
//       getAnnouncements(role);
//     }

//     console.log("Current user after null check:", currentUser);
//   }, [currentUser]);

//   return (
//     <div className="flex flex-1 flex-col">
//       <div className="@container/main flex flex-1 flex-col gap-2">
//         <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
//           <div className="px-4 lg:px-6">
//             <Card className="overflow-hidden">
//               <CardHeader className="bg-primary/5 pb-6 pt-6">
//                 <div className="flex flex-col space-y-4">
//                   <div className="flex items-center justify-between">
//                     <CardTitle className="flex items-center gap-2">
//                       <Calendar className="h-5 w-5 text-primary" />
//                       Monthly Attendance
//                     </CardTitle>
//                     <Badge
//                       variant={
//                         attendancePercentage >= 90
//                           ? "success"
//                           : attendancePercentage >= 75
//                           ? "warning"
//                           : "destructive"
//                       }
//                       className="px-2.5 py-1"
//                     >
//                       {attendancePercentage}%
//                     </Badge>
//                   </div>

//                   <div className="space-y-2">
//                     <div className="flex justify-between text-sm">
//                       <span>Monthly Attendance Rate</span>
//                       <span className={getColorClass(attendancePercentage)}>
//                         {attendancePercentage}%
//                       </span>
//                     </div>
//                     <Progress
//                       value={attendancePercentage}
//                       className="h-2"
//                       style={
//                         {
//                           "--progress-background":
//                             attendancePercentage >= 90
//                               ? "var(--success)"
//                               : attendancePercentage >= 75
//                               ? "var(--warning)"
//                               : "var(--destructive)",
//                         } as React.CSSProperties
//                       }
//                     />
//                   </div>

//                   <div className="grid grid-cols-3 gap-2 pt-2">
//                     <div className="rounded-md bg-background p-2 text-center shadow-sm">
//                       <div className="flex items-center justify-center gap-1.5">
//                         <CheckCircle className="h-4 w-4 text-green-500" />
//                         <span className="text-sm font-medium">Present</span>
//                       </div>
//                       <p className="mt-1 text-2xl font-bold">{presentDays}</p>
//                     </div>
//                     <div className="rounded-md bg-background p-2 text-center shadow-sm">
//                       <div className="flex items-center justify-center gap-1.5">
//                         <Clock className="h-4 w-4 text-amber-500" />
//                         <span className="text-sm font-medium">Late</span>
//                       </div>
//                       <p className="mt-1 text-2xl font-bold">{lateDays}</p>
//                     </div>
//                     <div className="rounded-md bg-background p-2 text-center shadow-sm">
//                       <div className="flex items-center justify-center gap-1.5">
//                         <XCircle className="h-4 w-4 text-red-500" />
//                         <span className="text-sm font-medium">Absent</span>
//                       </div>
//                       <p className="mt-1 text-2xl font-bold">{absentDays}</p>
//                     </div>
//                   </div>
//                 </div>
//               </CardHeader>

//               <CardContent className="p-0">
//                 <div className="p-4">
//                   <Table>
//                     <TableHeader>
//                       <TableRow>
//                         <TableHead>Date</TableHead>
//                         <TableHead>Day</TableHead>
//                         <TableHead>Status</TableHead>
//                       </TableRow>
//                     </TableHeader>
//                     <TableBody>
//                       {attendanceData.map((record, index) => (
//                         <TableRow key={index}>
//                           <TableCell>{formatDate(record.date)}</TableCell>
//                           <TableCell>{record.day}</TableCell>
//                           <TableCell>
//                             {record.status === "present" && (
//                               <Badge
//                                 variant="outline"
//                                 className="bg-green-50 text-green-600 border-green-200 flex w-24 items-center justify-center gap-1"
//                               >
//                                 <CheckCircle className="h-3.5 w-3.5" />
//                                 Present
//                               </Badge>
//                             )}
//                             {record.status === "late" && (
//                               <Badge
//                                 variant="outline"
//                                 className="bg-amber-50 text-amber-600 border-amber-200 flex w-24 items-center justify-center gap-1"
//                               >
//                                 <Clock className="h-3.5 w-3.5" />
//                                 Late
//                               </Badge>
//                             )}
//                             {record.status === "absent" && (
//                               <Badge
//                                 variant="outline"
//                                 className="bg-red-50 text-red-600 border-red-200 flex w-24 items-center justify-center gap-1"
//                               >
//                                 <XCircle className="h-3.5 w-3.5" />
//                                 Absent
//                               </Badge>
//                             )}
//                           </TableCell>
//                         </TableRow>
//                       ))}
//                     </TableBody>
//                   </Table>
//                 </div>
//               </CardContent>
//             </Card>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// // Add these custom variants to your globals.css or extend your tailwind.config.js

"use client";

import type React from "react";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Calendar, CheckCircle, Clock, XCircle } from "lucide-react";
import { useEffect, useState } from "react";

export default function Attendance() {
  const [currentUser, setUser] = useState<any | null>(null);
  const [attendance, setAttendance] = useState<any[]>([]);

  const BACKEND_HOST =
    // "https://carebite-backend-dsgqf7fceqc0gmcw.canadacentral-01.azurewebsites.net";
    // "http://localhost:5000";
    process.env.NEXT_PUBLIC_BACKEND_HOST;

  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  useEffect(() => {
    if (!currentUser) return;

    async function getAttendance() {
      try {
        if (currentUser.role == "Worker") {
          const res = await fetch(
            `${BACKEND_HOST}/api/worker/attendance/${currentUser.id}`
          );
          const data = await res.json();
          console.log(data);

          if (!res.ok)
            throw new Error(data.message || "Failed to fetch attendance");

          // Format data and add day field
          const formatted = data.map((item: any) => ({
            date: item.curr_date,
            day: new Date(item.curr_date).toLocaleDateString("en-US", {
              weekday: "long",
            }),
            status: item.status.toLowerCase(), // Convert to lowercase for consistency
          }));

          setAttendance(formatted);
        }
        if (currentUser.role == "Supervisor") {
          const res = await fetch(
            `${BACKEND_HOST}/api/sup/attendance/${currentUser.id}`
          );
          console.log(res);
          const data = await res.json();
          console.log(data);

          if (!res.ok)
            throw new Error(data.message || "Failed to fetch attendance");

          // Format data and add day field
          const formatted = data.map((item: any) => ({
            date: item.curr_date,
            day: new Date(item.curr_date).toLocaleDateString("en-US", {
              weekday: "long",
            }),
            status: item.status.toLowerCase(), // Convert to lowercase for consistency
          }));

          setAttendance(formatted);
        }
      } catch (err) {
        console.error("Error fetching attendance:", err);
      }
    }

    getAttendance();
  }, [currentUser]);

  const totalDays = attendance.length;
  const presentDays = attendance.filter(
    (day) => day.status === "present"
  ).length;
  const lateDays = attendance.filter((day) => day.status === "late").length;
  const absentDays = attendance.filter((day) => day.status === "absent").length;

  const attendancePercentage = totalDays  
    ? Math.round(((presentDays + lateDays * 0.5) / totalDays) * 100)
    : 0;

  const getColorClass = (percentage: number) => {
    if (percentage >= 90) return "text-green-600";
    if (percentage >= 75) return "text-amber-600";
    return "text-red-600";
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  return (
    <div className="flex flex-1 flex-col">
      <div className="@container/main flex flex-1 flex-col gap-2">
        <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
          <div className="px-4 lg:px-6">
            <Card className="overflow-hidden">
              <CardHeader className="bg-primary/5 pb-6 pt-6">
                <div className="flex flex-col space-y-4">
                  <div className="flex items-center justify-between">
                    <CardTitle className="flex items-center gap-2">
                      <Calendar className="h-5 w-5 text-primary" />
                      Monthly Attendance
                    </CardTitle>
                    <Badge
                      variant={
                        attendancePercentage >= 90
                          ? "success"
                          : attendancePercentage >= 75
                          ? "warning"
                          : "destructive"
                      }
                      className="px-2.5 py-1"
                    >
                      {attendancePercentage}%
                    </Badge>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Monthly Attendance Rate</span>
                      <span className={getColorClass(attendancePercentage)}>
                        {attendancePercentage}%
                      </span>
                    </div>
                    <Progress
                      value={attendancePercentage}
                      className="h-2"
                      style={
                        {
                          "--progress-background":
                            attendancePercentage >= 90
                              ? "var(--success)"
                              : attendancePercentage >= 75
                              ? "var(--warning)"
                              : "var(--destructive)",
                        } as React.CSSProperties
                      }
                    />
                  </div>

                  <div className="grid grid-cols-3 gap-2 pt-2">
                    <div className="rounded-md bg-background p-2 text-center shadow-sm">
                      <div className="flex items-center justify-center gap-1.5">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span className="text-sm font-medium">Present</span>
                      </div>
                      <p className="mt-1 text-2xl font-bold">{presentDays}</p>
                    </div>
                    <div className="rounded-md bg-background p-2 text-center shadow-sm">
                      <div className="flex items-center justify-center gap-1.5">
                        <Clock className="h-4 w-4 text-amber-500" />
                        <span className="text-sm font-medium">Late</span>
                      </div>
                      <p className="mt-1 text-2xl font-bold">{lateDays}</p>
                    </div>
                    <div className="rounded-md bg-background p-2 text-center shadow-sm">
                      <div className="flex items-center justify-center gap-1.5">
                        <XCircle className="h-4 w-4 text-red-500" />
                        <span className="text-sm font-medium">Absent</span>
                      </div>
                      <p className="mt-1 text-2xl font-bold">{absentDays}</p>
                    </div>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="p-0">
                <div className="p-4">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Date</TableHead>
                        <TableHead>Day</TableHead>
                        <TableHead>Status</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {attendance.map((record, index) => (
                        <TableRow key={index}>
                          <TableCell>{formatDate(record.date)}</TableCell>
                          <TableCell>{record.day}</TableCell>
                          <TableCell>
                            {record.status === "present" && (
                              <Badge
                                variant="outline"
                                className="bg-green-50 text-green-600 border-green-200 flex w-24 items-center justify-center gap-1"
                              >
                                <CheckCircle className="h-3.5 w-3.5" />
                                Present
                              </Badge>
                            )}
                            {record.status === "late" && (
                              <Badge
                                variant="outline"
                                className="bg-amber-50 text-amber-600 border-amber-200 flex w-24 items-center justify-center gap-1"
                              >
                                <Clock className="h-3.5 w-3.5" />
                                Late
                              </Badge>
                            )}
                            {record.status === "absent" && (
                              <Badge
                                variant="outline"
                                className="bg-red-50 text-red-600 border-red-200 flex w-24 items-center justify-center gap-1"
                              >
                                <XCircle className="h-3.5 w-3.5" />
                                Absent
                              </Badge>
                            )}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
