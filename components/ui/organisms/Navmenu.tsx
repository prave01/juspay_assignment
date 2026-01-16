import Image from 'next/image'
import { Search } from 'lucide-react'
import { SideBarTrigger } from '../molecules/SideBarTrigger'

import { ThemeToggle } from '../molecules/ThemeToggle'

export function NavMenu({
  setOpenRight,
  setOpenLeft,
}: {
  setOpenLeft: (data: any) => void
  setOpenRight: (data: any) => void
}) {
  return (
    <div
      className="w-full h-17 flex justify-between items-center border-b
        border-border py-5 px-8"
    >
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
            <Image
              src="/navbar/search.svg"
              width={20}
              height={20}
              className="size-5 dark:invert"
              alt=""
            />
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
