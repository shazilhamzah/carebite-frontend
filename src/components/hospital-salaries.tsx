"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
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
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowUpDown, Calendar, CreditCard, DollarSign, Download, FileText, Plus, Search } from "lucide-react"

export default function HospitalSalaries() {
  const [month, setMonth] = useState("May 2023")

  // Sample salary data
  const salaryData = [
    { id: 1, name: "John Doe", position: "Chef", department: "Kitchen", salary: 3500, status: "paid" },
    { id: 2, name: "Jane Smith", position: "Nutritionist", department: "Dietary", salary: 4200, status: "paid" },
    { id: 3, name: "Mike Johnson", position: "Kitchen Helper", department: "Kitchen", salary: 2800, status: "pending" },
    {
      id: 4,
      name: "Sarah Williams",
      position: "Food Service Manager",
      department: "Administration",
      salary: 4800,
      status: "paid",
    },
    { id: 5, name: "Robert Brown", position: "Dietitian", department: "Dietary", salary: 4000, status: "pending" },
    { id: 6, name: "Emily Davis", position: "Server", department: "Service", salary: 2600, status: "pending" },
    {
      id: 7,
      name: "David Miller",
      position: "Inventory Manager",
      department: "Administration",
      salary: 3800,
      status: "paid",
    },
    { id: 8, name: "Lisa Wilson", position: "Kitchen Helper", department: "Kitchen", salary: 2800, status: "pending" },
  ]

  // Calculate totals
  const totalSalary = salaryData.reduce((sum, item) => sum + item.salary, 0)
  const paidSalary = salaryData.filter((item) => item.status === "paid").reduce((sum, item) => sum + item.salary, 0)
  const pendingSalary = salaryData
    .filter((item) => item.status === "pending")
    .reduce((sum, item) => sum + item.salary, 0)

  return (
    <div className="space-y-6 m-8">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Hospital Salaries</h2>
        <div className="flex items-center gap-2">
          <Select value={month} onValueChange={setMonth}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select month" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="May 2023">May 2023</SelectItem>
              <SelectItem value="April 2023">April 2023</SelectItem>
              <SelectItem value="March 2023">March 2023</SelectItem>
            </SelectContent>
          </Select>
          <RequestFundsDialog />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Salary Budget</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${totalSalary.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">For {month}</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Paid Salaries</CardTitle>
            <CreditCard className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${paidSalary.toLocaleString()}</div>
            <div className="flex items-center text-xs text-muted-foreground">
              <Calendar className="mr-1 h-3 w-3" />
              <span>Last updated May 15, 2023</span>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pending Salaries</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${pendingSalary.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">
              {salaryData.filter((item) => item.status === "pending").length} employees pending payment
            </p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Employee Salaries</CardTitle>
              <CardDescription>Manage and track employee salaries</CardDescription>
            </div>
            <div className="flex items-center gap-2">
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input type="search" placeholder="Search employees..." className="w-[200px] pl-8" />
              </div>
              <Button variant="outline" size="sm">
                <Download className="mr-2 h-4 w-4" />
                Export
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>
                  <Button variant="ghost" className="p-0 h-8 font-medium">
                    Name
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                  </Button>
                </TableHead>
                <TableHead>Position</TableHead>
                <TableHead>Department</TableHead>
                <TableHead>
                  <Button variant="ghost" className="p-0 h-8 font-medium">
                    Salary
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                  </Button>
                </TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {salaryData.map((employee) => (
                <TableRow key={employee.id}>
                  <TableCell className="font-medium">{employee.name}</TableCell>
                  <TableCell>{employee.position}</TableCell>
                  <TableCell>{employee.department}</TableCell>
                  <TableCell>${employee.salary.toLocaleString()}</TableCell>
                  <TableCell>
                    {employee.status === "paid" ? (
                      <Badge variant="outline" className="bg-green-50 text-green-600 hover:bg-green-50">
                        Paid
                      </Badge>
                    ) : (
                      <Badge variant="outline" className="bg-yellow-50 text-yellow-600 hover:bg-yellow-50">
                        Pending
                      </Badge>
                    )}
                  </TableCell>
                  <TableCell>
                    <Button size="sm" variant="outline">
                      View Details
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}

function RequestFundsDialog() {
  const [open, setOpen] = useState(false)

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Request Salary Funds
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[525px]">
        <DialogHeader>
          <DialogTitle>Request Salary Funds</DialogTitle>
          <DialogDescription>Submit a request for additional salary funds.</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid gap-2">
            <Label htmlFor="amount">Amount Requested</Label>
            <div className="relative">
              <DollarSign className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input id="amount" type="number" className="pl-8" placeholder="0.00" />
            </div>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="reason">Reason for Request</Label>
            <Select>
              <SelectTrigger id="reason">
                <SelectValue placeholder="Select reason" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="new-hires">New Hires</SelectItem>
                <SelectItem value="salary-increase">Salary Increases</SelectItem>
                <SelectItem value="bonus">Bonus Payments</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="details">Additional Details</Label>
            <Input id="details" placeholder="Provide additional details" />
          </div>
        </div>
        <DialogFooter>
          <Button type="button" variant="outline" onClick={() => setOpen(false)}>
            Cancel
          </Button>
          <Button type="submit" onClick={() => setOpen(false)}>
            Submit Request
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
