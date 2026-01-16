'use client'

import { Button } from '@/components/shadcn/button'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface OrderPaginationProps {
    currentPage: number
    totalPages: number
    setCurrentPage: (page: number | ((prev: number) => number)) => void
}

export function OrderPagination({
    currentPage,
    totalPages,
    setCurrentPage,
}: OrderPaginationProps) {
    return (
        <div className="flex items-center justify-end gap-2">
            <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 text-gray-400 disabled:opacity-50"
                onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                disabled={currentPage === 1}
            >
                <ChevronLeft className="h-4 w-4" />
            </Button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <Button
                    key={page}
                    variant={currentPage === page ? 'secondary' : 'ghost'}
                    className={`h-8 w-8 text-sm ${currentPage === page
                        ? 'bg-gray-100 dark:bg-neutral-700 text-primary font-medium'
                        : 'text-gray-500'
                        }`}
                    onClick={() => setCurrentPage(page)}
                >
                    {page}
                </Button>
            ))}
            <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 text-gray-400 disabled:opacity-50"
                onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                disabled={currentPage === totalPages}
            >
                <ChevronRight className="h-4 w-4" />
            </Button>
        </div>
    )
}
