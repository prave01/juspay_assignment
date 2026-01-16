'use client'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/shadcn/avatar'
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
} from '@/components/shadcn/sidebar'

import Image from 'next/image'
import { SideBarSelect } from '../molecules/SideBarSelect'
import Link from 'next/link'

import { SidebarCategory } from '@/lib/types'

export function SideBarClient({
  sidebarItems = [],
}: {
  sidebarItems: SidebarCategory[]
}) {
  return (
    <Sidebar side="left" className="max-w-53 w-full">
      <SidebarContent
        className="py-5 px-4 text-[14px] gap-y-4 bg-white dark:bg-background"
      >
        <SidebarGroup className="flex-row p-0 m-0 gap-x-2 items-center">
          <Avatar className="size-6">
            <AvatarImage src="/User.png" alt="@User" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <span>ByeWind</span>
        </SidebarGroup>

        <SidebarGroup className="p-0 m-0 flex flex-col gap-1">
          <SidebarGroupLabel className="px-2 flex gap-5 font-normal text-[14px]">
            <p className="text-primary/40">Favorites</p>
            <p className="text-primary/20">Recently</p>
          </SidebarGroupLabel>

          <SidebarGroupContent
            className="pl-7 list-disc marker:text-primary/20 space-y-3"
          >
            <li>
              <Link href="#">Overview</Link>
            </li>
            <li>
              <Link href="#">Projects</Link>
            </li>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup className="p-0 m-0 flex flex-col gap-1">
          <SidebarGroupLabel className="px-2 font-normal text-[14px]">
            Dashboards
          </SidebarGroupLabel>

          <SidebarGroupContent className="space-y-1">
            <div
              className="flex bg-neutral-100 dark:bg-[#333333] relative py-1
                rounded-md items-center gap-1.5"
            >
              <div className="pl-6.5">
                <Image
                  src="/piechart.svg"
                  className="size-4.5 mr-0.5 dark:invert"
                  width={16}
                  height={16}
                  alt=""
                />
              </div>
              <div
                className="w-1 h-4 rounded-md dark:bg-[#50515A] bg-black
                  absolute"
              />
              Default
            </div>
            <SideBarSelect
              name={'eCommerce'}
              iconPath={'/shopbag.svg'}
              listItems={[]}
            />
            <SideBarSelect
              name={'Projects'}
              iconPath={'/fileicon.svg'}
              listItems={[]}
            />
            <SideBarSelect
              name={'Online Courses'}
              iconPath={'/book.svg'}
              listItems={[]}
            />
          </SidebarGroupContent>
        </SidebarGroup>

        {sidebarItems.map((category, idx) => (
          <SidebarGroup key={idx} className="p-0 m-0 flex flex-col gap-1">
            <SidebarGroupLabel className="px-2 font-normal text-[14px]">
              {category.category}
            </SidebarGroupLabel>

            <SidebarGroupContent className="space-y-1">
              {category.items.map((item, index) => (
                <SideBarSelect
                  key={index}
                  name={item.name}
                  iconPath={item.iconPath}
                  listItems={item.selectItems}
                />
              ))}
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
    </Sidebar>
  )
}
