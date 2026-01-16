'use client'

import { Button } from '@/components/shadcn/button'
import { Input } from '@/components/shadcn/input'
import {
    Plus,
    ArrowUpDown,
    ArrowUp,
    ArrowDown,
    Search,
    ListFilter,
} from 'lucide-react'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuCheckboxItem,
    DropdownMenuTrigger,
} from '@/components/shadcn/dropdown-menu'
import { motion } from 'framer-motion'

interface OrderToolbarProps {
    searchQuery: string
    setSearchQuery: (query: string) => void
    statusFilter: string | null
    setStatusFilter: (status: string | null) => void
    sortOrder: 'asc' | 'desc' | null
    setSortOrder: (order: 'asc' | 'desc' | null) => void
    setIsAddDialogOpen: (open: boolean) => void
}

export function OrderToolbar({
    searchQuery,
    setSearchQuery,
    statusFilter,
    setStatusFilter,
    sortOrder,
    setSortOrder,
    setIsAddDialogOpen,
}: OrderToolbarProps) {
    return (
        <div
            className="flex items-center justify-between bg-[#F7F9FB]
        dark:bg-[#272727] p-2 rounded-lg"
        >
            <div className="flex items-center gap-2">
                <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                    <Button
                        variant="ghost"
                        size="icon"
                        aria-label="Add Order"
                        className="h-8 w-8 text-primary hover:bg-gray-200
              dark:hover:bg-neutral-700"
                        onClick={() => setIsAddDialogOpen(true)}
                    >
                        <Plus className="size-5" />
                    </Button>
                </motion.div>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                            <Button
                                variant="ghost"
                                size="icon"
                                aria-label="Filter Status"
                                className={`size-8 text-primary hover:bg-gray-200
                  dark:hover:bg-neutral-700
                  ${statusFilter ? 'bg-gray-300 dark:bg-neutral-600' : ''}`}
                            >
                                <ListFilter className="size-4.5" />
                            </Button>
                        </motion.div>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuCheckboxItem
                            checked={statusFilter === null}
                            onCheckedChange={() => setStatusFilter(null)}
                        >
                            All Statuses
                        </DropdownMenuCheckboxItem>
                        {[
                            'In Progress',
                            'Complete',
                            'Pending',
                            'Approved',
                            'Rejected',
                        ].map((status) => (
                            <DropdownMenuCheckboxItem
                                key={status}
                                checked={statusFilter === status}
                                onCheckedChange={() =>
                                    setStatusFilter(status === statusFilter ? null : status)
                                }
                            >
                                {status}
                            </DropdownMenuCheckboxItem>
                        ))}
                    </DropdownMenuContent>
                </DropdownMenu>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                            <Button
                                variant="ghost"
                                size="icon"
                                aria-label="Sort Orders"
                                className={`h-8 w-8 text-primary hover:bg-gray-200
                  dark:hover:bg-neutral-700
                  ${sortOrder ? 'bg-gray-300 dark:bg-neutral-600' : ''}`}
                            >
                                <ArrowUpDown className="size-4.5" />
                            </Button>
                        </motion.div>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="start">
                        <DropdownMenuCheckboxItem
                            checked={sortOrder === null}
                            onCheckedChange={() => setSortOrder(null)}
                        >
                            <span className="pl-1.5">Default</span>
                        </DropdownMenuCheckboxItem>
                        <DropdownMenuCheckboxItem
                            checked={sortOrder === 'desc'}
                            onCheckedChange={() => setSortOrder('desc')}
                        >
                            <div className="flex items-center justify-start gap-2">
                                <ArrowDown className="size-4" />
                                <span>Newest First</span>
                            </div>
                        </DropdownMenuCheckboxItem>
                        <DropdownMenuCheckboxItem
                            checked={sortOrder === 'asc'}
                            onCheckedChange={() => setSortOrder('asc')}
                        >
                            <div className="flex items-center justify-start gap-2">
                                <ArrowUp className="size-4" />
                                <span>Oldest First</span>
                            </div>
                        </DropdownMenuCheckboxItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
            <div
                className="relative dark:bg-neutral-900 bg-white rounded-lg border-2
          border-border w-50"
            >
                <Search
                    className="absolute left-2 top-1/2 transform -translate-y-1/2 h-4
            w-4 text-gray-400"
                />
                <Input
                    placeholder="Search"
                    className="pl-8 h-8 border-none text-sm placeholder:text-gray-400"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
            </div>
        </div>
    )
}
