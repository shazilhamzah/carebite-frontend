"use client";

import type React from "react";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { AppSidebar } from "@/components/app-sidebar";
import { SiteHeader } from "@/components/site-header";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { getUserFromLocalStorage } from "@/lib/auth";
import { useGlobalState } from "@/lib/globalStates";
import PersonalInformation from "@/components/personalInformation";
import Announcements from "@/components/announcements";
import Requests from "@/components/requests";
import HospitalsInformation from "@/components/hospitals-information";
import FundsStatus from "@/components/funds-status";
import Salary from "@/components/salary";
import Reviews from "@/components/reviews";
import MoneyTransfers from "@/components/money-transfers";
import PersonnelManagement from "@/components/personnel-management";
import Attendance from "@/components/attendance";
import UtensilRequests from "@/components//gmcRequests";

export default function GMCoordinatorDashboard() {
  const router = useRouter();
  const { userTab, setUserType } = useGlobalState();

  useEffect(() => {
    const user = getUserFromLocalStorage();
    console.log(user.role);
    if (!user || user.role !== "General Manager Coordinator") {
      console.log("Checkpoint 1");
      router.push("/login");
    } else {
      console.log("Checkpoint 2");
      setUserType("General Manager Coordinator");
    }
  }, [router, setUserType]);

  return (
    <SidebarProvider
      style={
        {
          "--sidebar-width": "calc(var(--spacing) * 72)",
          "--header-height": "calc(var(--spacing) * 12)",
        } as React.CSSProperties
      }
    >
      <AppSidebar variant="inset" userRole="gmCord" />
      <SidebarInset>
        <SiteHeader />
        {userTab === "Personal Information" && <PersonalInformation />}
        {userTab === "Utility Requests" && <UtensilRequests />}
        {/* {userTab === "Salary" && <Salary />} */}
        {/* {userTab === "Attendance" && <Attendance />} */}
        {/* {userTab === "Announcements" && <Announcements />} */}
      </SidebarInset>
    </SidebarProvider>
  );
}
