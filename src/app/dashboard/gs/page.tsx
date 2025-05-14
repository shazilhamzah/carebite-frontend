// "use client"

// import { useState } from "react"
// import { DashboardLayout } from "@/components/dashboard-layout"
// import { StatCard } from "@/components/ui/stat-card"
// import { RequestCard } from "@/components/ui/request-card"
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
// import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
// import { Button } from "@/components/ui/button"
// import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"
// import { Textarea } from "@/components/ui/textarea"
// import { IconDevicesCheck, IconMoneybag, IconUserQuestion } from "@tabler/icons-react"
// import { Coins, Hospital, PersonStanding } from 'lucide-react'

// export default function GSDashboard() {
//   const [activeRequestId, setActiveRequestId] = useState<string | null>(null)

//   // Mock data
//   const stats = {
//     totalDonations: "$350,000",
//     pendingRequests: 5,
//     salary: "$5,000",
//     reviews: 12,
//   }

//   const hospitals = [
//     { id: "1", name: "City General Hospital", gm: "John Smith", location: "Downtown" },
//     { id: "2", name: "Memorial Hospital", gm: "Sarah Johnson", location: "Westside" },
//     { id: "3", name: "Children's Medical Center", gm: "Robert Williams", location: "Eastside" },
//   ]

//   const donors = [
//     {
//       id: "1",
//       name: "Alex Thompson",
//       company: "Thompson Industries",
//       amount: "$120,000",
//     },
//     {
//       id: "2",
//       name: "Maria Garcia",
//       company: "Garcia Foundation",
//       amount: "$85,000",
//     },
//     {
//       id: "3",
//       name: "James Wilson",
//       company: "Wilson Enterprises",
//       amount: "$145,000",
//     },
//   ]

//   const requests = [
//     {
//       id: "1",
//       title: "Funds for Medical Equipment",
//       description: "Request for additional funds to purchase specialized medical equipment for pediatric ward.",
//       from: "Robert Williams (GM Coordinator)",
//       date: "2023-05-18",
//       type: "coordinator",
//     },
//     {
//       id: "2",
//       title: "Staff Shortage Issue",
//       description: "Urgent need to address staff shortage in the emergency department.",
//       from: "John Smith (GM Hospital)",
//       date: "2023-05-16",
//       type: "hospital",
//     },
//   ]

//   const reviews = [
//     {
//       id: "1",
//       title: "Monthly Hospital Inspection",
//       description: "Review of hospital facilities and staff performance for May 2023.",
//       status: "Completed",
//       date: "2023-05-20",
//     },
//     {
//       id: "2",
//       title: "Quarterly Budget Review",
//       description: "Financial performance review for Q1 2023.",
//       status: "Pending",
//       date: "2023-06-01",
//     },
//   ]

//   const handleReply = (id: string) => {
//     setActiveRequestId(activeRequestId === id ? null : id)
//   }

//   return (
//     <DashboardLayout role="GS" userName="Michael Johnson">
//       <div className="grid gap-6">
//         <div className="grid gap-4 md:grid-cols-4">
//           <StatCard title="Total Donations" value={stats.totalDonations} icon={<IconMoneybag />} />
//           <StatCard title="Pending Requests" value={stats.pendingRequests} icon={<IconUserQuestion />} />
//           <StatCard title="Reviews" value={stats.reviews} icon={<IconDevicesCheck />} />
//           <StatCard title="Your Salary" value={stats.salary} icon={<Coins />} description="Monthly" />
//         </div>

//         <div className="flex justify-between items-center">
//           <h2 className="text-xl font-semibold">Dashboard</h2>
//           <Dialog>
//             <DialogTrigger asChild>
//               <Button>Request Funds</Button>
//             </DialogTrigger>
//             <DialogContent>
//               <DialogHeader>
//                 <DialogTitle>Request Funds from Donors</DialogTitle>
//               </DialogHeader>
//               <div className="grid gap-4 py-4">
//                 <div className="grid gap-2">
//                   <Label htmlFor="title">Request Title</Label>
//                   <Input id="title" placeholder="Enter request title" />
//                 </div>
//                 <div className="grid gap-2">
//                   <Label htmlFor="amount">Amount Needed</Label>
//                   <Input id="amount" placeholder="$0.00" type="number" />
//                 </div>
//                 <div className="grid gap-2">
//                   <Label htmlFor="description">Description</Label>
//                   <Textarea id="description" placeholder="Explain why you need these funds..." />
//                 </div>
//               </div>
//               <DialogFooter>
//                 <Button type="submit">Send Request</Button>
//               </DialogFooter>
//             </DialogContent>
//           </Dialog>
//         </div>

