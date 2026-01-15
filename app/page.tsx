import { SidebarProvider } from "@/components/shadcn/sidebar";
import { SideBarClient } from "@/components/ui/organisms/AppSideBar";
import { NotificationBar } from "@/components/ui/organisms/NotificationBar";
import { notificationBarData, sidebarData } from "@/constants/homePage";

export default function Home() {
  return (
    <div className="bg-background min-h-screen">
      <SidebarProvider>
        <div className="flex min-h-screen w-full">
          <SideBarClient sidebarItems={sidebarData} />
          <main className="flex-1"></main>
          <NotificationBar data={notificationBarData} />
        </div>
      </SidebarProvider>
    </div>
  );
}
