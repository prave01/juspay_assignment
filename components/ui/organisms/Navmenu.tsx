"use client"

import * as React from "react"
import Image from 'next/image'
import { Search } from 'lucide-react'
import { SideBarTrigger } from '../molecules/SideBarTrigger'

import { ThemeToggle } from '../molecules/ThemeToggle'
import { SearchDialog } from './SearchDialog'

export function NavMenu({
  setOpenRight,
  setOpenLeft,
}: {
  setOpenLeft: React.Dispatch<React.SetStateAction<boolean>>
  setOpenRight: React.Dispatch<React.SetStateAction<boolean>>
}) {
  const [open, setOpen] = React.useState(false)

  return (
    <div
      className="w-full h-17 flex justify-between items-center border-b
        border-border py-5 px-8"
    >
      <SearchDialog open={open} setOpen={setOpen} />
      <div className="flex items-center w-fit h-full justify-center gap-x-5">
        <SideBarTrigger setOpen={setOpenLeft} position={'left'} />
        <Image
          src={'/navbar/star.svg'}
          width={500}
          height={500}
          className="size-5 dark:invert"
          alt={''}
        />
        <div className="flex gap-x-4">
          <p className="text-muted-foreground">Dashboards</p>
          <p className="text-muted-foreground/50">/</p>
          <p className="text-foreground">Default</p>
        </div>
      </div>
      <div className="flex items-center w-fit h-full justify-center gap-x-5">
        <div className="flex gap-x-4 items-center justify-center">
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="w-40 h-7 px-3 rounded-md bg-secondary flex items-center
              justify-between gap-x-2"
          >
            <div
              className="flex gap-1 text-muted-foreground items-center
                justify-center"
            >
              {' '}
              <Search className="size-4 text-muted-foreground" />
              Search
            </div>
            <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
              <span className="text-xs">⌘</span>/
            </kbd>
          </button>
          <ThemeToggle />
          <Image
            src={'/navbar/clock.svg'}
            className="size-5 dark:invert"
            width={500}
            height={500}
            alt={''}
          />
          <Image
            src={'/navbar/bell.svg'}
            className="size-5 dark:invert"
            width={500}
            height={500}
            alt={''}
          />
        </div>
        <SideBarTrigger setOpen={setOpenRight} position={'right'} />
      </div>
    </div>
  )
}
