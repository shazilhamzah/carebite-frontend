// components/app-sidebar.tsx
import { Sidebar, SidebarContent, SidebarGroup, SidebarItem } from "@/components/ui/sidebar";

export function AppSidebar() {
    return (
        <Sidebar side="left" variant="sidebar" collapsible="offcanvas">
            <SidebarContent>
                <SidebarGroup title="Main">
                    <SidebarItem href="/dashboard">Dashboard</SidebarItem>
                    <SidebarItem href="/settings">Settings</SidebarItem>
                </SidebarGroup>
                <SidebarGroup title="Management">
                    <SidebarItem href="/users">Users</SidebarItem>
                    <SidebarItem href="/reports">Reports</SidebarItem>
                </SidebarGroup>
            </SidebarContent>
        </Sidebar>
    );
}
