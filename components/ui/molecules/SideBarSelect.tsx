import { SidebarSelectItem } from '@/lib/types'
import { cn } from '@/lib/utils'
import { ChevronRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export const SideBarSelect = ({
  name,
  iconPath,
  listItems,
}: {
  name: string
  iconPath: string
  listItems: SidebarSelectItem[]
}) => {
  const [open, setOpen] = useState(false)
  return (
    <>
      <motion.div
        onClick={() => setOpen((v) => !v)}
        whileHover={{ x: 4 }}
        whileTap={{ scale: 0.98 }}
        className="px-1 flex cursor-pointer hover:bg-neutral-100
          dark:hover:bg-[#333333] relative py-1 transition-colors duration-200
          group rounded-md items-center justify-start gap-1.5"
      >
        <div className="w-4 flex items-center justify-center">
          <motion.div
            animate={{ rotate: open ? 90 : 0 }}
            transition={{ duration: 0.2 }}
          >
            <ChevronRight className="size-4 text-primary/20" />
          </motion.div>
        </div>
        <Image
          src={iconPath}
          className="size-5 mr-0 dark:invert"
          width={20}
          height={20}
          alt=""
        />
        <span className="text-sm">{name}</span>
      </motion.div>
      <AnimatePresence initial={false}>
        {open && listItems.length > 0 && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
            className="overflow-hidden"
          >
            <div className="flex flex-col w-full items-start pl-13 gap-2.5 py-2">
              {listItems.map((i, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                >
                  <Link
                    href={i.href}
                    className={cn(
                      'text-sm hover:text-primary transition-colors duration-200 text-primary/60'
                    )}
                  >
                    {i.name}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
