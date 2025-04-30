"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowUpRight, DollarSign, LineChart, PiggyBank, TrendingUp } from "lucide-react"

export default function FundsStatus() {
  return (
    <div className="container mx-auto p-6">
      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="donations">Donations</TabsTrigger>
          <TabsTrigger value="expenses">Expenses</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <div className="grid gap-6 md:grid-cols-4">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Total Funds</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-baseline justify-between">
                  <div className="text-2xl font-bold">$1,248,560</div>
                  <div className="flex items-center text-sm text-green-600">
                    <TrendingUp className="mr-1 h-4 w-4" />
                    12.5%
                  </div>
                </div>
                <p className="text-xs text-muted-foreground">Compared to last month</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Monthly Donations</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-baseline justify-between">
                  <div className="text-2xl font-bold">$85,240</div>
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
                <CardTitle className="text-sm font-medium">Monthly Expenses</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-baseline justify-between">
                  <div className="text-2xl font-bold">$62,180</div>
                  <div className="flex items-center text-sm text-red-600">
                    <TrendingUp className="mr-1 h-4 w-4" />
                    3.1%
                  </div>
                </div>
                <p className="text-xs text-muted-foreground">Compared to last month</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Available Balance</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-baseline justify-between">
                  <div className="text-2xl font-bold">$186,380</div>
                  <div className="flex items-center text-sm text-green-600">
                    <TrendingUp className="mr-1 h-4 w-4" />
                    15.3%
                  </div>
                </div>
                <p className="text-xs text-muted-foreground">Compared to last month</p>
              </CardContent>
            </Card>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <Card className="col-span-2">
              <CardHeader>
                <CardTitle>Funds Overview</CardTitle>
                <CardDescription>Monthly funds flow for the current year</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px] flex items-center justify-center">
                  <LineChart className="h-8 w-8 text-muted-foreground" />
                  <span className="ml-2 text-muted-foreground">Fund flow chart would appear here</span>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Allocation by Category</CardTitle>
                <CardDescription>How funds are being allocated</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="mr-2 h-4 w-4 rounded-full bg-primary"></div>
                      <span>Medical Supplies</span>
                    </div>
                    <div className="font-medium">45%</div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="mr-2 h-4 w-4 rounded-full bg-blue-500"></div>
                      <span>Food & Nutrition</span>
                    </div>
                    <div className="font-medium">30%</div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="mr-2 h-4 w-4 rounded-full bg-green-500"></div>
                      <span>Staff Salaries</span>
                    </div>
                    <div className="font-medium">15%</div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="mr-2 h-4 w-4 rounded-full bg-yellow-500"></div>
                      <span>Infrastructure</span>
                    </div>
                    <div className="font-medium">7%</div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="mr-2 h-4 w-4 rounded-full bg-purple-500"></div>
                      <span>Administrative</span>
                    </div>
                    <div className="font-medium">3%</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Recent Transactions</CardTitle>
                <CardDescription>Latest fund movements</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="mr-2 flex h-10 w-10 items-center justify-center rounded-full bg-green-100">
                        <ArrowUpRight className="h-5 w-5 text-green-600" />
                      </div>
                      <div>
                        <div className="font-medium">Donation from ABC Corp</div>
                        <div className="text-xs text-muted-foreground">April 22, 2023</div>
                      </div>
                    </div>
                    <div className="font-medium text-green-600">+$25,000</div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="mr-2 flex h-10 w-10 items-center justify-center rounded-full bg-red-100">
                        <DollarSign className="h-5 w-5 text-red-600" />
                      </div>
                      <div>
                        <div className="font-medium">Medical Supplies Purchase</div>
                        <div className="text-xs text-muted-foreground">April 20, 2023</div>
                      </div>
                    </div>
                    <div className="font-medium text-red-600">-$12,350</div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="mr-2 flex h-10 w-10 items-center justify-center rounded-full bg-green-100">
                        <PiggyBank className="h-5 w-5 text-green-600" />
                      </div>
                      <div>
                        <div className="font-medium">Grant Received</div>
                        <div className="text-xs text-muted-foreground">April 18, 2023</div>
                      </div>
                    </div>
                    <div className="font-medium text-green-600">+$50,000</div>
                  </div>
                </div>
                <Button variant="ghost" className="mt-4 w-full">
                  View All Transactions
                </Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="donations">
          <Card>
            <CardHeader>
              <CardTitle>Donations</CardTitle>
              <CardDescription>Detailed view of all donations</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center py-10">
                <p className="text-muted-foreground">Donations details would appear here</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="expenses">
          <Card>
            <CardHeader>
              <CardTitle>Expenses</CardTitle>
              <CardDescription>Detailed view of all expenses</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center py-10">
                <p className="text-muted-foreground">Expenses details would appear here</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
