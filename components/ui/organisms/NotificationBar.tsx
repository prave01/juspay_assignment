"use client"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
} from "@/components/shadcn/sidebar";
import {
  NotificationBarItem,
  NotificationBarItemType,
} from "../molecules/NotificationBarItem";

export function NotificationBar({ data }: { data: NotificationBarItemType[] }) {
  return (
    <Sidebar className="w-70" side="right">
      <SidebarContent className="pl-5 py-5 no-scrollbar bg-white dark:bg-background flex flex-col gap-y-8">
        <SidebarGroup className="p-0 m-0">
          <SidebarGroupContent className="flex flex-col gap-8">
            {data.map((item, idx) => (
              <NotificationBarItem
                key={idx}
                category={item.category}
                items={item.items}
              />
            ))}
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
