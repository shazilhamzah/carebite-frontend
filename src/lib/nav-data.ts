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
} from "@tabler/icons-react";
import { PersonStanding } from "lucide-react";

type UserRole = "worker" | "gm" | "etc.";

export function getNavData(role: UserRole) {
  switch (role) {
    case "worker":
      return {
        navMain: [
          { title: "Personal Information", url: "/dashboard/personal-information", icon: PersonStanding },
          { title: "Lifecycle", url: "#", icon: IconListDetails },
          { title: "Analytics", url: "#", icon: IconChartBar },
          { title: "Projects", url: "#", icon: IconFolder },
          { title: "Team", url: "#", icon: IconUsers },
        ],
        documents: [],
        navSecondary: [],
      };

    case "gm":
      return {
        navMain: [
          { title: "Dashboard", url: "#", icon: IconDashboard },
          { title: "Projects", url: "#", icon: IconFolder },
        ],
        documents: [{ name: "Reports", url: "#", icon: IconReport }],
        navSecondary: [{ title: "Help", url: "#", icon: IconHelp }],
      };

    default:
      return {
        navMain: [{ title: "Dashboard", url: "#", icon: IconDashboard }],
        documents: [],
        navSecondary: [],
      };
  }
}
