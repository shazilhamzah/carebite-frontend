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
}
