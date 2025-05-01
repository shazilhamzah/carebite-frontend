"use client"

import { useGlobalState } from "@/lib/globalStates"
import { getNavData } from "@/lib/nav-data"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
  SidebarSeparator,
} from "@/components/ui/sidebar"
import { LogOut, Settings } from "lucide-react"
import { useRouter } from "next/navigation"
import { removeUserFromLocalStorage } from "@/lib/auth"

interface AppSidebarProps {
  variant?: "sidebar" | "floating" | "inset"
  userRole: string
}

export function AppSidebar({ variant = "sidebar", userRole }: AppSidebarProps) {
  const router = useRouter()
  const { setUserTab, currentUser } = useGlobalState()
  const navData = getNavData(userRole as any)

  const handleNavClick = (title: string) => {
    setUserTab(title)
  }

  const handleLogout = () => {
    removeUserFromLocalStorage()
    router.push("/login")
  }

  return (
    <Sidebar variant={variant}>
      <SidebarHeader className="h-16 border-b border-sidebar-border">
        <div className="flex items-center gap-2 px-2">
          <Avatar className="h-8 w-8">
            <AvatarImage src="/placeholder.svg?height=32&width=32" alt="User" />
            <AvatarFallback>U</AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <span className="text-sm font-medium">{currentUser?.name || "User Name"}</span>
            <span className="text-xs text-muted-foreground">{userRole}</span>
          </div>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          {navData.navMain.map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton onClick={() => handleNavClick(item.title)} tooltip={item.title}>
                <item.icon className="h-4 w-4" />
                <span>{item.title}</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>

        {navData.documents && navData.documents.length > 0 && (
          <>
            <SidebarSeparator />
            <div className="px-2 py-1">
              <h3 className="text-xs font-medium text-muted-foreground">Documents</h3>
            </div>
            <SidebarMenu>
              {navData.documents.map((item) => (
                <SidebarMenuItem key={item.name}>
                  <SidebarMenuButton onClick={() => handleNavClick(item.name)} tooltip={item.name}>
                    <item.icon className="h-4 w-4" />
                    <span>{item.name}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </>
        )}
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton onClick={() => router.push("/settings")} tooltip="Settings">
              <Settings className="h-4 w-4" />
              <span>Settings</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton onClick={handleLogout} tooltip="Logout">
              <LogOut className="h-4 w-4" />
              <span>Logout</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
