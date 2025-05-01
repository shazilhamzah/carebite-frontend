"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { AppSidebar } from "@/components/app-sidebar"
import { SiteHeader } from "@/components/site-header"
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"
import { getUserFromLocalStorage } from "@/lib/auth"
import { useGlobalState } from "@/lib/globalStates"
import PersonalInformation from "@/components/personalInformation"
import Attendance from "@/components/attendance"
import Salary from "@/components/salary"
import Announcements from "@/components/announcements"
import { fetchWorkerProfile } from "@/lib/api"
import { AlertDialog, AlertDialogDescription, AlertDialogTitle } from "@/components/ui/alert-dialog"
import { AlertCircle } from "lucide-react"

export default function WorkerDashboard() {
  const router = useRouter()
  const { userTab, setUserType } = useGlobalState()
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(true)
  const [userId, setUserId] = useState<number | null>(null)

  useEffect(() => {
    const user = getUserFromLocalStorage()
    if (!user || user.role.toLowerCase() !== "worker") {
      router.push("/login")
    } else {
      setUserType("worker")
      setUserId(user.id)

      // Verify the worker exists in the backend
      if (user.id) {
        fetchWorkerProfile(user.id)
          .catch((err) => {
            console.error("Error fetching worker profile:", err)
            setError("Could not verify worker account. Please contact support.")
          })
          .finally(() => {
            setLoading(false)
          })
      }
    }
  }, [router, setUserType])

  if (loading) {
    return <div className="flex items-center justify-center h-screen">Loading...</div>
  }

  if (error) {
    return (
      <div className="container mx-auto p-6">
        <div className="flex items-center gap-3 rounded-md border border-red-300 bg-red-50 p-4 text-red-700">
          <AlertCircle className="h-5 w-5 text-red-600" />
          <span>{error}</span>
        </div>
      </div>
    )
  }

  return (
    <SidebarProvider
      style={
        {
          "--sidebar-width": "calc(var(--spacing) * 72)",
          "--header-height": "calc(var(--spacing) * 12)",
        } as React.CSSProperties
      }
    >
      <AppSidebar variant="inset" userRole="worker" />
      <SidebarInset>
        <SiteHeader />
        {userTab === "Personal Information" && userId && <PersonalInformation userId={userId} />}
        {userTab === "Attendance" && userId && <Attendance userId={userId} />}
        {userTab === "Salary" && userId && <Salary userId={userId} />}
        {userTab === "Announcements" && userId && <Announcements userId={userId} />}
      </SidebarInset>
    </SidebarProvider>
  )
}
