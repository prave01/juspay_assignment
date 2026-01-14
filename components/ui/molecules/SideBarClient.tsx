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
} from "@/components/shadcn/sidebar";

import {
  Calendar,
  ChevronLeft,
  ChevronRight,
  Home,
  Inbox,
  Search,
  Settings,
} from "lucide-react";
import Image from "next/image";
import { useState } from "react";

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
  const [open, setOpen] = useState(false);
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
          <SidebarGroupContent className="text-[14px] font-normal m-0 space-y-2">
            <ul>
              {" "}
              <li className="flex bg-neutral-100 relative py-1 rounded-md items-center justify-start gap-2">
                <div className="pl-6.5">
                  {" "}
                  <Image
                    src={"/piechart.svg"}
                    className="size-4"
                    width={500}
                    height={500}
                    alt={""}
                  />
                </div>
                <div className="w-1 h-4 rounded-md bg-black absolute"></div>
                Default
              </li>
              <li className="flex cursor-pointer hover:bg-neutral-100 relative py-1 transition-all duration-200 ease-out group rounded-md items-center justify-start gap-1.5">
                <ChevronRight className="size-4 absolute left-1 text-black/20 rover:-translate-x-2 hover:opacity-0" />
                <div className="pl-6">
                  {" "}
                  <Image
                    src={"/shopbag.svg"}
                    className="size-5"
                    width={500}
                    height={500}
                    alt={""}
                  />
                </div>
                eCommerce
              </li>
            </ul>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup className="p-0 m-0 flex flex-col gap-1">
          <SidebarGroupLabel className="text-[14px] px-2 flex gap-5 font-normal">
            <span className="text-primary">Dashboards</span>{" "}
          </SidebarGroupLabel>
          <SidebarGroupContent className="text-[14px] font-normal m-0 space-y-2">
            <div className="">
              {" "}
              <div
                onClick={() => setOpen((v) => !v)}
                className="px-1 flex cursor-pointer hover:bg-neutral-100 relative py-1 transition-all duration-200 ease-out group rounded-md items-center justify-start gap-1.5"
              >
                {" "}
                <div className="w-4 flex items-center justify-center">
                  <ChevronRight
                    className={`size-4 text-black/20 transition-transform 
                            duration-200 ease-out ${open ? "rotate-90" : ""}`}
                  />
                </div>
                <Image
                  src={"/shopbag.svg"}
                  className="size-5"
                  width={500}
                  height={500}
                  alt=""
                />
                <span>eCommerce</span>
              </div>
              <div
                className={`
      overflow-hidden
      transition-all duration-300 ease-out
      ${open ? "max-h-40 opacity-100" : "max-h-0 opacity-0"}
    `}
              >
                <div className="flex flex-col w-full items-start pl-12.5 gap-2 py-2">
                  <span>Overview</span>
                  <span>Projects</span>
                  <span>Campaigns</span>
                  <span>Documents</span>
                  <span>Followers</span>
                </div>
              </div>
            </div>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
