"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Download, FileText, PieChart } from "lucide-react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export default function Salary() {
  // Sample salary data
  const salaryHistory = [
    { month: "April 2023", base: 3500, bonus: 500, deductions: 800, net: 3200, status: "Paid" },
    { month: "March 2023", base: 3500, bonus: 0, deductions: 800, net: 2700, status: "Paid" },
    { month: "February 2023", base: 3500, bonus: 250, deductions: 800, net: 2950, status: "Paid" },
    { month: "January 2023", base: 3500, bonus: 0, deductions: 800, net: 2700, status: "Paid" },
    { month: "December 2022", base: 3200, bonus: 1000, deductions: 750, net: 3450, status: "Paid" },
  ]

  return (
    <div className="container mx-auto p-6">
      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="history">Salary History</TabsTrigger>
          <TabsTrigger value="documents">Pay Slips</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <div className="grid gap-6 md:grid-cols-3">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Current Salary</CardTitle>
                <CardDescription>Your base monthly salary</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">$3,500.00</div>
                <p className="text-xs text-muted-foreground">Last updated: January 1, 2023</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Next Payment</CardTitle>
                <CardDescription>Your upcoming salary payment</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">$3,200.00</div>
                <p className="text-xs text-muted-foreground">Expected on: April 30, 2023</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle>YTD Earnings</CardTitle>
                <CardDescription>Your total earnings this year</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">$12,550.00</div>
                <p className="text-xs text-muted-foreground">From January to April 2023</p>
              </CardContent>
            </Card>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Salary Breakdown</CardTitle>
                <CardDescription>Your current salary components</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between border-b pb-2">
                    <div className="font-medium">Base Salary</div>
                    <div>$3,500.00</div>
                  </div>
                  <div className="flex items-center justify-between border-b pb-2">
                    <div className="font-medium">Housing Allowance</div>
                    <div>$500.00</div>
                  </div>
                  <div className="flex items-center justify-between border-b pb-2">
                    <div className="font-medium">Transportation Allowance</div>
                    <div>$200.00</div>
                  </div>
                  <div className="flex items-center justify-between border-b pb-2 text-destructive">
                    <div className="font-medium">Tax Deductions</div>
                    <div>-$700.00</div>
                  </div>
                  <div className="flex items-center justify-between border-b pb-2 text-destructive">
                    <div className="font-medium">Insurance</div>
                    <div>-$100.00</div>
                  </div>
                  <div className="flex items-center justify-between pt-2">
                    <div className="text-lg font-bold">Net Salary</div>
                    <div className="text-lg font-bold">$3,400.00</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle>Salary Distribution</CardTitle>
                  <CardDescription>Visual breakdown of your salary</CardDescription>
                </div>
                <PieChart className="h-5 w-5 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="h-[250px] flex items-center justify-center">
                  <div className="text-center text-muted-foreground">Salary distribution chart would appear here</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="history">
          <Card>
            <CardHeader>
              <CardTitle>Salary History</CardTitle>
              <CardDescription>Your salary payments for the past months</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Month</TableHead>
                    <TableHead>Base Salary</TableHead>
                    <TableHead>Bonus</TableHead>
                    <TableHead>Deductions</TableHead>
                    <TableHead>Net Salary</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {salaryHistory.map((item, index) => (
                    <TableRow key={index}>
                      <TableCell>{item.month}</TableCell>
                      <TableCell>${item.base.toLocaleString()}</TableCell>
                      <TableCell>${item.bonus.toLocaleString()}</TableCell>
                      <TableCell>${item.deductions.toLocaleString()}</TableCell>
                      <TableCell className="font-medium">${item.net.toLocaleString()}</TableCell>
                      <TableCell>
                        <span className="rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-800">
                          {item.status}
                        </span>
                      </TableCell>
                      <TableCell>
                        <Button variant="ghost" size="sm">
                          <Download className="mr-2 h-4 w-4" />
                          Download
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="documents">
          <Card>
            <CardHeader>
              <CardTitle>Pay Slips</CardTitle>
              <CardDescription>Download your monthly pay slips</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {salaryHistory.map((item, index) => (
                  <div key={index} className="flex items-center justify-between border-b pb-4">
                    <div className="flex items-center">
                      <FileText className="mr-3 h-5 w-5 text-muted-foreground" />
                      <div>
                        <div className="font-medium">{item.month} Pay Slip</div>
                        <div className="text-sm text-muted-foreground">Net Amount: ${item.net.toLocaleString()}</div>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">
                      <Download className="mr-2 h-4 w-4" />
                      Download
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
