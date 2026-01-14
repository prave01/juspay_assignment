import { SidebarProvider, SidebarTrigger } from "@/components/shadcn/sidebar";
import { SideBarClient } from "@/components/ui/molecules/SideBarClient";

export default function Home() {
  return (
    <div className="bg-background min-h-screen">
      <SidebarProvider>
        <SideBarClient />
        <main>
          <SidebarTrigger />
        </main>
      </SidebarProvider>
    </div>
  );
}
