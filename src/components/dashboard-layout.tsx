"use client"

import type { ReactNode } from "react"
import { type UserRole, getNavData } from "@/lib/nav-data"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarRail,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { LogOut, User } from "lucide-react"

interface DashboardLayoutProps {
  children: ReactNode
  role: UserRole
  userName: string
}

export function DashboardLayout({ children, role, userName }: DashboardLayoutProps) {
  const { navMain, documents, navSecondary } = getNavData(role)

  return (
    <SidebarProvider>
      <Sidebar>
        <SidebarHeader className="border-b">
          <div className="flex items-center gap-2 px-4 py-2">
            <Avatar>
              <AvatarImage src="/placeholder.svg?height=40&width=40" alt={userName} />
              <AvatarFallback>{userName.substring(0, 2).toUpperCase()}</AvatarFallback>
            </Avatar>
            <div className="flex flex-col">
              <span className="text-sm font-medium">{userName}</span>
              <span className="text-xs text-muted-foreground">{role}</span>
            </div>
          </div>
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>Navigation</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {navMain.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <a href={item.url}>
                        {item.icon && <item.icon className="h-4 w-4" />}
                        <span>{item.title}</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>

          {documents && documents.length > 0 && (
            <SidebarGroup>
              <SidebarGroupLabel>Documents</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {documents.map((doc) => (
                    <SidebarMenuItem key={doc.name}>
                      <SidebarMenuButton asChild>
                        <a href={doc.url}>
                          {doc.icon && <doc.icon className="h-4 w-4" />}
                          <span>{doc.name}</span>
                        </a>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          )}

          {navSecondary && navSecondary.length > 0 && (
            <SidebarGroup>
              <SidebarGroupLabel>Other</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {navSecondary.map((item) => (
                    <SidebarMenuItem key={item.title}>
                      <SidebarMenuButton asChild>
                        <a href={item.url}>
                          {item.icon && <item.icon className="h-4 w-4" />}
                          <span>{item.title}</span>
                        </a>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          )}
        </SidebarContent>
        <SidebarFooter className="border-t">
          <div className="flex items-center justify-between p-4">
            <Button variant="ghost" size="icon">
              <User className="h-4 w-4" />
              <span className="sr-only">Profile</span>
            </Button>
            <Button variant="ghost" size="icon">
              <LogOut className="h-4 w-4" />
              <span className="sr-only">Logout</span>
            </Button>
          </div>
        </SidebarFooter>
        <SidebarRail />
      </Sidebar>
      <SidebarInset>
        <header className="flex h-16 items-center gap-4 border-b px-6">
          <SidebarTrigger />
          <h1 className="text-xl font-semibold">Dashboard</h1>
        </header>
        <main className="p-6">{children}</main>
      </SidebarInset>
    </SidebarProvider>
  )
}
