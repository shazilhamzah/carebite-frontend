"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Download, FileText, PieChart, Loader2, AlertCircle } from "lucide-react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { fetchWorkerSalary } from "@/lib/api"
import { AlertDialog, AlertDialogDescription, AlertDialogTitle } from "@/components/ui/alert-dialog"

interface SalaryData {
  pay_id: number
  hospital_id: number
  base_salary: number
  bonus: number
  deductions: number
  receive_status: boolean
  sent_status: boolean
  payment_date: string
}

interface SalaryProps {
  userId: number
}

export default function Salary({ userId }: SalaryProps) {
  const [salaryData, setSalaryData] = useState<SalaryData | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const loadSalary = async () => {
      try {
        const data = await fetchWorkerSalary(userId)
        if (typeof data === "string") {
          // Handle the case where the API returns a string message
          setError(data)
        } else {
          setSalaryData(data)
        }
      } catch (err) {
        setError("Failed to load salary information")
        console.error(err)
      } finally {
        setLoading(false)
      }
    }

    loadSalary()
  }, [userId])

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    )
  }

  if (error || !salaryData) {
    return (
      <div className="container mx-auto p-6">
        <div className="flex items-center gap-3 rounded-md border border-red-300 bg-red-50 p-4 text-red-700">
          <AlertCircle className="h-5 w-5 text-red-600" />
          <span>{error}</span>
        </div>
      </div>
    )
  }

  // Calculate net salary
  const netSalary = (salaryData.base_salary || 0) + (salaryData.bonus || 0) - (salaryData.deductions || 0)

  // Create a history entry from the current salary data
  const salaryHistory = [
    {
      month: new Date(salaryData.payment_date || Date.now()).toLocaleDateString(undefined, {
        year: "numeric",
        month: "long",
      }),
      base: salaryData.base_salary || 0,
      bonus: salaryData.bonus || 0,
      deductions: salaryData.deductions || 0,
      net: netSalary,
      status: salaryData.sent_status ? "Paid" : "Pending",
    },
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
                <div className="text-3xl font-bold">${salaryData.base_salary?.toLocaleString() || "0.00"}</div>
                <p className="text-xs text-muted-foreground">
                  Last updated: {new Date(salaryData.payment_date || Date.now()).toLocaleDateString()}
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Next Payment</CardTitle>
                <CardDescription>Your upcoming salary payment</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">${netSalary.toLocaleString()}</div>
                <p className="text-xs text-muted-foreground">
                  Status: {salaryData.sent_status ? "Processed" : "Pending"}
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Bonus</CardTitle>
                <CardDescription>Your current bonus amount</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">${salaryData.bonus?.toLocaleString() || "0.00"}</div>
                <p className="text-xs text-muted-foreground">Received: {salaryData.receive_status ? "Yes" : "No"}</p>
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
                    <div>${salaryData.base_salary?.toLocaleString() || "0.00"}</div>
                  </div>
                  <div className="flex items-center justify-between border-b pb-2">
                    <div className="font-medium">Bonus</div>
                    <div>${salaryData.bonus?.toLocaleString() || "0.00"}</div>
                  </div>
                  <div className="flex items-center justify-between border-b pb-2 text-destructive">
                    <div className="font-medium">Deductions</div>
                    <div>-${salaryData.deductions?.toLocaleString() || "0.00"}</div>
                  </div>
                  <div className="flex items-center justify-between pt-2">
                    <div className="text-lg font-bold">Net Salary</div>
                    <div className="text-lg font-bold">${netSalary.toLocaleString()}</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle>Payment Status</CardTitle>
                  <CardDescription>Current status of your salary payment</CardDescription>
                </div>
                <PieChart className="h-5 w-5 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="h-[250px] flex flex-col items-center justify-center space-y-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold mb-2">
                      {salaryData.sent_status ? "Payment Sent" : "Payment Pending"}
                    </div>
                    <div className="text-muted-foreground">
                      {salaryData.receive_status ? "Payment has been received" : "Payment has not been received yet"}
                    </div>
                  </div>
                  <div
                    className={`w-24 h-24 rounded-full flex items-center justify-center ${
                      salaryData.receive_status ? "bg-green-100 text-green-600" : "bg-amber-100 text-amber-600"
                    }`}
                  >
                    {salaryData.receive_status ? "Received" : "Pending"}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="history">
          <Card>
            <CardHeader>
              <CardTitle>Salary History</CardTitle>
              <CardDescription>Your salary payments history</CardDescription>
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
                        <span
                          className={`rounded-full px-2 py-1 text-xs font-medium ${
                            item.status === "Paid" ? "bg-green-100 text-green-800" : "bg-amber-100 text-amber-800"
                          }`}
                        >
                          {item.status}
                        </span>
                      </TableCell>
                      <TableCell>
                        <Button variant="ghost" size="sm" disabled={item.status !== "Paid"}>
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
              {salaryHistory.length === 0 ? (
                <div className="text-center text-muted-foreground py-4">No pay slips available</div>
              ) : (
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
                      <Button variant="outline" size="sm" disabled={item.status !== "Paid"}>
                        <Download className="mr-2 h-4 w-4" />
                        Download
                      </Button>
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
