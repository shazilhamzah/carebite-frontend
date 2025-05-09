"use client";

import type React from "react";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  BanknoteIcon,
  CalendarIcon,
  CreditCardIcon,
  DollarSignIcon,
  PiggyBankIcon,
  TrendingUpIcon,
  WalletIcon,
  ArrowUpIcon,
  ArrowDownIcon,
} from "lucide-react";

// Sample salary data - in a real app, this would come from an API or database
const currentMonth = "April 2023";
const salaryData = {
  baseSalary: 5800,
  allowances: 1200,
  overtime: 450,
  bonus: 1500,
  grossSalary: 8950,
  deductions: {
    tax: 1790,
    insurance: 350,
    retirement: 580,
    other: 120,
    total: 2840,
  },
  netSalary: 6110,
  received: 4500,
  pending: 1610,
  paymentDate: "April 30, 2023",
  ytdEarnings: 24440,
  ytdTax: 4888,
};

const recentPayments = [
  { month: "March 2023", amount: 5980, status: "paid", date: "March 31, 2023" },
  {
    month: "February 2023",
    amount: 6240,
    status: "paid",
    date: "February 28, 2023",
  },
  {
    month: "January 2023",
    amount: 6110,
    status: "paid",
    date: "January 31, 2023",
  },
  {
    month: "December 2022",
    amount: 7200,
    status: "paid",
    date: "December 31, 2022",
  },
];

