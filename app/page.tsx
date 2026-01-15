"use client";

import { SidebarProvider } from "@/components/shadcn/sidebar";
import { StatCard } from "@/components/ui/atoms/StatCard";
import { CardStats } from "@/components/ui/molecules/CardStats";
import { SideBarClient } from "@/components/ui/organisms/AppSideBar";
import { NavMenu } from "@/components/ui/organisms/Navmenu";
import { NotificationBar } from "@/components/ui/organisms/NotificationBar";
import {
  notificationBarData,
  sidebarData,
  statCardsData,
} from "@/constants/homePage";
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
          <div className="w-full mx-auto p-8 flex items-center justify-center h-full">
            <div className="h-full max-w-400 w-full">
              <p className="font-semibold p-4">eCommerce</p>
              <div className="grid grid-rows-2 grid-cols-2 w-fit gap-7">
                <CardStats data={statCardsData} />
              </div>
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
