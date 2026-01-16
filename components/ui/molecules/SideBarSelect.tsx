import { cn } from '@/lib/utils'
import { ChevronRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

export const SideBarSelect = ({
  name,
  iconPath,
  listItems,
}: {
  name: string
  iconPath: string
  listItems: { name: string; href: string }[]
}) => {
  const [open, setOpen] = useState(false)
  return (
    <>
      {' '}
      <div
        onClick={() => setOpen((v) => !v)}
        className="px-1 flex cursor-pointer hover:bg-neutral-100
          dark:hover:bg-[#333333] relative py-1 transition-all duration-200
          ease-out group rounded-md items-center justify-start gap-1.5"
      >
        {' '}
        <div className="w-4 flex items-center justify-center">
          <ChevronRight
            className={`size-4 text-primary/20 transition-transform duration-200
              ease-out ${open ? 'rotate-90' : ''}`}
          />
        </div>
        <Image
          src={iconPath}
          className="size-5 mr-0 dark:invert"
          width={500}
          height={500}
          alt=""
        />
        <span>{name}</span>
      </div>
      <div
        className={cn(
          'overflow-hidden',
          'transition-all duration-300 ease-in-out',
          {
            'max-h-50 opacity-100': open && listItems.length > 0,
            'max-h-0 opacity-0': !open || listItems.length === 0,
          }
        )}
      >
        <div className="flex flex-col w-full items-start pl-13 gap-2.5 py-2">
          {listItems.map((i, idx) => (
            <Link
              key={idx}
              href={i.href}
              className={cn(
                'hover:text-neutral-500',
                'transition-all duration-300 ease-in-out'
              )}
            >
              {i.name}
            </Link>
          ))}
        </div>
      </div>
    </>
  )
}
