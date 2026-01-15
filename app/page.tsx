"use client";

import { SidebarProvider } from "@/components/shadcn/sidebar";
import { SideBarTrigger } from "@/components/ui/molecules/SideBarTrigger";
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
        <main className="w-full">
          <div className="w-full h-17 border-b border-border px-7 py-5">
            <div className="flex items-center w-fit h-full justify-center">
              <SideBarTrigger setOpen={setOpenLeft} position={"left"} />
              <SideBarTrigger setOpen={setOpenRight} position={"right"} />
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
