"use client";
import { AppSidebar } from "@/components/app-sidebar";
import { ChartAreaInteractive } from "@/components/chart-area-interactive";
import { DataTable } from "@/components/data-table";
import { SectionCards } from "@/components/section-cards";
import { SiteHeader } from "@/components/site-header";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";

import data from "./data.json";
import { useEffect } from "react";
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

  useEffect(() => {
    const user = getUserFromLocalStorage();
    if (!user || user.role.toLowerCase() !== "worker") {
      router.push("/login");
    }
  }, []);

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
        {userTab == "Attendance" && (
          <Attendance></Attendance>
        )}
        {userTab == "Salary" && (
          <Salary></Salary>
        )}
        {userTab == "Announcements" && (
          <Announcements></Announcements>
        )}
      </SidebarInset>
    </SidebarProvider>
  );
}


// <div className="flex flex-1 flex-col">
          //   <div className="@container/main flex flex-1 flex-col gap-2">
          //     <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
          //       <SectionCards />
          //       <div className="px-4 lg:px-6">
          //         <ChartAreaInteractive />
          //       </div>
          //       <DataTable data={data} />
          //     </div>
          //   </div>
          // </div>