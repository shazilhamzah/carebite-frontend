"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {
  ArrowUpRight,
  Calendar,
  CreditCard,
  DollarSign,
  Download,
  Filter,
  PiggyBank,
  Plus,
  Search,
  TrendingUp,
} from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

export default function Donations() {
  const [filter, setFilter] = useState("all")
  const [search, setSearch] = useState("")

  // Sample donations data
  const donations = [
    {
      id: 1,
      donor: "John Smith",
      amount: 5000,
      date: "2023-04-15",
      type: "One-time",
      status: "Completed",
      purpose: "Medical Supplies",
    },
    {
      id: 2,
      donor: "ABC Corporation",
      amount: 10000,
      date: "2023-04-10",
      type: "Corporate",
      status: "Completed",
      purpose: "General Fund",
    },
    {
      id: 3,
      donor: "Sarah Johnson",
      amount: 1200,
      date: "2023-04-05",
      type: "Monthly",
      status: "Completed",
      purpose: "Food Program",
    },
    {
      id: 4,
      donor: "Michael Brown",
      amount: 3500,
      date: "2023-04-01",
      type: "One-time",
      status: "Completed",
      purpose: "Medical Supplies",
    },
    {
      id: 5,
      donor: "XYZ Foundation",
      amount: 25000,
      date: "2023-03-28",
      type: "Grant",
      status: "Completed",
      purpose: "Infrastructure",
    },
  ]

  // Filter donations based on search and filter
  const filteredDonations = donations.filter((donation) => {
    // Filter by search
    const matchesSearch =
      donation.donor.toLowerCase().includes(search.toLowerCase()) ||
      donation.purpose.toLowerCase().includes(search.toLowerCase())

    // Filter by type
    if (filter !== "all" && donation.type.toLowerCase() !== filter.toLowerCase()) {
      return false
    }

    return matchesSearch
  })

  // Calculate total donations
  const totalDonations = donations.reduce((sum, donation) => sum + donation.amount, 0)
  const monthlyDonations = donations
    .filter((d) => new Date(d.date).getMonth() === new Date().getMonth())
    .reduce((sum, donation) => sum + donation.amount, 0)

  return (
    <div className="container mx-auto p-6">
      <Tabs defaultValue="overview" className="space-y-6">
        <div className="flex items-center justify-between">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="history">Donation History</TabsTrigger>
            <TabsTrigger value="reports">Reports</TabsTrigger>
          </TabsList>
          <Dialog>
            <DialogTrigger asChild>
              <Button>
                <Plus className="mr-2 h-4 w-4" />
                Record Donation
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[525px]">
              <DialogHeader>
                <DialogTitle>Record New Donation</DialogTitle>
                <DialogDescription>Enter the details of the new donation.</DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="donor">Donor Name</Label>
                    <Input id="donor" placeholder="Donor name" />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="amount">Amount</Label>
                    <Input id="amount" type="number" placeholder="0.00" />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="date">Date</Label>
                    <Input id="date" type="date" />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="type">Donation Type</Label>
                    <Select>
                      <SelectTrigger id="type">
                        <SelectValue placeholder="Select type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="one-time">One-time</SelectItem>
                        <SelectItem value="monthly">Monthly</SelectItem>
                        <SelectItem value="corporate">Corporate</SelectItem>
                        <SelectItem value="grant">Grant</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="purpose">Purpose</Label>
                  <Select>
                    <SelectTrigger id="purpose">
                      <SelectValue placeholder="Select purpose" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="general">General Fund</SelectItem>
                      <SelectItem value="medical">Medical Supplies</SelectItem>
                      <SelectItem value="food">Food Program</SelectItem>
                      <SelectItem value="infrastructure">Infrastructure</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <DialogFooter>
                <Button type="button" variant="outline">
                  Cancel
                </Button>
                <Button type="submit">Save Donation</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>

        <TabsContent value="overview" className="space-y-6">
          <div className="grid gap-6 md:grid-cols-4">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Total Donations</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-baseline justify-between">
                  <div className="text-2xl font-bold">${totalDonations.toLocaleString()}</div>
                  <div className="flex items-center text-sm text-green-600">
                    <TrendingUp className="mr-1 h-4 w-4" />
                    12.5%
                  </div>
                </div>
                <p className="text-xs text-muted-foreground">Compared to last year</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Monthly Donations</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-baseline justify-between">
                  <div className="text-2xl font-bold">${monthlyDonations.toLocaleString()}</div>
                  <div className="flex items-center text-sm text-green-600">
                    <TrendingUp className="mr-1 h-4 w-4" />
                    8.2%
                  </div>
                </div>
                <p className="text-xs text-muted-foreground">Compared to last month</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Donors</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-baseline justify-between">
                  <div className="text-2xl font-bold">{donations.length}</div>
                  <div className="flex items-center text-sm text-green-600">
                    <TrendingUp className="mr-1 h-4 w-4" />
                    3.1%
                  </div>
                </div>
                <p className="text-xs text-muted-foreground">New donors this month</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Average Donation</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-baseline justify-between">
                  <div className="text-2xl font-bold">
                    ${Math.round(totalDonations / donations.length).toLocaleString()}
                  </div>
                  <div className="flex items-center text-sm text-green-600">
                    <TrendingUp className="mr-1 h-4 w-4" />
                    15.3%
                  </div>
                </div>
                <p className="text-xs text-muted-foreground">Compared to last month</p>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Recent Donations</CardTitle>
              <CardDescription>Latest donations received</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {donations.slice(0, 3).map((donation) => (
                  <div key={donation.id} className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="mr-2 flex h-10 w-10 items-center justify-center rounded-full bg-green-100">
                        <ArrowUpRight className="h-5 w-5 text-green-600" />
                      </div>
                      <div>
                        <div className="font-medium">{donation.donor}</div>
                        <div className="text-xs text-muted-foreground">
                          {new Date(donation.date).toLocaleDateString()} • {donation.purpose}
                        </div>
                      </div>
                    </div>
                    <div className="font-medium text-green-600">${donation.amount.toLocaleString()}</div>
                  </div>
                ))}
                <Button variant="ghost" className="mt-4 w-full">
                  View All Donations
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="history">
          <Card>
            <CardHeader className="pb-3">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <CardTitle>Donation History</CardTitle>
                <div className="flex flex-col sm:flex-row gap-2 w-full md:w-auto">
                  <div className="flex items-center gap-2">
                    <Search className="h-4 w-4 text-muted-foreground" />
                    <Input
                      placeholder="Search donations..."
                      className="w-full sm:w-[200px]"
                      value={search}
                      onChange={(e) => setSearch(e.target.value)}
                    />
                  </div>
                  <div className="flex items-center gap-2">
                    <Filter className="h-4 w-4 text-muted-foreground" />
                    <Select value={filter} onValueChange={setFilter}>
                      <SelectTrigger className="w-full sm:w-[150px]">
                        <SelectValue placeholder="Filter by type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Types</SelectItem>
                        <SelectItem value="one-time">One-time</SelectItem>
                        <SelectItem value="monthly">Monthly</SelectItem>
                        <SelectItem value="corporate">Corporate</SelectItem>
                        <SelectItem value="grant">Grant</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Donor</TableHead>
                    <TableHead>Amount</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Purpose</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredDonations.map((donation) => (
                    <TableRow key={donation.id}>
                      <TableCell className="font-medium">{donation.donor}</TableCell>
                      <TableCell>${donation.amount.toLocaleString()}</TableCell>
                      <TableCell>{new Date(donation.date).toLocaleDateString()}</TableCell>
                      <TableCell>{donation.type}</TableCell>
                      <TableCell>{donation.purpose}</TableCell>
                      <TableCell>
                        <Badge className="bg-green-500">{donation.status}</Badge>
                      </TableCell>
                      <TableCell className="text-right">
                        <Button variant="ghost" size="sm">
                          <Download className="mr-2 h-4 w-4" />
                          Receipt
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="reports">
          <Card>
            <CardHeader>
              <CardTitle>Donation Reports</CardTitle>
              <CardDescription>Generate and download donation reports</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b pb-4">
                  <div className="flex items-center">
                    <div className="mr-2 flex h-10 w-10 items-center justify-center rounded-full bg-blue-100">
                      <Calendar className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <div className="font-medium">Monthly Donation Report</div>
                      <div className="text-xs text-muted-foreground">
                        Summary of all donations for the current month
                      </div>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    <Download className="mr-2 h-4 w-4" />
                    Download
                  </Button>
                </div>
                <div className="flex items-center justify-between border-b pb-4">
                  <div className="flex items-center">
                    <div className="mr-2 flex h-10 w-10 items-center justify-center rounded-full bg-purple-100">
                      <PiggyBank className="h-5 w-5 text-purple-600" />
                    </div>
                    <div>
                      <div className="font-medium">Annual Donation Report</div>
                      <div className="text-xs text-muted-foreground">
                        Complete donation summary for the current year
                      </div>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    <Download className="mr-2 h-4 w-4" />
                    Download
                  </Button>
                </div>
                <div className="flex items-center justify-between border-b pb-4">
                  <div className="flex items-center">
                    <div className="mr-2 flex h-10 w-10 items-center justify-center rounded-full bg-green-100">
                      <CreditCard className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                      <div className="font-medium">Donor Statements</div>
                      <div className="text-xs text-muted-foreground">
                        Individual donation statements for tax purposes
                      </div>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    <Download className="mr-2 h-4 w-4" />
                    Download
                  </Button>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="mr-2 flex h-10 w-10 items-center justify-center rounded-full bg-amber-100">
                      <DollarSign className="h-5 w-5 text-amber-600" />
                    </div>
                    <div>
                      <div className="font-medium">Custom Report</div>
                      <div className="text-xs text-muted-foreground">Generate a custom donation report</div>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    <Plus className="mr-2 h-4 w-4" />
                    Create
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
