'use client'

import { ordersData } from '@/constants/ordersPage'
import { Order } from '@/lib/types'
import { useState } from 'react'
import { OrdersTemplate } from '@/components/ui/templates/OrdersTemplate'

export default function OrdersList() {
  const [searchQuery, setSearchQuery] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const [selectedRows, setSelectedRows] = useState<string[]>([])
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc' | null>(null)
  const [statusFilter, setStatusFilter] = useState<string | null>(null)
  const [orders, setOrders] = useState<Order[]>(ordersData)
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false)

  const itemsPerPage = 10

  const parseDate = (dateStr: string) => {
    if (dateStr === 'Just now') return new Date().getTime()
    if (dateStr === 'A minute ago') return new Date().getTime() - 60 * 1000
    if (dateStr === '1 hour ago') return new Date().getTime() - 60 * 60 * 1000
    if (dateStr === 'Yesterday')
      return new Date().getTime() - 24 * 60 * 60 * 1000
    return new Date(dateStr).getTime()
  }

  const handleAddOrder = (newOrder: Order) => {
    setOrders((prev) => [newOrder, ...prev])
  }

  const filteredData = orders
    .filter((order) =>
      order.user.name.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .filter((order) => (statusFilter ? order.status === statusFilter : true))
    .sort((a, b) => {
      if (!sortOrder) return 0
      const dateA = parseDate(a.date)
      const dateB = parseDate(b.date)
      return sortOrder === 'asc' ? dateA - dateB : dateB - dateA
    })

  const totalPages = Math.ceil(filteredData.length / itemsPerPage)
  const paginatedData = filteredData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  )

  const toggleRowSelection = (id: string) => {
    setSelectedRows((prev) =>
      prev.includes(id) ? prev.filter((rowId) => rowId !== id) : [...prev, id]
    )
  }

  const toggleAllSelection = () => {
    if (selectedRows.length === paginatedData.length) {
      setSelectedRows([])
    } else {
      setSelectedRows(paginatedData.map((order) => order.id))
    }
  }

  return (
    <OrdersTemplate
      searchQuery={searchQuery}
      setSearchQuery={(query) => {
        setSearchQuery(query)
        setCurrentPage(1)
      }}
      statusFilter={statusFilter}
      setStatusFilter={setStatusFilter}
      sortOrder={sortOrder}
      setSortOrder={setSortOrder}
      isAddDialogOpen={isAddDialogOpen}
      setIsAddDialogOpen={setIsAddDialogOpen}
      handleAddOrder={handleAddOrder}
      paginatedData={paginatedData}
      selectedRows={selectedRows}
      toggleRowSelection={toggleRowSelection}
      toggleAllSelection={toggleAllSelection}
      currentPage={currentPage}
      totalPages={totalPages}
      setCurrentPage={setCurrentPage}
    />
  )
}
