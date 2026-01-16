'use client'

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/shadcn/table'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/shadcn/avatar'
import { Calendar, MoreHorizontal } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { Order } from '@/lib/types'

interface OrderTableProps {
    paginatedData: Order[]
    selectedRows: string[]
    toggleRowSelection: (id: string) => void
    toggleAllSelection: () => void
}

const rowVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.05,
            duration: 0.3,
        },
    }),
}

export function OrderTable({
    paginatedData,
    selectedRows,
    toggleRowSelection,
    toggleAllSelection,
}: OrderTableProps) {
    const getStatusColor = (status: string) => {
        switch (status) {
            case 'In Progress':
                return 'text-[#8A8CD9] before:bg-[#8A8CD9]'
            case 'Complete':
                return 'text-[#4AA785] before:bg-[#4AA785]'
            case 'Pending':
                return 'text-[#59A8D4] before:bg-[#59A8D4]'
            case 'Approved':
                return 'text-[#FFC555] before:bg-[#FFC555]'
            case 'Rejected':
                return 'text-[#1C1C1C]/40 dark:text-red-500 before:bg-[#1C1C1C]/40 dark:before:bg-red-500'
            default:
                return 'text-gray-500 before:bg-gray-500'
        }
    }

    return (
        <div className="bg-white dark:bg-transparent rounded-lg">
            <Table>
                <TableHeader>
                    <TableRow className="hover:bg-transparent border-b border-neutral-700">
                        <TableHead className="w-12.5 pl-4">
                            <input
                                type="checkbox"
                                className="rounded border-gray-300 accent-black h-4 w-4"
                                checked={
                                    paginatedData.length > 0 &&
                                    selectedRows.length === paginatedData.length
                                }
                                onChange={toggleAllSelection}
                            />
                        </TableHead>
                        <TableHead className="text-[12px] font-normal text-gray-400">
                            Order ID
                        </TableHead>
                        <TableHead className="text-[12px] font-normal text-gray-400">
                            User
                        </TableHead>
                        <TableHead className="text-[12px] font-normal text-gray-400">
                            Project
                        </TableHead>
                        <TableHead className="text-[12px] font-normal text-gray-400">
                            Address
                        </TableHead>
                        <TableHead className="text-[12px] font-normal text-gray-400">
                            Date
                        </TableHead>
                        <TableHead className="text-[12px] font-normal text-gray-400">
                            Status
                        </TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    <AnimatePresence mode="popLayout">
                        {paginatedData.map((order, index) => (
                            <motion.tr
                                key={order.id}
                                custom={index}
                                initial="hidden"
                                animate="visible"
                                exit={{ opacity: 0, x: -20 }}
                                variants={rowVariants}
                                whileHover={{
                                    backgroundColor: 'rgba(0, 0, 0, 0.02)',
                                    transition: { duration: 0.2 },
                                }}
                                className={`hover:bg-sky-100/50 hover:dark:bg-neutral-500/40
                  border-b border-transparent dark:border-neutral-700/40
                  cursor-pointer transition-colors
                  ${selectedRows.includes(order.id)
                                        ? 'bg-gray-50 dark:bg-neutral-500/40'
                                        : ''
                                    }`}
                                onClick={() => toggleRowSelection(order.id)}
                            >
                                <TableCell className="pl-4">
                                    <input
                                        type="checkbox"
                                        className="rounded border-gray-300 accent-black h-4 w-4"
                                        checked={selectedRows.includes(order.id)}
                                        onChange={() => toggleRowSelection(order.id)}
                                        onClick={(e) => e.stopPropagation()}
                                    />
                                </TableCell>
                                <TableCell className="text-sm text-primary font-normal">
                                    {order.id}
                                </TableCell>
                                <TableCell>
                                    <div className="flex items-center gap-2">
                                        <Avatar className="h-6 w-6">
                                            <AvatarImage src={order.user.image} />
                                            <AvatarFallback>{order.user.name[0]}</AvatarFallback>
                                        </Avatar>
                                        <span className="text-sm text-primary">
                                            {order.user.name}
                                        </span>
                                    </div>
                                </TableCell>
                                <TableCell className="text-sm text-primary">
                                    {order.project}
                                </TableCell>
                                <TableCell className="text-sm text-primary">
                                    {order.address}
                                </TableCell>
                                <TableCell>
                                    <div className="flex items-center gap-2 text-primary">
                                        <Calendar className="h-4 w-4 text-gray-400" />
                                        <span className="text-sm">{order.date}</span>
                                    </div>
                                </TableCell>
                                <TableCell>
                                    <div className="flex items-center justify-between">
                                        <div
                                            className={`flex items-center gap-2 text-sm
                        ${getStatusColor(order.status)} before:content-['']
                        before:w-1.5 before:h-1.5 before:rounded-full
                        before:mr-1`}
                                        >
                                            {order.status === 'Rejected' ? (
                                                <motion.span
                                                    animate={{ opacity: [1, 0.5, 1] }}
                                                    transition={{ duration: 2, repeat: Infinity }}
                                                >
                                                    {order.status}
                                                </motion.span>
                                            ) : (
                                                order.status
                                            )}
                                        </div>
                                        {order.status === 'Rejected' && (
                                            <MoreHorizontal className="h-4 w-4 text-gray-400 cursor-pointer" />
                                        )}
                                    </div>
                                </TableCell>
                            </motion.tr>
                        ))}
                    </AnimatePresence>
                </TableBody>
            </Table>
        </div>
    )
}
