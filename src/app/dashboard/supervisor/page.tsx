<<<<<<< HEAD
"use client"
import type React from "react"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { AppSidebar } from "@/components/app-sidebar"
import { SiteHeader } from "@/components/site-header"
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"
import { getUserFromLocalStorage } from "@/lib/auth"
import { useGlobalState } from "@/lib/globalStates"
import PersonalInformation from "@/components/personalInformation"
import Announcements from "@/components/announcements"
import HospitalInformation from "@/components/hospital-information"
import Reviews from "@/components/reviews"
import Requests from "@/components/requests"
import Attendance from "@/components/attendance"
import Salary from "@/components/salary"

export default function SupervisorDashboard() {
  const router = useRouter()
  const { userTab, setUserType, setCurrentUser } = useGlobalState()

  useEffect(() => {
    const user = getUserFromLocalStorage()
    if (!user || user.role.toLowerCase() !== "supervisor") {
      router.push("/login")
    } else {
      setUserType("Supervisor")
      setCurrentUser(user)
    }
  }, [router, setUserType, setCurrentUser])
=======
"use client";
import { AppSidebar } from "@/components/app-sidebar";
import { ChartAreaInteractive } from "@/components/chart-area-interactive";
import { DataTable } from "@/components/data-table";
import { SectionCards } from "@/components/section-cards";
import { SiteHeader } from "@/components/site-header";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";

// import data from "./data.json";
import { useEffect, useState } from "react";
import { getUserFromLocalStorage } from "@/lib/auth";
import { useRouter } from "next/navigation";
import { useGlobalState } from "@/lib/globalStates";
import PersonalInformation from "@/components/personalInformation";
import Attendance from "@/components/attendance";
import Salary from "@/components/salary";
import Announcements from "@/components/announcements";
import HospitalInformation from "@/components/hospital-information";
import RequestsPage from "@/components/requests-page";
import AttendancePageSupervisor from "@/components/attendance-page-supervisor";

export default function Page() {
  const router = useRouter();
  const { userTab, userType } = useGlobalState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const user = getUserFromLocalStorage();
    if (!user || user.role.toLowerCase() !== "supervisor") {
      router.push("/login");
    } else {
      setLoading(false);
    }
  }, []);

  if (loading) return null; 
>>>>>>> main

  return (
    <SidebarProvider
      style={
        {
          "--sidebar-width": "calc(var(--spacing) * 72)",
          "--header-height": "calc(var(--spacing) * 12)",
        } as React.CSSProperties
      }
    >
<<<<<<< HEAD
      <AppSidebar variant="inset" userRole="Supervisor" />
      <SidebarInset>
        <SiteHeader />
        {userTab === "Personal Information" && <PersonalInformation />}
        {userTab === "Hospital Information" && <HospitalInformation />}
        {userTab === "Reviews" && <Reviews />}
        {userTab === "Requests" && <Requests />}
        {userTab === "Attendance" && <Attendance />}
        {userTab === "Salary" && <Salary />}
        {userTab === "Announcements" && <Announcements canCreate={true} />}
      </SidebarInset>
    </SidebarProvider>
  )
=======
      <AppSidebar variant="inset" userRole={"Supervisor"} />
      <SidebarInset>
        <SiteHeader />
        {userTab == "Personal Information" && (
          <PersonalInformation></PersonalInformation>
        )}
        {userTab == "Hospital Information" && <HospitalInformation />}
        {userTab == "Requests" && <RequestsPage />}
        {userTab == "Attendance" && <Attendance></Attendance>}
        {userTab == "Workers Attendance" && <AttendancePageSupervisor />}
        {userTab == "Salary" && <Salary></Salary>}
        {userTab == "Announcements" && <Announcements></Announcements>}
      </SidebarInset>
    </SidebarProvider>
  );
>>>>>>> main
}
