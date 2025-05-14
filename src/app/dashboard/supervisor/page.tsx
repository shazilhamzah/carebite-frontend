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

  return (
    <SidebarProvider
      style={
        {
          "--sidebar-width": "calc(var(--spacing) * 72)",
          "--header-height": "calc(var(--spacing) * 12)",
        } as React.CSSProperties
      }
    >
      <AppSidebar variant="inset" userRole="Supervisor" />
      <SidebarInset>
        <SiteHeader />
        {userTab === "Personal Information" && <PersonalInformation />}
        {/* {userTab === "Hospital Information" && <HospitalInformation />} */}
        {/* {userTab === "Reviews" && <Reviews />} */}
        {userTab === "Requests" && <Requests />}
        {userTab === "Attendance" && <Attendance />}
        {userTab === "Salary" && <Salary />}
        {userTab === "Announcements" && <Announcements />}
      </SidebarInset>
    </SidebarProvider>
  )
}
