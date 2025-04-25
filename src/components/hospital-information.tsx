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
}