export default function Salary() {
  // Calculate percentage of salary received
  const receivedPercentage = Math.round(
    (salaryData.received / salaryData.netSalary) * 100
  );

  return (
    <div className="flex flex-1 flex-col">
      <div className="@container/main flex flex-1 flex-col gap-2">
        <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
          <div className="px-4 lg:px-6">
            <Card className="overflow-hidden">
              <CardHeader className="bg-primary/5 pb-6 pt-6">
                <div className="flex flex-col space-y-4">
                  <div className="flex items-center justify-between">
                    <CardTitle className="flex items-center gap-2">
                      <WalletIcon className="h-5 w-5 text-primary" />
                      Salary & Compensation
                    </CardTitle>
                    <Badge
                      variant="outline"
                      className="bg-primary/10 text-primary px-2.5 py-1"
                    >
                      {currentMonth}
                    </Badge>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <SalaryCard
                      title="Net Salary"
                      amount={salaryData.netSalary}
                      icon={
                        <DollarSignIcon className="h-5 w-5 text-green-500" />
                      }
                      trend={<ArrowUpIcon className="h-4 w-4 text-green-500" />}
                      trendText="+2.5% from last month"
                      bgColor="bg-green-50"
                      textColor="text-green-700"
                    />
                    <SalaryCard
                      title="Bonus"
                      amount={salaryData.bonus}
                      icon={
                        <TrendingUpIcon className="h-5 w-5 text-blue-500" />
                      }
                      trend={<ArrowUpIcon className="h-4 w-4 text-blue-500" />}
                      trendText="Performance bonus"
                      bgColor="bg-blue-50"
                      textColor="text-blue-700"
                    />
                    <SalaryCard
                      title="YTD Earnings"
                      amount={salaryData.ytdEarnings}
                      icon={
                        <PiggyBankIcon className="h-5 w-5 text-purple-500" />
                      }
                      bgColor="bg-purple-50"
                      textColor="text-purple-700"
                    />
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Payment Status</span>
                      <span className="font-medium">
                        ${salaryData.received} of ${salaryData.netSalary}{" "}
                        received
                      </span>
                    </div>
                    <Progress value={receivedPercentage} className="h-2" />
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <span>
                        Next payment: ${salaryData.pending} on{" "}
                        {salaryData.paymentDate}
                      </span>
                      <span>{receivedPercentage}% received</span>
                    </div>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="p-0">
                <Tabs defaultValue="breakdown" className="w-full">
                  <div className="border-b">
                    <TabsList className="mx-4 my-2">
                      <TabsTrigger value="breakdown">
                        Salary Breakdown
                      </TabsTrigger>
                      <TabsTrigger value="history">Payment History</TabsTrigger>
                    </TabsList>
                  </div>

                  <TabsContent value="breakdown" className="p-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <h3 className="font-semibold text-lg flex items-center gap-2">
                          <BanknoteIcon className="h-4 w-4 text-primary" />
                          Earnings
                        </h3>
                        <Table>
                          <TableBody>
                            <TableRow>
                              <TableCell className="font-medium">
                                Base Salary
                              </TableCell>
                              <TableCell className="text-right">
                                ${salaryData.baseSalary.toLocaleString()}
                              </TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell className="font-medium">
                                Allowances
                              </TableCell>
                              <TableCell className="text-right">
                                ${salaryData.allowances.toLocaleString()}
                              </TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell className="font-medium">
                                Overtime
                              </TableCell>
                              <TableCell className="text-right">
                                ${salaryData.overtime.toLocaleString()}
                              </TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell className="font-medium">
                                Bonus
                              </TableCell>
                              <TableCell className="text-right">
                                ${salaryData.bonus.toLocaleString()}
                              </TableCell>
                            </TableRow>
                            <TableRow className="border-t-2">
                              <TableCell className="font-bold">
                                Gross Salary
                              </TableCell>
                              <TableCell className="text-right font-bold">
                                ${salaryData.grossSalary.toLocaleString()}
                              </TableCell>
                            </TableRow>
                          </TableBody>
                        </Table>
                      </div>

                      <div className="space-y-4">
                        <h3 className="font-semibold text-lg flex items-center gap-2">
                          <ArrowDownIcon className="h-4 w-4 text-primary" />
                          Deductions
                        </h3>
                        <Table>
                          <TableBody>
                            <TableRow>
                              <TableCell className="font-medium">Tax</TableCell>
                              <TableCell className="text-right">
                                ${salaryData.deductions.tax.toLocaleString()}
                              </TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell className="font-medium">
                                Insurance
                              </TableCell>
                              <TableCell className="text-right">
                                $
                                {salaryData.deductions.insurance.toLocaleString()}
                              </TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell className="font-medium">
                                Retirement
                              </TableCell>
                              <TableCell className="text-right">
                                $
                                {salaryData.deductions.retirement.toLocaleString()}
                              </TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell className="font-medium">
                                Other
                              </TableCell>
                              <TableCell className="text-right">
                                ${salaryData.deductions.other.toLocaleString()}
                              </TableCell>
                            </TableRow>
                            <TableRow className="border-t-2">
                              <TableCell className="font-bold">
                                Total Deductions
                              </TableCell>
                              <TableCell className="text-right font-bold">
                                ${salaryData.deductions.total.toLocaleString()}
                              </TableCell>
                            </TableRow>
                          </TableBody>
                        </Table>
                      </div>
                    </div>

                    <div className="mt-6 p-4 bg-primary/5 rounded-lg border">
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                        <div>
                          <h3 className="font-bold text-lg">Net Salary</h3>
                          <p className="text-sm text-muted-foreground">
                            After all deductions
                          </p>
                        </div>
                        <div className="text-2xl font-bold text-primary">
                          ${salaryData.netSalary.toLocaleString()}
                        </div>
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="history" className="p-4">
                    <div className="space-y-4">
                      <h3 className="font-semibold text-lg flex items-center gap-2">
                        <CalendarIcon className="h-4 w-4 text-primary" />
                        Recent Payments
                      </h3>
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead>Month</TableHead>
                            <TableHead>Amount</TableHead>
                            <TableHead>Date</TableHead>
                            <TableHead>Status</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {recentPayments.map((payment, index) => (
                            <TableRow key={index}>
                              <TableCell className="font-medium">
                                {payment.month}
                              </TableCell>
                              <TableCell>
                                ${payment.amount.toLocaleString()}
                              </TableCell>
                              <TableCell>{payment.date}</TableCell>
                              <TableCell>
                                <Badge
                                  variant="outline"
                                  className="bg-green-50 text-green-600 border-green-200 flex w-20 items-center justify-center gap-1"
                                >
                                  <CreditCardIcon className="h-3 w-3" />
                                  Paid
                                </Badge>
                              </TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>

                      <div className="mt-4 p-4 bg-blue-50 rounded-lg border border-blue-200">
                        <div className="flex items-start gap-3">
                          <div className="mt-0.5 flex h-8 w-8 items-center justify-center rounded-full bg-blue-100">
                            <PiggyBankIcon className="h-4 w-4 text-blue-600" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-blue-800">
                              Year-to-Date Summary
                            </h4>
                            <div className="mt-2 grid grid-cols-2 gap-4">
                              <div>
                                <p className="text-sm text-blue-600">
                                  Total Earnings
                                </p>
                                <p className="font-bold text-blue-900">
                                  ${salaryData.ytdEarnings.toLocaleString()}
                                </p>
                              </div>
                              <div>
                                <p className="text-sm text-blue-600">
                                  Total Tax Paid
                                </p>
                                <p className="font-bold text-blue-900">
                                  ${salaryData.ytdTax.toLocaleString()}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

interface SalaryCardProps {
  title: string;
  amount: number;
  icon: React.ReactNode;
  trend?: React.ReactNode;
  trendText?: string;
  bgColor: string;
  textColor: string;
}

function SalaryCard({
  title,
  amount,
  icon,
  trend,
  trendText,
  bgColor,
  textColor,
}: SalaryCardProps) {
  return (
    <div className={`rounded-lg border p-4 ${bgColor}`}>
      <div className="flex justify-between items-start">
        <div className={`rounded-full p-2 ${bgColor}`}>{icon}</div>
        {trend && <div>{trend}</div>}
      </div>
      <div className="mt-2">
        <p className="text-sm font-medium text-muted-foreground">{title}</p>
        <p className={`text-2xl font-bold mt-1 ${textColor}`}>
          ${amount.toLocaleString()}
        </p>
        {trendText && (
          <p className="text-xs mt-1 text-muted-foreground">{trendText}</p>
        )}
      </div>
    </div>
  );
}
