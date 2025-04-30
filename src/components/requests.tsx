"use client"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CheckCircle2, Clock, XCircle } from "lucide-react"

export default function Requests() {
  // Sample requests data
  const requests = [
    {
      id: 1,
      title: "Additional Medical Supplies",
      description: "Request for additional medical supplies for the pediatric ward.",
      requester: "Dr. Sarah Johnson",
      department: "Pediatrics",
      date: "April 20, 2023",
      status: "Pending",
      priority: "High",
    },
    {
      id: 2,
      title: "Food Budget Increase",
      description: "Request to increase the monthly food budget due to rising costs.",
      requester: "James Wilson",
      department: "Nutrition",
      date: "April 18, 2023",
      status: "Approved",
      priority: "Medium",
    },
    {
      id: 3,
      title: "New Staff Hiring",
      description: "Request to hire two additional nurses for the emergency department.",
      requester: "Dr. Michael Chen",
      department: "Emergency",
      date: "April 15, 2023",
      status: "Rejected",
      priority: "High",
    },
    {
      id: 4,
      title: "Equipment Maintenance",
      description: "Request for maintenance of X-ray machines in the radiology department.",
      requester: "Dr. Emily Rodriguez",
      department: "Radiology",
      date: "April 12, 2023",
      status: "Approved",
      priority: "Medium",
    },
    {
      id: 5,
      title: "Training Program",
      description: "Request for budget allocation for staff training program.",
      requester: "Lisa Thompson",
      department: "HR",
      date: "April 10, 2023",
      status: "Pending",
      priority: "Low",
    },
  ]

  return (
    <div className="container mx-auto p-6">
      <Tabs defaultValue="all" className="space-y-6">
        <div className="flex items-center justify-between">
          <TabsList>
            <TabsTrigger value="all">All Requests</TabsTrigger>
            <TabsTrigger value="pending">Pending</TabsTrigger>
            <TabsTrigger value="approved">Approved</TabsTrigger>
            <TabsTrigger value="rejected">Rejected</TabsTrigger>
          </TabsList>
          <Button>New Request</Button>
        </div>

        <TabsContent value="all" className="space-y-4">
          {requests.map((request) => (
            <RequestCard key={request.id} request={request} />
          ))}
        </TabsContent>

        <TabsContent value="pending" className="space-y-4">
          {requests
            .filter((r) => r.status === "Pending")
            .map((request) => (
              <RequestCard key={request.id} request={request} />
            ))}
        </TabsContent>

        <TabsContent value="approved" className="space-y-4">
          {requests
            .filter((r) => r.status === "Approved")
            .map((request) => (
              <RequestCard key={request.id} request={request} />
            ))}
        </TabsContent>

        <TabsContent value="rejected" className="space-y-4">
          {requests
            .filter((r) => r.status === "Rejected")
            .map((request) => (
              <RequestCard key={request.id} request={request} />
            ))}
        </TabsContent>
      </Tabs>
    </div>
  )
}

interface RequestCardProps {
  request: {
    id: number
    title: string
    description: string
    requester: string
    department: string
    date: string
    status: string
    priority: string
  }
}

function RequestCard({ request }: RequestCardProps) {
  const getStatusIcon = (status: string) => {
    switch (status) {
      case "Approved":
        return <CheckCircle2 className="h-5 w-5 text-green-600" />
      case "Rejected":
        return <XCircle className="h-5 w-5 text-red-600" />
      default:
        return <Clock className="h-5 w-5 text-amber-600" />
    }
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "Approved":
        return <Badge className="bg-green-100 text-green-800">Approved</Badge>
      case "Rejected":
        return <Badge className="bg-red-100 text-red-800">Rejected</Badge>
      default:
        return <Badge className="bg-amber-100 text-amber-800">Pending</Badge>
    }
  }

  const getPriorityBadge = (priority: string) => {
    switch (priority) {
      case "High":
        return (
          <Badge variant="outline" className="border-red-200 text-red-800">
            High
          </Badge>
        )
      case "Medium":
        return (
          <Badge variant="outline" className="border-amber-200 text-amber-800">
            Medium
          </Badge>
        )
      default:
        return (
          <Badge variant="outline" className="border-blue-200 text-blue-800">
            Low
          </Badge>
        )
    }
  }

  return (
    <Card>
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            {getStatusIcon(request.status)}
            <CardTitle className="text-lg">{request.title}</CardTitle>
          </div>
          <div className="flex items-center space-x-2">
            {getPriorityBadge(request.priority)}
            {getStatusBadge(request.status)}
          </div>
        </div>
        <CardDescription className="pt-1">
          Requested by {request.requester} • {request.department} • {request.date}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">{request.description}</p>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline" size="sm">
          View Details
        </Button>
        {request.status === "Pending" && (
          <div className="flex space-x-2">
            <Button variant="outline" size="sm" className="text-red-600">
              Reject
            </Button>
            <Button size="sm" className="bg-green-600 hover:bg-green-700">
              Approve
            </Button>
          </div>
        )}
      </CardFooter>
    </Card>
  )
}
