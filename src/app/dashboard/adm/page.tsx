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
import HospitalInformation from "@/components/hospital-information";
import Requests from "@/components/requests";
import HospitalSalaries from "@/components/hospital-salaries";
import FundsStatus from "@/components/funds-status";
import FoodStock from "@/components/food-stock";
import Attendance from "@/components/attendance";
import Salary from "@/components/salary";
import Reviews from "@/components/reviews";

export default function ADMDashboard() {
  const router = useRouter();
  const { userTab, setUserType } = useGlobalState();

  useEffect(() => {
    const user = getUserFromLocalStorage();
    console.log("Here,", user.role);
    if (!user || user.role.toLowerCase() !== "adm") {
      router.push("/login");
    } else {
      setUserType("ADM");
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
      <AppSidebar variant="inset" userRole={"ADM"} />
      <SidebarInset>
        <SiteHeader />
        {userTab === "Personal Information" && <PersonalInformation />}
        {userTab === "Hospital Information" && <HospitalInformation />}
        {userTab === "Requests" && <Requests />}
        {userTab === "Reviews" && <Reviews />}
        {userTab === "Hospital Salaries" && <HospitalSalaries />}
        {userTab === "Funds Status" && <FundsStatus />}
        {userTab === "Food Stock" && <FoodStock />}
        {userTab === "Attendance" && <Attendance />}
        {userTab === "Salary" && <Salary />}
        {userTab === "Announcements" && <Announcements />}
      </SidebarInset>
    </SidebarProvider>
  );
}
