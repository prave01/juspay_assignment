"use client";

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/shadcn/avatar";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/shadcn/sidebar";

import { Calendar, Home, Inbox, Search, Settings } from "lucide-react";
import Image from "next/image";

const items = [
  {
    title: "Home",
    url: "#",
    icon: Home,
  },
  {
    title: "Inbox",
    url: "#",
    icon: Inbox,
  },
  {
    title: "Calendar",
    url: "#",
    icon: Calendar,
  },
  {
    title: "Search",
    url: "#",
    icon: Search,
  },
  {
    title: "Settings",
    url: "#",
    icon: Settings,
  },
];

export function SideBarClient() {
  return (
    <Sidebar className="max-w-53 ">
      <SidebarContent className="py-5 px-4 text-[14px] gap-y-4 bg-white dark:bg-background">
        <SidebarGroup className="flex-row p-0 m-0 gap-x-2 items-center justify-start">
          {" "}
          <Avatar className="size-6">
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <span className="text-">ByeWind</span>
        </SidebarGroup>
        <SidebarGroup className="p-0 m-0 flex flex-col gap-1">
          <SidebarGroupLabel className="text-[14px] px-2 flex gap-5 font-normal">
            <span className="text-primary">Favorites</span>{" "}
            <span className="text-primary/40">Recently</span>
          </SidebarGroupLabel>
          <SidebarGroupContent className="pl-7 text-[14px] font-normal marker:text-black/20 m-0 list-disc space-y-3">
            <li>Overview</li>
            <li>Projects</li>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup className="p-0 m-0 flex flex-col gap-1">
          <SidebarGroupLabel className="text-[14px] px-2 flex gap-5 font-normal">
            <span className="text-primary">Dashboards</span>{" "}
          </SidebarGroupLabel>
          <SidebarGroupContent className=" text-[14px] font-normal m-0 space-y-2">
            <li className="flex bg-neutral-100 pl-6.5 py-1 rounded-md items-center justify-start gap-2">
              <Image
                src={"/piechart.svg"}
                className="size-4"
                width={500}
                height={500}
                alt={""}
              />
              Default
            </li>
            <li>Projects</li>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
