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
import PersonnelManagement from "@/components/personnel-management"
import AttendanceManagement from "@/components/attendance-management"
import Reviews from "@/components/reviews"
import Menu from "@/components/ui/menu"
import FoodStatus from "@/components/food-status"
import Salary from "@/components/salary"

export default function GMHospitalDashboard() {
  const router = useRouter()
  const { userTab, setUserType } = useGlobalState()

  useEffect(() => {
    const user = getUserFromLocalStorage()
    //if (!user || user.role.toLowerCase() !== "gmhosp") {
      //router.push("/login")
    //} else {
      setUserType("gmHosp")
    //}
  }, [router, setUserType])

  return (
    <SidebarProvider
      style={
        {
          "--sidebar-width": "calc(var(--spacing) * 72)",
          "--header-height": "calc(var(--spacing) * 12)",
        } as React.CSSProperties
      }
    >
      <AppSidebar variant="inset" userRole = "gmHosp" />
      <SidebarInset>
        <SiteHeader />
        {userTab === "Personal Information" && <PersonalInformation />}
        {userTab === "Hospital Information" && <HospitalInformation />}
        {userTab === "Personnel Management" && <PersonnelManagement />}
        {userTab === "Attendance Management" && <AttendanceManagement />}
        {userTab === "Reviews" && <Reviews />}
        {userTab === "Menu" && <Menu />}
        {userTab === "Food Status" && <FoodStatus />}
        {userTab === "Salary" && <Salary />}
        {userTab === "Announcements" && <Announcements canCreate={true} />}
      </SidebarInset>
    </SidebarProvider>
  )
}
