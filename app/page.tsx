"use client";

import { SidebarProvider } from "@/components/shadcn/sidebar";
import { StatCard } from "@/components/ui/atoms/StatCard";
import { NavMenu } from "@/components/ui/molecules/Navmenu";
import { SideBarClient } from "@/components/ui/organisms/AppSideBar";
import { NotificationBar } from "@/components/ui/organisms/NotificationBar";
import { notificationBarData, sidebarData } from "@/constants/homePage";
import { useState } from "react";

export default function Home() {
  const [openLeft, setOpenLeft] = useState(true);
  const [openRight, setOpenRight] = useState(true);

  return (
    <div className="bg-background min-h-screen">
      <div className="flex min-h-screen w-full">
        <SidebarProvider width="212px" className="w-fit" open={openLeft}>
          <SideBarClient sidebarItems={sidebarData} />
        </SidebarProvider>
        <main className="flex-1">
          <NavMenu setOpenLeft={setOpenLeft} setOpenRight={setOpenRight} />
          <div className="w-full mx-auto py-8 flex items-center justify-center h-full">
            <div className="h-full max-w-332.5 w-full">
              <StatCard />
            </div>
          </div>
        </main>
        <SidebarProvider width="280px" open={openRight} className="w-fit">
          <NotificationBar data={notificationBarData} />
        </SidebarProvider>
      </div>
    </div>
  );
}