//         <Tabs defaultValue="hospitals">
//           <TabsList>
//             <TabsTrigger value="hospitals">Hospitals</TabsTrigger>
//             <TabsTrigger value="donors">Donors</TabsTrigger>
//             <TabsTrigger value="requests">Requests</TabsTrigger>
//             <TabsTrigger value="reviews">Reviews</TabsTrigger>
//             <TabsTrigger value="attendance">Attendance</TabsTrigger>
//           </TabsList>

//           <TabsContent value="hospitals" className="mt-4">
//             <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
//               {hospitals.map((hospital) => (
//                 <Card key={hospital.id}>
//                   <CardHeader className="flex flex-row items-center gap-2">
//                     <Hospital className="h-5 w-5" />
//                     <CardTitle className="text-base">{hospital.name}</CardTitle>
//                   </CardHeader>
//                   <CardContent>
//                     <div className="space-y-1">
//                       <p className="text-sm text-muted-foreground">GM: {hospital.gm}</p>
//                       <p className="text-sm text-muted-foreground">Location: {hospital.location}</p>
//                     </div>
//                   </CardContent>
//                 </Card>
//               ))}
//             </div>
//           </TabsContent>

//           <TabsContent value="donors" className="mt-4">
//             <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
//               {donors.map((donor) => (
//                 <Card key={donor.id}>
//                   <CardHeader className="flex flex-row items-center gap-2">
//                     <PersonStanding className="h-5 w-5" />
//                     <CardTitle className="text-base">{donor.name}</CardTitle>
//                   </CardHeader>
//                   <CardContent>
//                     <div className="space-y-1">
//                       <p className="text-sm text-muted-foreground">Company: {donor.company}</p>
//                       <p className="text-sm font-medium">Donated: {donor.amount}</p>
//                     </div>
//                   </CardContent>
//                 </Card>
//               ))}
//             </div>
//           </TabsContent>

//           <TabsContent value="requests" className="mt-4">
//             <div className="grid gap-4 md:grid-cols-2">
//               {requests.map((request) => (
//                 <RequestCard
//                   key={request.id}
//                   title={request.title}
//                   description={request.description}
//                   from={request.from}
//                   date={request.date}
//                   onReply={() => handleReply(request.id)}
//                   onAccept={() => {}}
//                   showReplyForm={activeRequestId === request.id}
//                 />
//               ))}
//             </div>
//           </TabsContent>

//           <TabsContent value="reviews" className="mt-4">
//             <div className="grid gap-4 md:grid-cols-2">
//               {reviews.map((review) => (
//                 <Card key={review.id}>
//                   <CardHeader>
//                     <div className="flex flex-col gap-1">
//                     <div className="flex items-center justify-between">
//                     <CardTitle className="text-base">{review.title}</CardTitle>
//                     <span className="text-xs text-muted-foreground">{review.date}</span>
//                     </div>
//                     <CardDescription>Status: {review.status}</CardDescription>
//                     </div>
//                   </CardHeader>

//                   <CardContent>
//                     <p className="text-sm">{review.description}</p>
//                   </CardContent>
//                   <CardFooter className="flex justify-end">
//                     <Button size="sm">View Details</Button>
//                   </CardFooter>
//                 </Card>
//               ))}
//             </div>
//           </TabsContent>

//           <TabsContent value="attendance" className="mt-4">
//             <Card>
//               <CardHeader>
//                 <CardTitle>Attendance Record</CardTitle>
//               </CardHeader>
//               <CardContent>
//                 <div className="space-y-4">
//                   <div className="grid grid-cols-7 gap-2">
//                     {Array.from({ length: 7 }).map((_, i) => {
//                       const date = new Date()
//                       date.setDate(date.getDate() - i)
//                       return (
//                         <div key={i} className="flex flex-col items-center">
//                           <div className="text-xs text-muted-foreground">
//                             {date.toLocaleDateString("en-US", { weekday: "short" })}
//                           </div>
//                           <div className="text-sm font-medium">{date.getDate()}</div>
//                           <div
//                             className={`mt-1 h-8 w-8 rounded-full flex items-center justify-center ${
//                               i > 1 ? "bg-green-100 text-green-700" : "bg-muted text-muted-foreground"
//                             }`}
//                           >
//                             {i > 1 ? "✓" : "-"}
//                           </div>
//                         </div>
//                       )
//                     })}
//                   </div>
//                   <div className="flex justify-between text-sm">
//                     <div>Present: 22 days</div>
//                     <div>Absent: 3 days</div>
//                     <div>Late: 1 day</div>
//                   </div>
//                 </div>
//               </CardContent>
//             </Card>
//           </TabsContent>
//         </Tabs>
//       </div>
//     </DashboardLayout>
//   )
// }
