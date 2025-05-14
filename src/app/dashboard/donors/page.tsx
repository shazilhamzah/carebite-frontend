"use client"

import { useState } from "react"
import { DashboardLayout } from "@/components/dashboard-layout"
import { StatCard } from "@/components/ui/stat-card"
import { RequestCard } from "@/components/ui/request-card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { IconAdjustmentsDollar, IconUserQuestion } from "@tabler/icons-react"
import { Hospital } from 'lucide-react'

export default function DonorsDashboard() {
  const [activeRequestId, setActiveRequestId] = useState<string | null>(null)

  // Mock data
  const donationStats = {
    totalDonated: "$250,000",
    totalUsed: "$175,000",
    pendingRequests: 3,
  }

  const hospitals = [
    { id: "1", name: "City General Hospital", gm: "John Smith" },
    { id: "2", name: "Memorial Hospital", gm: "Sarah Johnson" },
    { id: "3", name: "Children's Medical Center", gm: "Robert Williams" },
  ]

  const requests = [
    {
      id: "1",
      title: "Emergency Medical Equipment",
      description: "Request for funds to purchase new emergency medical equipment for City General Hospital.",
      from: "John Smith (GS)",
      date: "2023-05-15",
    },
    {
      id: "2",
      title: "Staff Training Program",
      description: "Funds needed for specialized training program for medical staff at Memorial Hospital.",
      from: "Sarah Johnson (GS)",
      date: "2023-05-10",
    },
  ]

  const foodStatus = [
    {
      hospital: "City General Hospital",
      breakfast: 85,
      lunch: 90,
      dinner: 75,
    },
    {
      hospital: "Memorial Hospital",
      breakfast: 95,
      lunch: 80,
      dinner: 85,
    },
    {
      hospital: "Children's Medical Center",
      breakfast: 90,
      lunch: 95,
      dinner: 90,
    },
  ]

  const handleReply = (id: string) => {
    setActiveRequestId(activeRequestId === id ? null : id)
  }

  return (
    <DashboardLayout role="Donors" userName="Alex Donor">
      <div className="grid gap-6">
        <div className="grid gap-4 md:grid-cols-3">
          <StatCard title="Total Amount Donated" value={donationStats.totalDonated} icon={<IconAdjustmentsDollar />} />
          <StatCard
            title="Total Amount Used"
            value={donationStats.totalUsed}
            icon={<IconAdjustmentsDollar />}
            description="70% of total donations"
          />
          <StatCard title="Pending Requests" value={donationStats.pendingRequests} icon={<IconUserQuestion />} />
        </div>

        <Tabs defaultValue="hospitals">
          <TabsList>
            <TabsTrigger value="hospitals">Hospitals</TabsTrigger>
            <TabsTrigger value="requests">Requests</TabsTrigger>
            <TabsTrigger value="food">Food Status</TabsTrigger>
          </TabsList>

          <TabsContent value="hospitals" className="mt-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {hospitals.map((hospital) => (
                <Card key={hospital.id}>
                  <CardHeader className="flex flex-row items-center gap-2">
                    <Hospital className="h-5 w-5" />
                    <CardTitle className="text-base">{hospital.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">GM: {hospital.gm}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="requests" className="mt-4">
            <div className="grid gap-4 md:grid-cols-2">
              {requests.map((request) => (
                <RequestCard
                  key={request.id}
                  title={request.title}
                  description={request.description}
                  from={request.from}
                  date={request.date}
                  onReply={() => handleReply(request.id)}
                  onAccept={() => {}}
                  showReplyForm={activeRequestId === request.id}
                />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="food" className="mt-4">
            <div className="grid gap-4">
              {foodStatus.map((item, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="text-base">{item.hospital}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm">Breakfast</span>
                        <span className="text-sm font-medium">{item.breakfast}%</span>
                      </div>
                      <Progress value={item.breakfast} />
                    </div>
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm">Lunch</span>
                        <span className="text-sm font-medium">{item.lunch}%</span>
                      </div>
                      <Progress value={item.lunch} />
                    </div>
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm">Dinner</span>
                        <span className="text-sm font-medium">{item.dinner}%</span>
                      </div>
                      <Progress value={item.dinner} />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  )
}
