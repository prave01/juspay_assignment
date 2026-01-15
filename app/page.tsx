import { SidebarProvider, SidebarTrigger } from "@/components/shadcn/sidebar";
import { SideBarClient } from "@/components/ui/organisms/SideBarClient";
import { sidebarData } from "@/constants/homePage";

export default function Home() {
  return (
    <div className="bg-background min-h-screen">
      <SidebarProvider>
        <SideBarClient sidebarItems={sidebarData} />
        <main>
          <SidebarTrigger />
        </main>
      </SidebarProvider>
    </div>
  );
}
