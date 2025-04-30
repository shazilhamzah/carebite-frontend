<<<<<<< HEAD
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
    <div className="space-y-6">
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
=======
"use client";

import type React from "react";

import { useEffect, useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  Building,
  MapPin,
  UserCheck,
  Users,
  ClipboardList,
  UserCog,
  Briefcase,
  Phone,
} from "lucide-react";

export default function HospitalInformation() {
  const [hospitalData, setHospitalData] = useState<any | null>(null);

  useEffect(() => {
    const savedHospital = localStorage.getItem("hospital");
    if (savedHospital) {
      setHospitalData(JSON.parse(savedHospital));
    } else {
      // Default data for demonstration
      setHospitalData({
        name: "City General Hospital",
        address: "123 Healthcare Avenue, Medical District, City, 12345",
        generalSecretary: "Dr. Robert Williams",
        coordinator: "Emily Thompson",
        adm: "Michael Anderson",
        totalWorkers: "487",
        gmHospital: "Dr. Jennifer Parker",
        supervisor: "David Martinez",
        phone: "+1 (555) 123-4567",
        email: "info@citygeneralhospital.org",
        established: "1985",
      });
    }
  }, []);

  return (
    <div className="flex flex-1 flex-col">
      <div className="@container/main flex flex-1 flex-col gap-2">
        <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
          <div className="px-4 lg:px-6">
            <Card className="overflow-hidden">
              <CardHeader className="bg-primary/5 pb-8 pt-6">
                <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                  <Avatar className="h-24 w-24 border-4 border-background shadow-xl">
                    <AvatarImage
                      src="/placeholder.svg?height=96&width=96"
                      alt={hospitalData?.name || "Hospital Logo"}
                    />
                    <AvatarFallback className="text-xl bg-primary/10 text-primary">
                      {hospitalData?.name
                        ?.split(" ")
                        .map((word: string) => word[0])
                        .join("") || "H"}
                    </AvatarFallback>
                  </Avatar>
                  <div className="text-center md:text-left space-y-1.5">
                    <h2 className="text-2xl font-bold">
                      {hospitalData?.name || "Hospital Name"}
                    </h2>
                    <div className="flex flex-wrap items-center justify-center md:justify-start gap-2">
                      <Badge
                        variant="outline"
                        className="flex items-center gap-1 px-2 py-1 font-medium"
                      >
                        <Building className="h-3.5 w-3.5" />
                        Healthcare Facility
                      </Badge>
                      <Badge
                        variant="outline"
                        className="flex items-center gap-1 px-2 py-1 font-medium"
                      >
                        <Users className="h-3.5 w-3.5" />
                        {hospitalData?.totalWorkers || "0"} Staff
                      </Badge>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
                  <InfoItem
                    icon={<MapPin className="h-4 w-4 text-primary" />}
                    label="Address"
                    value={hospitalData?.address || "-"}
                  />
                  <InfoItem
                    icon={<Phone className="h-4 w-4 text-primary" />}
                    label="Contact"
                    value={hospitalData?.phone || "-"}
                  />
                  <InfoItem
                    icon={<Briefcase className="h-4 w-4 text-primary" />}
                    label="Established"
                    value={hospitalData?.established || "-"}
                  />
                </div>

                <Separator />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
                  <div className="space-y-4">
                    <h3 className="font-semibold text-lg">Administration</h3>
                    <InfoItem
                      icon={<UserCheck className="h-4 w-4 text-primary" />}
                      label="General Secretary"
                      value={hospitalData?.generalSecretary || "-"}
                    />
                    <InfoItem
                      icon={<UserCog className="h-4 w-4 text-primary" />}
                      label="ADM"
                      value={hospitalData?.adm || "-"}
                    />
                    <InfoItem
                      icon={<ClipboardList className="h-4 w-4 text-primary" />}
                      label="GM Hospital"
                      value={hospitalData?.gmHospital || "-"}
                    />
                  </div>

                  <div className="space-y-4">
                    <h3 className="font-semibold text-lg">Management</h3>
                    <InfoItem
                      icon={<UserCheck className="h-4 w-4 text-primary" />}
                      label="Coordinator"
                      value={hospitalData?.coordinator || "-"}
                    />
                    <InfoItem
                      icon={<UserCog className="h-4 w-4 text-primary" />}
                      label="Supervisor"
                      value={hospitalData?.supervisor || "-"}
                    />
                    <InfoItem
                      icon={<Users className="h-4 w-4 text-primary" />}
                      label="Total Workers"
                      value={hospitalData?.totalWorkers || "-"}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

interface InfoItemProps {
  icon: React.ReactNode;
  label: string;
  value: string;
  subValue?: string;
}

function InfoItem({ icon, label, value, subValue }: InfoItemProps) {
  return (
    <div className="flex items-start gap-3">
      <div className="mt-0.5 flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
        {icon}
      </div>
      <div className="space-y-0.5">
        <p className="text-sm text-muted-foreground">{label}</p>
        <p className="font-medium">{value}</p>
        {subValue && (
          <p className="text-sm text-muted-foreground">{subValue}</p>
        )}
      </div>
    </div>
  );
>>>>>>> main
}
