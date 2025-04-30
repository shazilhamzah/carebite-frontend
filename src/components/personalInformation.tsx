<<<<<<< HEAD
"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"

export default function PersonalInformation() {
  return (
    <div className="container mx-auto p-6">
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Profile Information</CardTitle>
            <CardDescription>View and update your personal details</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col items-center space-y-4 pb-6">
              <Avatar className="h-24 w-24">
                <AvatarImage src="/placeholder.svg?height=96&width=96" alt="User" />
                <AvatarFallback>UN</AvatarFallback>
              </Avatar>
              <Button variant="outline" size="sm">
                Change Avatar
              </Button>
            </div>
            <div className="space-y-4">
              <div className="grid gap-2">
                <Label htmlFor="name">Full Name</Label>
                <Input id="name" defaultValue="John Doe" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" defaultValue="john.doe@example.com" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" type="tel" defaultValue="+1 (555) 123-4567" />
              </div>
              <Button className="w-full">Save Changes</Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Employment Details</CardTitle>
            <CardDescription>Your position and department information</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="grid gap-2">
                <Label htmlFor="employee-id">Employee ID</Label>
                <Input id="employee-id" defaultValue="EMP-12345" readOnly />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="position">Position</Label>
                <Input id="position" defaultValue="Staff Member" readOnly />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="department">Department</Label>
                <Input id="department" defaultValue="Operations" readOnly />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="join-date">Join Date</Label>
                <Input id="join-date" defaultValue="January 15, 2022" readOnly />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="manager">Manager</Label>
                <Input id="manager" defaultValue="Jane Smith" readOnly />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
=======
"use client";

import type React from "react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { useGlobalState } from "@/lib/globalStates";
import {
  User,
  Phone,
  MapPin,
  Calendar,
  Droplet,
  Briefcase,
  Flag,
  Heart,
} from "lucide-react";
import { useEffect, useState } from "react";

export default function PersonalInformation() {
  const [currentUser, setUser] = useState<any | null>(null);
  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);
  // const { currentUser } = useGlobalState();
  //   const currentUser = localStorage.getItem("user");
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
                      alt="John Michael Doe"
                    />
                    <AvatarFallback className="text-xl bg-primary/10 text-primary">
                      JMD
                    </AvatarFallback>
                  </Avatar>
                  <div className="text-center md:text-left space-y-1.5">
                    <h2 className="text-2xl font-bold">
                      {currentUser?.name || "Unknown User"}
                    </h2>
                    <div className="flex flex-wrap items-center justify-center md:justify-start gap-2">
                      <Badge
                        variant="outline"
                        className="flex items-center gap-1 px-2 py-1 font-medium"
                      >
                        <User className="h-3.5 w-3.5" />
                        {currentUser?.username || "Unknown User"}
                      </Badge>
                      <Badge
                        variant="outline"
                        className="flex items-center gap-1 px-2 py-1 font-medium"
                      >
                        <Droplet className="h-3.5 w-3.5" />
                        {currentUser?.bloodgroup || "-"}
                      </Badge>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
                  <InfoItem
                    icon={<Calendar className="h-4 w-4 text-primary" />}
                    label="Birth Date"
                    value={currentUser?.dob || "-"}
                  />
                  <InfoItem
                    icon={<Flag className="h-4 w-4 text-primary" />}
                    label="Nationality"
                    value={currentUser?.nationality || "-"}
                  />
                  <InfoItem
                    icon={<Briefcase className="h-4 w-4 text-primary" />}
                    label="Employment Date"
                    value={currentUser?.joining_date || "-"}
                  />
                </div>

                <Separator />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
                  <div className="space-y-4">
                    <h3 className="font-semibold text-lg">Emergency Contact</h3>
                    <InfoItem
                      icon={<Heart className="h-4 w-4 text-primary" />}
                      label="Contact Person"
                      value="Sarah Johnson"
                    />
                    <InfoItem
                      icon={<Phone className="h-4 w-4 text-primary" />}
                      label="Phone Number"
                      value="+1 (555) 234-5678"
                    />
                  </div>

                  <div className="space-y-4">
                    <h3 className="font-semibold text-lg">
                      Address Information
                    </h3>
                    <InfoItem
                      icon={<MapPin className="h-4 w-4 text-primary" />}
                      label="Primary Address"
                      value={currentUser?.address || "-"}
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
