import {
  IconDashboard,
  IconListDetails,
  IconChartBar,
  IconFolder,
  IconUsers,
  IconDatabase,
  IconReport,
  IconFileWord,
  IconSettings,
  IconHelp,
  IconSearch,
  IconAdjustmentsDollar,
  IconUserQuestion,
  IconToolsKitchen3,
  IconSpeakerphone,
  IconDevicesCheck,
  IconMoneybag,
  IconCalendarEvent,
  IconFridge,
  IconBowl,
  IconVocabulary,
  IconReportMedical,
  IconCalendarWeek,
} from "@tabler/icons-react";
import { IconShare } from "@tabler/icons-react"
import { ChefHat, Coins, Hospital, PersonStanding } from "lucide-react";


import type { LucideIcon } from "lucide-react"
import type { Icon } from "@tabler/icons-react"

type IconType = LucideIcon | Icon

interface NavItem {
  title: string
  url: string
  icon?: IconType
}

interface DocumentItem {
  name: string
  url: string
  icon: IconType
}

interface NavData {
  navMain: NavItem[]
  documents?: DocumentItem[]
  navSecondary?: NavItem[]
}

export type UserRole = "worker" | "gmHosp" | "gmCord" | "GS" | "Donors" | "ADM" | "Supervisor" | "gm" | "etc.";

export function getNavData(role: UserRole){
  switch (role) {
    case "Donors":
      return{
        navMain: [
          { title: "Personal Information", url: "#", icon: PersonStanding},
          { title: "Funds Status", url: "#", icon: IconAdjustmentsDollar },
          { title: "Requests", url: "#", icon: IconUserQuestion},
          { title: "Hospitals Information", url: "#", icon: Hospital },
          { title: "Food Status", url: "#", icon: IconToolsKitchen3 },
          { title: "Announcements", url: "#", icon: IconSpeakerphone },
        ],
        documents: [
          { name: "Hospital Policy", url: "/docs/hospital-policy", icon: IconFolder },
          { name: "Donation Guidelines", url: "/docs/donation", icon: IconShare },],
        navSecondary: [],
      };

    case "GS":
      return {
        navMain: [
          { title: "Personal Information", url: "#", icon: PersonStanding },
          { title: "Reviews", url: "#", icon: IconDevicesCheck},
          { title: "Requests", url: "#", icon: IconUserQuestion },
          { title: "Donations", url: "#", icon: IconMoneybag },
          { title: "Hospitals Information", url: "#", icon: Hospital },
          { title: "Funds Status", url: "#", icon: IconAdjustmentsDollar },
          { title: "Attendance", url: "#", icon: IconCalendarWeek},
          { title: "Salary", url: "#", icon: Coins },
          { title: "Announcements", url: "#", icon: IconSpeakerphone },
        ],
        documents: [],
        navSecondary: [],
      };

     case "gmCord":
      return {
        navMain: [
          { title: "Personal Information", url: "#", icon: PersonStanding },
          // { title: "Reviews", url: "#", icon: IconDevicesCheck },
          { title: "Utility Requests", url: "#", icon: IconUserQuestion},
          // { title: "Hospitals Information", url: "#", icon:  Hospital },
          // { title: "Funds Status", url: "#", icon: IconAdjustmentsDollar },
          // { title: "Attendance", url: "#", icon: IconCalenda rWeek},
          // { title: "Salary", url: "#", icon: Coins  },
          // { title: "Announcements", url: "#", icon: IconSpeakerphone },
        ],
        documents: [],
        navSecondary: [],
      };

    case "gmHosp":
      return {
        navMain: [
          { title: "Personal Information", url: "#", icon: PersonStanding },
          // { title: "Hospital Information", url: "#", icon:  Hospital  },
          // { title: "Reviews", url: "#", icon: IconDevicesCheck },
          { title: "Menu", url: "#", icon: IconVocabulary },
          // { title: "Food status", url: "#", icon: IconBowl },
          { title: "Attendance", url: "#", icon:IconCalendarWeek},
          { title: "Salary", url: "#", icon: Coins  },
          { title: "Announcements", url: "#", icon: IconSpeakerphone },
        ],
        documents: [],
        navSecondary: [],
      };

    case "ADM":
      return {
        navMain: [
          { title: "Personal Information", url: "#", icon: PersonStanding },
          { title: "Reviews", url: "#", icon: IconDevicesCheck },
          { title: "Requests", url: "#", icon: IconUserQuestion },
          { title: "Hospital Salaries", url: "#", icon: IconReportMedical },
          { title: "Funds Status", url: "#", icon: IconAdjustmentsDollar },
          { title: "Food Stock", url: "#", icon: IconFridge},
          { title: "Attendance", url: "#", icon: IconCalendarWeek},
          { title: "Salary", url: "#", icon: Coins },
          { title: "Announcements", url: "#", icon: IconSpeakerphone },
        ],
        documents: [],
        navSecondary: [],
      };

    case "Supervisor":
      return {
        navMain: [
          { title: "Personal Information", url: "#", icon: PersonStanding },
          // { title: "Hospital Information", url: "#", icon:  Hospital  },
          // { title: "Reviews", url: "#", icon: IconDevicesCheck },
          { title: "Requests", url: "#", icon: IconUserQuestion},
          { title: "Attendance", url: "#", icon: IconCalendarWeek},
          { title: "Salary", url: "#", icon: Coins  },
          { title: "Announcements", url: "#", icon: IconSpeakerphone},
        ],
        documents: [],
        navSecondary: [],
      };
      
    case "worker":
      return {
        navMain: [
          { title: "Personal Information", url: "/dashboard/personal-information", icon: PersonStanding },
          { title: "Attendance", url: "#", icon: IconCalendarWeek},
          { title: "Salary", url: "#", icon: Coins  },
          { title: "Announcements", url: "#", icon: IconSpeakerphone },
        ],
        documents: [],
        navSecondary: [],
      };

    default:
      return {
        navMain: [{ title: "Dashboard", url: "#", icon: IconDashboard }],
        documents: [],
        navSecondary: [],
      };
  }
}
