'use client'

import { OrderToolbar } from '@/components/ui/molecules/OrderToolbar'
import { OrderPagination } from '@/components/ui/molecules/OrderPagination'
import { OrderTable } from '@/components/ui/organisms/OrderTable'
import { AddOrderDialog } from '@/components/ui/organisms/AddOrderDialog'
import { Order } from '@/lib/types'

interface OrdersTemplateProps {
    searchQuery: string
    setSearchQuery: (query: string) => void
    statusFilter: string | null
    setStatusFilter: (status: string | null) => void
    sortOrder: 'asc' | 'desc' | null
    setSortOrder: (order: 'asc' | 'desc' | null) => void
    isAddDialogOpen: boolean
    setIsAddDialogOpen: (open: boolean) => void
    handleAddOrder: (order: Order) => void
    paginatedData: Order[]
    selectedRows: string[]
    toggleRowSelection: (id: string) => void
    toggleAllSelection: () => void
    currentPage: number
    totalPages: number
    setCurrentPage: (page: number | ((prev: number) => number)) => void
}

export function OrdersTemplate({
    searchQuery,
    setSearchQuery,
    statusFilter,
    setStatusFilter,
    sortOrder,
    setSortOrder,
    isAddDialogOpen,
    setIsAddDialogOpen,
    handleAddOrder,
    paginatedData,
    selectedRows,
    toggleRowSelection,
    toggleAllSelection,
    currentPage,
    totalPages,
    setCurrentPage,
}: OrdersTemplateProps) {
    return (
        <div className="flex-1 overflow-auto p-8">
            <div className="w-full max-w-[1200px] mx-auto space-y-6">
                <h1 className="text-lg font-semibold text-primary">Order List</h1>

                <OrderToolbar
                    searchQuery={searchQuery}
                    setSearchQuery={setSearchQuery}
                    statusFilter={statusFilter}
                    setStatusFilter={setStatusFilter}
                    sortOrder={sortOrder}
                    setSortOrder={setSortOrder}
                    setIsAddDialogOpen={setIsAddDialogOpen}
                />

                <OrderTable
                    paginatedData={paginatedData}
                    selectedRows={selectedRows}
                    toggleRowSelection={toggleRowSelection}
                    toggleAllSelection={toggleAllSelection}
                />

                <OrderPagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    setCurrentPage={setCurrentPage}
                />
            </div>

            <AddOrderDialog
                open={isAddDialogOpen}
                onOpenChange={setIsAddDialogOpen}
                onAddOrder={handleAddOrder}
            />
        </div>
    )
}
