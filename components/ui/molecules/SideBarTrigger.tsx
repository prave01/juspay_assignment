'use client'

import { Button } from '@/components/shadcn/button'
import { cn } from '@/lib/utils'
import Image from 'next/image'

export function SideBarTrigger({
  position,
  className,
  onClick,
  setOpen,
  ...props
}: React.ComponentProps<typeof Button> & {
  position: 'right' | 'left'
  setOpen: (data: any) => void
}) {
  return (
    <button
      onClick={(event) => {
        onClick?.(event)
        setOpen((prev: any) => !prev)
      }}
      className={cn(
        position === 'right' && 'scale-x-[-1]',
        'bg-transparent cursor-pointer border-none focus-visible:outline-none',
        className
      )}
    >
      <Image
        width={500}
        height={500}
        src={'/expand.svg'}
        className="size-5 dark:invert"
        alt={''}
      />
    </button>
  )
}
