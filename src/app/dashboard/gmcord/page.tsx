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
import Requests from "@/components/requests"
import HospitalsInformation from "@/components/hospitals-information"
import FundsStatus from "@/components/funds-status"
import Salary from "@/components/salary"
import Reviews from "@/components/reviews"
import MoneyTransfers from "@/components/money-transfers"
import PersonnelManagement from "@/components/personnel-management"

export default function GMCoordinatorDashboard() {
  const router = useRouter()
  const { userTab, setUserType } = useGlobalState()

  useEffect(() => {
    const user = getUserFromLocalStorage()
    if (!user || user.role.toLowerCase() !== "gmcord") {
      router.push("/login")
    } else {
      setUserType("gmCord")
    }
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
      <AppSidebar variant="inset" userRole="gmCord" />
      <SidebarInset>
        <SiteHeader />
        {userTab === "Personal Information" && <PersonalInformation />}
        {userTab === "Requests" && <Requests />}
        {userTab === "Money Transfers" && <MoneyTransfers />}
        {userTab === "Hospitals Information" && <HospitalsInformation />}
        {userTab === "Personnel Management" && <PersonnelManagement />}
        {userTab === "Reviews" && <Reviews />}
        {userTab === "Funds Status" && <FundsStatus />}
        {userTab === "Salary" && <Salary />}
        {userTab === "Announcements" && <Announcements />}
      </SidebarInset>
    </SidebarProvider>
  )
}
