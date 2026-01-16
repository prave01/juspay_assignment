"use client"

import * as React from "react"
import { useRouter } from "next/navigation"
import {
    CommandDialog,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "@/components/shadcn/command"
import { LayoutDashboard, ListOrdered } from "lucide-react"

interface SearchDialogProps {
    open: boolean
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export function SearchDialog({ open, setOpen }: SearchDialogProps) {
    const router = useRouter()

    React.useEffect(() => {
        const down = (e: KeyboardEvent) => {
            if (e.key === "/" && (e.metaKey || e.ctrlKey)) {
                e.preventDefault()
                setOpen((open) => !open)
            }
        }

        document.addEventListener("keydown", down)
        return () => document.removeEventListener("keydown", down)
    }, [setOpen])

    const runCommand = React.useCallback((command: () => void) => {
        setOpen(false)
        command()
    }, [setOpen])

    return (
        <CommandDialog open={open} onOpenChange={setOpen}>
            <CommandInput placeholder="Type a command or search..." />
            <CommandList>
                <CommandEmpty>No results found.</CommandEmpty>
                <CommandGroup heading="Pages">
                    <CommandItem
                        onSelect={() => {
                            runCommand(() => router.push("/"))
                        }}
                    >
                        <LayoutDashboard className="mr-2 h-4 w-4" />
                        Dashboard
                    </CommandItem>
                    <CommandItem
                        onSelect={() => {
                            runCommand(() => router.push("/orders-list"))
                        }}
                    >
                        <ListOrdered className="mr-2 h-4 w-4" />
                        Orders List
                    </CommandItem>
                </CommandGroup>
            </CommandList>
        </CommandDialog>
    )
}
