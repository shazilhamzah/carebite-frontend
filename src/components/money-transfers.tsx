"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { ArrowUpRight, Calendar, Check, Clock } from "lucide-react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export default function MoneyTransfers() {
  // Sample transfer data
  const transfers = [
    {
      id: "TRF-001",
      date: "April 20, 2023",
      hospital: "Central City Hospital",
      amount: 25000,
      purpose: "Salary",
      status: "Completed",
      requestedBy: "ADM - John Smith",
    },
    {
      id: "TRF-002",
      date: "April 18, 2023",
      hospital: "Westside Medical Center",
      amount: 15000,
      purpose: "Food Supplies",
      status: "Completed",
      requestedBy: "Supervisor - Emily Johnson",
    },
    {
      id: "TRF-003",
      date: "April 15, 2023",
      hospital: "Eastside Community Hospital",
      amount: 10000,
      purpose: "Salary",
      status: "Pending",
      requestedBy: "ADM - Michael Brown",
    },
    {
      id: "TRF-004",
      date: "April 12, 2023",
      hospital: "Northside Children's Hospital",
      amount: 8000,
      purpose: "Utilities",
      status: "Completed",
      requestedBy: "Supervisor - David Wilson",
    },
    {
      id: "TRF-005",
      date: "April 10, 2023",
      hospital: "Central City Hospital",
      amount: 12000,
      purpose: "Food Supplies",
      status: "Pending",
      requestedBy: "ADM - John Smith",
    },
  ]

  // Sample fund requests from GS
  const fundRequests = [
    {
      id: "FR-001",
      date: "April 22, 2023",
      amount: 100000,
      purpose: "Monthly Hospital Operations",
      status: "Pending",
      requestedBy: "GS - Sarah Parker",
    },
    {
      id: "FR-002",
      date: "April 15, 2023",
      amount: 50000,
      purpose: "Emergency Medical Supplies",
      status: "Approved",
      requestedBy: "GS - Sarah Parker",
    },
    {
      id: "FR-003",
      date: "April 5, 2023",
      amount: 75000,
      purpose: "Staff Salaries",
      status: "Completed",
      requestedBy: "GS - Sarah Parker",
    },
  ]

  return (
    <div className="container mx-auto p-6">
      <Tabs defaultValue="transfers" className="space-y-6">
        <TabsList>
          <TabsTrigger value="transfers">Hospital Transfers</TabsTrigger>
          <TabsTrigger value="requests">Fund Requests</TabsTrigger>
          <TabsTrigger value="summary">Monthly Summary</TabsTrigger>
        </TabsList>

        <TabsContent value="transfers" className="space-y-6">
          <div className="grid gap-6 md:grid-cols-4">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Total Transferred</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$58,000</div>
                <p className="text-xs text-muted-foreground">This month</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Pending Transfers</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$22,000</div>
                <p className="text-xs text-muted-foreground">Across 2 hospitals</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Salary Transfers</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$35,000</div>
                <p className="text-xs text-muted-foreground">This month</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Food & Utilities</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$23,000</div>
                <p className="text-xs text-muted-foreground">This month</p>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Money Transfers</CardTitle>
              <CardDescription>Recent money transfers to hospitals</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>ID</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Hospital</TableHead>
                    <TableHead>Amount</TableHead>
                    <TableHead>Purpose</TableHead>
                    <TableHead>Requested By</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {transfers.map((transfer) => (
                    <TableRow key={transfer.id}>
                      <TableCell className="font-medium">{transfer.id}</TableCell>
                      <TableCell>{transfer.date}</TableCell>
                      <TableCell>{transfer.hospital}</TableCell>
                      <TableCell>${transfer.amount.toLocaleString()}</TableCell>
                      <TableCell>{transfer.purpose}</TableCell>
                      <TableCell>{transfer.requestedBy}</TableCell>
                      <TableCell>
                        <TransferStatusBadge status={transfer.status} />
                      </TableCell>
                      <TableCell>
                        {transfer.status === "Pending" ? (
                          <div className="flex space-x-2">
                            <Button size="sm" variant="outline" className="h-8 w-8 p-0">
                              <Check className="h-4 w-4" />
                              <span className="sr-only">Approve</span>
                            </Button>
                            <Button size="sm" variant="outline" className="h-8 w-8 p-0 text-destructive">
                              <span className="sr-only">Reject</span>✕
                            </Button>
                          </div>
                        ) : (
                          <Button size="sm" variant="outline" className="h-8">
                            View Details
                          </Button>
                        )}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="requests" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Fund Requests from GS</CardTitle>
              <CardDescription>Requests for funds from General Secretary</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>ID</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Amount</TableHead>
                    <TableHead>Purpose</TableHead>
                    <TableHead>Requested By</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {fundRequests.map((request) => (
                    <TableRow key={request.id}>
                      <TableCell className="font-medium">{request.id}</TableCell>
                      <TableCell>{request.date}</TableCell>
                      <TableCell>${request.amount.toLocaleString()}</TableCell>
                      <TableCell>{request.purpose}</TableCell>
                      <TableCell>{request.requestedBy}</TableCell>
                      <TableCell>
                        <TransferStatusBadge status={request.status} />
                      </TableCell>
                      <TableCell>
                        {request.status === "Pending" ? (
                          <div className="flex space-x-2">
                            <Button size="sm" variant="outline" className="h-8">
                              Request Funds
                            </Button>
                          </div>
                        ) : (
                          <Button size="sm" variant="outline" className="h-8">
                            View Details
                          </Button>
                        )}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
              <div className="mt-4">
                <Button>
                  <ArrowUpRight className="mr-2 h-4 w-4" />
                  Request Funds from GS
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="summary">
          <Card>
            <CardHeader>
              <CardTitle>Monthly Transfer Summary</CardTitle>
              <CardDescription>Overview of all money transfers this month</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center py-10">
                <p className="text-muted-foreground">Monthly transfer summary charts would appear here</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

function TransferStatusBadge({ status }: { status: string }) {
  switch (status) {
    case "Completed":
      return (
        <Badge className="bg-green-100 text-green-800">
          <Check className="mr-1 h-3 w-3" />
          Completed
        </Badge>
      )
    case "Pending":
      return (
        <Badge className="bg-amber-100 text-amber-800">
          <Clock className="mr-1 h-3 w-3" />
          Pending
        </Badge>
      )
    case "Approved":
      return (
        <Badge className="bg-blue-100 text-blue-800">
          <Calendar className="mr-1 h-3 w-3" />
          Approved
        </Badge>
      )
    default:
      return <Badge variant="outline">Unknown</Badge>
  }
}
