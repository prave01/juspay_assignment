"use client";

import { SidebarProvider } from "@/components/shadcn/sidebar";
import { SideBarClient } from "@/components/ui/organisms/AppSideBar";
import { NavMenu } from "@/components/ui/organisms/Navmenu";
import { NotificationBar } from "@/components/ui/organisms/NotificationBar";
import { sidebarData, notificationBarData } from "@/constants/homePage";
import { useState } from "react";

export function MainLayout({ children }: { children: React.ReactNode }) {
    const [openLeft, setOpenLeft] = useState(true);
    const [openRight, setOpenRight] = useState(true);

    return (
        <div className="bg-background min-h-screen">
            <div className="flex min-h-screen w-full">
                <SidebarProvider width="212px" className="w-fit" open={openLeft}>
                    <SideBarClient sidebarItems={sidebarData} />
                </SidebarProvider>
                <main className="flex-1 flex flex-col h-screen overflow-hidden">
                    <NavMenu setOpenLeft={setOpenLeft} setOpenRight={setOpenRight} />
                    <div className="flex-1 overflow-auto">
                        {children}
                    </div>
                </main>
                <SidebarProvider width="280px" open={openRight} className="w-fit">
                    <NotificationBar data={notificationBarData} />
                </SidebarProvider>
            </div>
        </div>
    );
}
