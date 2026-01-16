'use client'

import { SidebarProvider } from '@/components/shadcn/sidebar'
import { SideBarClient } from '@/components/ui/organisms/AppSideBar'
import { NavMenu } from '@/components/ui/organisms/Navmenu'
import { NotificationBar } from '@/components/ui/organisms/NotificationBar'
import { sidebarData, notificationBarData } from '@/constants/homePage'
import { useIsMobile } from '@/hooks/use-mobile'
import { useState } from 'react'

export function MainLayout({ children }: { children: React.ReactNode }) {
  const isMobile = useIsMobile()
  const [openLeft, setOpenLeft] = useState(true)
  const [openRight, setOpenRight] = useState(true)
  const [openLeftMobile, setOpenLeftMobile] = useState(false)
  const [openRightMobile, setOpenRightMobile] = useState(false)

  const handleSetOpenLeft = (value: boolean | ((prev: boolean) => boolean)) => {
    if (isMobile) {
      setOpenLeftMobile(value)
    } else {
      setOpenLeft(value)
    }
  }

  const handleSetOpenRight = (
    value: boolean | ((prev: boolean) => boolean)
  ) => {
    if (isMobile) {
      setOpenRightMobile(value)
    } else {
      setOpenRight(value)
    }
  }

  return (
    <div className="bg-background min-h-screen">
      <div className="flex min-h-screen w-full">
        <SidebarProvider
          width="212px"
          className="w-fit"
          open={openLeft}
          onOpenChange={setOpenLeft}
          openMobile={openLeftMobile}
          onOpenMobileChange={setOpenLeftMobile}
        >
          <SideBarClient sidebarItems={sidebarData} />
        </SidebarProvider>
        <main className="flex-1 flex flex-col h-screen overflow-hidden">
          <NavMenu
            setOpenLeft={handleSetOpenLeft}
            setOpenRight={handleSetOpenRight}
          />
          <div className="flex-1 overflow-auto">{children}</div>
        </main>
        <SidebarProvider
          width="280px"
          open={openRight}
          className="w-fit"
          onOpenChange={setOpenRight}
          openMobile={openRightMobile}
          onOpenMobileChange={setOpenRightMobile}
        >
          <NotificationBar data={notificationBarData} />
        </SidebarProvider>
      </div>
    </div>
  )
}
