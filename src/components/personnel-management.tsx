"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CheckCircle, Clock, UserPlus, X } from "lucide-react"

interface PersonnelManagementProps {
  canRequest?: boolean
  canApprove?: boolean
}

export default function PersonnelManagement({ canRequest = false, canApprove = false }: PersonnelManagementProps) {
  const [activeTab, setActiveTab] = useState("all")

  // Sample personnel requests data
  const requestsData = [
    {
      id: 1,
      type: "hire",
      position: "Nutritionist",
      department: "Dietary",
      reason: "Need additional staff to handle increased patient load",
      requestedBy: "Hospital A",
      date: "May 15, 2023",
      status: "pending",
    },
    {
      id: 2,
      type: "fire",
      position: "Kitchen Helper",
      department: "Kitchen",
      reason: "Repeated violations of food safety protocols",
      requestedBy: "Hospital B",
      date: "May 12, 2023",
      status: "approved",
    },
    {
      id: 3,
      type: "hire",
      position: "Chef",
      department: "Kitchen",
      reason: "Need experienced chef for new menu implementation",
      requestedBy: "Hospital C",
      date: "May 10, 2023",
      status: "rejected",
    },
    {
      id: 4,
      type: "hire",
      position: "Dietitian",
      department: "Dietary",
      reason: "To support new specialized diet programs",
      requestedBy: "Hospital A",
      date: "May 8, 2023",
      status: "pending",
    },
    {
      id: 5,
      type: "fire",
      position: "Food Service Manager",
      department: "Administration",
      reason: "Poor performance and management issues",
      requestedBy: "Hospital D",
      date: "May 5, 2023",
      status: "pending",
    },
  ]

  const filteredRequests =
    activeTab === "all" ? requestsData : requestsData.filter((request) => request.status === activeTab)

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Personnel Management</h2>
        {canRequest && (
          <div className="flex gap-2">
            <NewRequestDialog type="hire" />
            <NewRequestDialog type="fire" />
          </div>
        )}
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList>
          <TabsTrigger value="all">All Requests</TabsTrigger>
          <TabsTrigger value="pending">Pending</TabsTrigger>
          <TabsTrigger value="approved">Approved</TabsTrigger>
          <TabsTrigger value="rejected">Rejected</TabsTrigger>
        </TabsList>

        <TabsContent value={activeTab} className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle>
                {activeTab === "all"
                  ? "All Personnel Requests"
                  : activeTab === "pending"
                    ? "Pending Requests"
                    : activeTab === "approved"
                      ? "Approved Requests"
                      : "Rejected Requests"}
              </CardTitle>
              <CardDescription>
                {filteredRequests.length} {filteredRequests.length === 1 ? "request" : "requests"} found
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Type</TableHead>
                    <TableHead>Position</TableHead>
                    <TableHead>Department</TableHead>
                    <TableHead>Requested By</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Status</TableHead>
                    {canApprove && <TableHead>Actions</TableHead>}
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredRequests.map((request) => (
                    <TableRow key={request.id}>
                      <TableCell>
                        {request.type === "hire" ? (
                          <Badge variant="outline" className="bg-green-50 text-green-600 hover:bg-green-50">
                            Hire
                          </Badge>
                        ) : (
                          <Badge variant="outline" className="bg-red-50 text-red-600 hover:bg-red-50">
                            Terminate
                          </Badge>
                        )}
                      </TableCell>
                      <TableCell className="font-medium">{request.position}</TableCell>
                      <TableCell>{request.department}</TableCell>
                      <TableCell>{request.requestedBy}</TableCell>
                      <TableCell>{request.date}</TableCell>
                      <TableCell>
                        {request.status === "pending" && (
                          <Badge variant="outline" className="bg-yellow-50 text-yellow-600 hover:bg-yellow-50">
                            <Clock className="mr-1 h-3 w-3" />
                            Pending
                          </Badge>
                        )}
                        {request.status === "approved" && (
                          <Badge variant="outline" className="bg-green-50 text-green-600 hover:bg-green-50">
                            <CheckCircle className="mr-1 h-3 w-3" />
                            Approved
                          </Badge>
                        )}
                        {request.status === "rejected" && (
                          <Badge variant="outline" className="bg-red-50 text-red-600 hover:bg-red-50">
                            <X className="mr-1 h-3 w-3" />
                            Rejected
                          </Badge>
                        )}
                      </TableCell>
                      {canApprove && request.status === "pending" && (
                        <TableCell>
                          <div className="flex gap-2">
                            <Button
                              size="sm"
                              variant="outline"
                              className="h-8 bg-green-50 text-green-600 hover:bg-green-100 hover:text-green-700"
                            >
                              <CheckCircle className="mr-1 h-3 w-3" />
                              Approve
                            </Button>
                            <Button
                              size="sm"
                              variant="outline"
                              className="h-8 bg-red-50 text-red-600 hover:bg-red-100 hover:text-red-700"
                            >
                              <X className="mr-1 h-3 w-3" />
                              Reject
                            </Button>
                          </div>
                        </TableCell>
                      )}
                      {canApprove && request.status !== "pending" && (
                        <TableCell>
                          <Button size="sm" variant="outline" disabled>
                            Processed
                          </Button>
                        </TableCell>
                      )}
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

function NewRequestDialog({ type }: { type: "hire" | "fire" }) {
  const [open, setOpen] = useState(false)

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant={type === "hire" ? "default" : "destructive"}>
          {type === "hire" ? (
            <>
              <UserPlus className="mr-2 h-4 w-4" />
              Request Hire
            </>
          ) : (
            <>
              <X className="mr-2 h-4 w-4" />
              Request Termination
            </>
          )}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[525px]">
        <DialogHeader>
          <DialogTitle>{type === "hire" ? "Request New Hire" : "Request Termination"}</DialogTitle>
          <DialogDescription>
            {type === "hire"
              ? "Submit a request to hire a new staff member."
              : "Submit a request to terminate a staff member."}
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          {type === "fire" && (
            <div className="grid gap-2">
              <Label htmlFor="employee">Employee Name</Label>
              <Input id="employee" placeholder="Enter employee name" />
            </div>
          )}
          <div className="grid gap-2">
            <Label htmlFor="position">Position</Label>
            <Input id="position" placeholder="Enter position title" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="department">Department</Label>
            <Select>
              <SelectTrigger id="department">
                <SelectValue placeholder="Select department" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="kitchen">Kitchen</SelectItem>
                <SelectItem value="dietary">Dietary</SelectItem>
                <SelectItem value="service">Food Service</SelectItem>
                <SelectItem value="administration">Administration</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="reason">Reason</Label>
            <Textarea
              id="reason"
              placeholder={type === "hire" ? "Explain why a new hire is needed" : "Explain the reason for termination"}
              className="min-h-[100px]"
            />
          </div>
        </div>
        <DialogFooter>
          <Button type="button" variant="outline" onClick={() => setOpen(false)}>
            Cancel
          </Button>
          <Button type="submit" onClick={() => setOpen(false)} variant={type === "hire" ? "default" : "destructive"}>
            Submit Request
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
