"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Building, Edit, Phone, Users } from "lucide-react"

interface HospitalInformationProps {
  viewOnly?: boolean
}

export default function HospitalInformation({ viewOnly = false }: HospitalInformationProps) {
  // Sample hospital data
  const hospitalData = {
    name: "General Hospital",
    address: "123 Main Street, City, Country",
    phone: "+1 234 567 8901",
    email: "info@generalhospital.com",
    capacity: 500,
    occupancy: 350,
    departments: 12,
    staff: 200,
    established: "1985",
    management: [
      { name: "Dr. John Smith", position: "Hospital Director", contact: "+1 234 567 8902" },
      { name: "Dr. Sarah Johnson", position: "Medical Director", contact: "+1 234 567 8903" },
      { name: "Michael Brown", position: "Administrative Director", contact: "+1 234 567 8904" },
      { name: "Emily Davis", position: "Nursing Director", contact: "+1 234 567 8905" },
    ],
    statistics: {
      patientsSeen: 12500,
      averageStay: 4.2,
      satisfactionRate: 92,
      emergencyVisits: 3200,
    },
  }

  return (
    <div className="space-y-6 m-6">
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-2xl">{hospitalData.name}</CardTitle>
              <CardDescription>{hospitalData.address}</CardDescription>
            </div>
            {!viewOnly && (
              <Button variant="outline" size="sm">
                <Edit className="mr-2 h-4 w-4" />
                Edit Information
              </Button>
            )}
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-medium mb-2">Contact Information</h3>
              <div className="space-y-2">
                <div className="flex items-center">
                  <Phone className="h-4 w-4 mr-2 text-muted-foreground" />
                  <span>{hospitalData.phone}</span>
                </div>
                <div className="flex items-center">
                  <Building className="h-4 w-4 mr-2 text-muted-foreground" />
                  <span>Established {hospitalData.established}</span>
                </div>
                <div className="flex items-center">
                  <Users className="h-4 w-4 mr-2 text-muted-foreground" />
                  <span>{hospitalData.staff} Staff Members</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-2">Capacity</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">Bed Occupancy</span>
                    <span className="text-sm text-muted-foreground">
                      {hospitalData.occupancy}/{hospitalData.capacity}
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div
                      className="bg-blue-600 h-2.5 rounded-full"
                      style={{ width: `${(hospitalData.occupancy / hospitalData.capacity) * 100}%` }}
                    ></div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-blue-50 p-3 rounded-lg">
                    <span className="block text-sm text-muted-foreground">Departments</span>
                    <span className="text-xl font-bold">{hospitalData.departments}</span>
                  </div>
                  <div className="bg-green-50 p-3 rounded-lg">
                    <span className="block text-sm text-muted-foreground">Satisfaction</span>
                    <span className="text-xl font-bold">{hospitalData.statistics.satisfactionRate}%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="management">
        <TabsList>
          <TabsTrigger value="management">Management Team</TabsTrigger>
          <TabsTrigger value="statistics">Hospital Statistics</TabsTrigger>
        </TabsList>

        <TabsContent value="management" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle>Management Team</CardTitle>
              <CardDescription>Key personnel managing the hospital operations</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Position</TableHead>
                    <TableHead>Contact</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {hospitalData.management.map((person, index) => (
                    <TableRow key={index}>
                      <TableCell className="font-medium">{person.name}</TableCell>
                      <TableCell>{person.position}</TableCell>
                      <TableCell>{person.contact}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="statistics" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle>Hospital Statistics</CardTitle>
              <CardDescription>Performance metrics for the current year</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <span className="block text-sm text-muted-foreground">Patients Seen</span>
                  <span className="text-2xl font-bold">{hospitalData.statistics.patientsSeen.toLocaleString()}</span>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <span className="block text-sm text-muted-foreground">Avg. Stay (days)</span>
                  <span className="text-2xl font-bold">{hospitalData.statistics.averageStay}</span>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <span className="block text-sm text-muted-foreground">Satisfaction</span>
                  <span className="text-2xl font-bold">{hospitalData.statistics.satisfactionRate}%</span>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <span className="block text-sm text-muted-foreground">Emergency Visits</span>
                  <span className="text-2xl font-bold">{hospitalData.statistics.emergencyVisits.toLocaleString()}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
