<<<<<<< HEAD
"use client"

import type React from "react"
=======
"use client";
>>>>>>> main

import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
<<<<<<< HEAD
} from "@/components/ui/sidebar"
import { useGlobalState } from "@/lib/globalStates"
=======
} from "@/components/ui/sidebar";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
import { useGlobalState } from "@/lib/globalStates";
>>>>>>> main

export function NavMain({
  items,
}: {
  items: {
<<<<<<< HEAD
    title: string
    url: string
    icon?: React.ComponentType<any>
  }[]
}) {
  const { setUserTab, userTab } = useGlobalState()

  const handleClick = (title: string) => {
    setUserTab(title)
    console.log(userTab)
  }

=======
    title: string;
    url: string;
    icon?: React.ComponentType<any>;
  }[];
}) {
  const { setUserTab,userTab } = useGlobalState();
  const handleClick = (title: string) => {
    setUserTab(title);
    console.log(userTab);
  };
>>>>>>> main
  return (
    <SidebarGroup>
      <SidebarGroupContent className="flex flex-col gap-2">
        <SidebarMenu>
          <SidebarMenuItem className="flex items-center gap-2"></SidebarMenuItem>
        </SidebarMenu>
        <SidebarMenu>
          {items.map((item) => (
            <SidebarMenuItem key={item.title}>
<<<<<<< HEAD
              <SidebarMenuButton onClick={() => handleClick(item.title)} tooltip={item.title}>
=======
              <SidebarMenuButton
                onClick={() => handleClick(item.title)}
                tooltip={item.title}
              >
>>>>>>> main
                {item.icon && <item.icon />}
                <span>{item.title}</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
<<<<<<< HEAD
  )
=======
  );
>>>>>>> main
}
