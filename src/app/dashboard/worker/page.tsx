"use client";
import { AppSidebar } from "@/components/app-sidebar";
import { ChartAreaInteractive } from "@/components/chart-area-interactive";
import { DataTable } from "@/components/data-table";
import { SectionCards } from "@/components/section-cards";
import { SiteHeader } from "@/components/site-header";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";

import data from "./data.json";
import { useEffect, useState } from "react";
import { getUserFromLocalStorage } from "@/lib/auth";
import { useRouter } from "next/navigation";
import { useGlobalState } from "@/lib/globalStates";
import PersonalInformation from "@/components/personalInformation";
import Attendance from "@/components/attendance";
import Salary from "@/components/salary";
import Announcements from "@/components/announcements";

export default function Page() {
  const router = useRouter();
  const { userTab, userType } = useGlobalState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const user = getUserFromLocalStorage();
    console.log(user);
    if (!user || user.role.toLowerCase() !== "worker") {
      router.push("/login");
    } else {
      setLoading(false);
    }
  }, []);

  if (loading) return null;

  return (
    <SidebarProvider
      style={
        {
          "--sidebar-width": "calc(var(--spacing) * 72)",
          "--header-height": "calc(var(--spacing) * 12)",
        } as React.CSSProperties
      }
    >
      <AppSidebar variant="inset" userRole={"worker"} />
      <SidebarInset>
        <SiteHeader />
        {userTab == "Personal Information" && (
          <PersonalInformation></PersonalInformation>
        )}
        {userTab == "Attendance" && <Attendance></Attendance>}
        {userTab == "Salary" && <Salary></Salary>}
        {userTab == "Announcements" && <Announcements></Announcements>}
      </SidebarInset>
    </SidebarProvider>
  );
}