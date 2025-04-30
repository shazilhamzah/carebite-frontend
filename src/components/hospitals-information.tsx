"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Hospital, MapPin, Phone, Users } from "lucide-react"

export default function HospitalsInformation() {
  // Sample hospitals data
  const hospitals = [
    {
      id: 1,
      name: "Central City Hospital",
      address: "123 Main Street, Central City",
      phone: "+1 (555) 123-4567",
      capacity: 350,
      occupancy: 280,
      departments: ["Emergency", "Pediatrics", "Surgery", "Cardiology", "Neurology"],
      status: "Operational",
    },
    {
      id: 2,
      name: "Westside Medical Center",
      address: "456 West Avenue, Westside District",
      phone: "+1 (555) 987-6543",
      capacity: 250,
      occupancy: 210,
      departments: ["Emergency", "Orthopedics", "Internal Medicine", "Oncology"],
      status: "Operational",
    },
    {
      id: 3,
      name: "Eastside Community Hospital",
      address: "789 East Boulevard, Eastside Area",
      phone: "+1 (555) 456-7890",
      capacity: 180,
      occupancy: 120,
      departments: ["Pediatrics", "Obstetrics", "General Medicine"],
      status: "Operational",
    },
    {
      id: 4,
      name: "Northside Children's Hospital",
      address: "321 North Road, Northside District",
      phone: "+1 (555) 234-5678",
      capacity: 150,
      occupancy: 95,
      departments: ["Pediatrics", "Neonatal", "Child Psychology"],
      status: "Operational",
    },
  ]

  return (
    <div className="container mx-auto p-6">
      <Tabs defaultValue="all" className="space-y-6">
        <div className="flex items-center justify-between">
          <TabsList>
            <TabsTrigger value="all">All Hospitals</TabsTrigger>
            <TabsTrigger value="map">Map View</TabsTrigger>
            <TabsTrigger value="stats">Statistics</TabsTrigger>
          </TabsList>
          <Button>
            <Hospital className="mr-2 h-4 w-4" />
            Add Hospital
          </Button>
        </div>

        <TabsContent value="all" className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
            {hospitals.map((hospital) => (
              <Card key={hospital.id}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>{hospital.name}</CardTitle>
                    <Badge className="bg-green-100 text-green-800">{hospital.status}</Badge>
                  </div>
                  <CardDescription className="flex items-center">
                    <MapPin className="mr-1 h-3 w-3" />
                    {hospital.address}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center text-sm">
                      <Phone className="mr-2 h-4 w-4 text-muted-foreground" />
                      {hospital.phone}
                    </div>
                    <div className="flex items-center text-sm">
                      <Users className="mr-2 h-4 w-4 text-muted-foreground" />
                      Capacity: {hospital.occupancy}/{hospital.capacity} beds (
                      {Math.round((hospital.occupancy / hospital.capacity) * 100)}% occupied)
                    </div>
                    <div>
                      <div className="mb-1 text-sm font-medium">Occupancy</div>
                      <div className="h-2 w-full rounded-full bg-muted">
                        <div
                          className="h-2 rounded-full bg-primary"
                          style={{ width: `${(hospital.occupancy / hospital.capacity) * 100}%` }}
                        ></div>
                      </div>
                    </div>
                    <div>
                      <div className="mb-2 text-sm font-medium">Departments</div>
                      <div className="flex flex-wrap gap-2">
                        {hospital.departments.map((dept, index) => (
                          <Badge key={index} variant="outline">
                            {dept}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <Button variant="outline" className="w-full">
                      View Details
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="map">
          <Card>
            <CardHeader>
              <CardTitle>Hospital Locations</CardTitle>
              <CardDescription>Interactive map of all hospital locations</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[500px] rounded-md border bg-muted flex items-center justify-center">
                <p className="text-muted-foreground">Interactive map would appear here</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="stats">
          <Card>
            <CardHeader>
              <CardTitle>Hospital Statistics</CardTitle>
              <CardDescription>Key metrics and statistics for all hospitals</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center py-10">
                <p className="text-muted-foreground">Hospital statistics charts would appear here</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
