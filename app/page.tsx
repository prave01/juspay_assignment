"use client";

import { SidebarProvider } from "@/components/shadcn/sidebar";
import { ProjectionsVsActualsChart } from "@/components/ui/molecules/BarStats";
import { RevenueChart } from "@/components/ui/molecules/RevenueChart";
import { RevenueByLocation } from "@/components/ui/molecules/RevenueByLocation";
import { TopSellingProducts } from "@/components/ui/molecules/TopSellingProducts";
import { TotalSales } from "@/components/ui/molecules/TotalSales";
import { CardStats } from "@/components/ui/molecules/CardStats";
import { SideBarClient } from "@/components/ui/organisms/AppSideBar";
import { NavMenu } from "@/components/ui/organisms/Navmenu";
import { NotificationBar } from "@/components/ui/organisms/NotificationBar";
import {
  notificationBarData,
  sidebarData,
  statCardsData,
  topSellingProductsData,
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
          <div className="w-full flex-col mx-auto p-8 flex items-start justify-center h-full">
            <div className="h-full flex-col max-w-400 w-full space-y-6 flex items-center justify-start gap-4">
              {" "}
              <div className="max-w-fit w-full flex flex-col gap-2">
                {" "}
                <p className="font-semibold p-4 mr-auto">eCommerce</p>
                <div className="w-full h-fit flex justify-center items-center gap-5">
                  {" "}
                  <div className="grid grid-rows-2 grid-cols-2 w-fit gap-7">
                    <CardStats data={statCardsData} />
                  </div>
                  <ProjectionsVsActualsChart />
                </div>
                <div className="flex gap-2">
                  <RevenueChart />
                  <RevenueByLocation />
                </div>
                <div className="flex gap-2 items-center justify-between w-full">
                  <TopSellingProducts data={topSellingProductsData} />
                  <TotalSales />
                </div>
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
