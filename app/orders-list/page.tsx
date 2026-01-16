"use client";

import { ordersData } from "@/constants/ordersPage";
import { Order } from "@/lib/types";
import { useState } from "react";
import { AddOrderDialog } from "@/components/ui/organisms/AddOrderDialog";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/shadcn/table";
import { Button } from "@/components/shadcn/button";
import { Input } from "@/components/shadcn/input";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/shadcn/avatar";
import {
  Plus,
  ArrowUpDown,
  Search,
  Calendar,
  MoreHorizontal,
  ChevronLeft,
  ChevronRight,
  ListFilter,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuCheckboxItem,
  DropdownMenuTrigger,
} from "@/components/shadcn/dropdown-menu";

export default function OrdersList() {
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedRows, setSelectedRows] = useState<string[]>([]);
  const [sortOrder, setSortOrder] = useState<"asc" | "desc" | null>(null);
  const [statusFilter, setStatusFilter] = useState<string | null>(null);
  const [orders, setOrders] = useState<Order[]>(ordersData);
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);

  const itemsPerPage = 10;

  const parseDate = (dateStr: string) => {
    if (dateStr === "Just now") return new Date().getTime();
    if (dateStr === "A minute ago") return new Date().getTime() - 60 * 1000;
    if (dateStr === "1 hour ago") return new Date().getTime() - 60 * 60 * 1000;
    if (dateStr === "Yesterday")
      return new Date().getTime() - 24 * 60 * 60 * 1000;
    return new Date(dateStr).getTime();
  };

  const handleAddOrder = (newOrder: Order) => {
    setOrders((prev) => [newOrder, ...prev]);
  };

  const filteredData = orders
    .filter((order) =>
      order.user.name.toLowerCase().includes(searchQuery.toLowerCase()),
    )
    .filter((order) => (statusFilter ? order.status === statusFilter : true))
    .sort((a, b) => {
      if (!sortOrder) return 0;
      const dateA = parseDate(a.date);
      const dateB = parseDate(b.date);
      return sortOrder === "asc" ? dateA - dateB : dateB - dateA;
    });

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const paginatedData = filteredData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  );

  const toggleRowSelection = (id: string) => {
    setSelectedRows((prev) =>
      prev.includes(id) ? prev.filter((rowId) => rowId !== id) : [...prev, id],
    );
  };

  const toggleAllSelection = () => {
    if (selectedRows.length === paginatedData.length) {
      setSelectedRows([]);
    } else {
      setSelectedRows(paginatedData.map((order) => order.id));
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "In Progress":
        return "text-[#8A8CD9] before:bg-[#8A8CD9]";
      case "Complete":
        return "text-[#4AA785] before:bg-[#4AA785]";
      case "Pending":
        return "text-[#59A8D4] before:bg-[#59A8D4]";
      case "Approved":
        return "text-[#FFC555] before:bg-[#FFC555]";
      case "Rejected":
        return "text-[#1C1C1C]/40 dark:text-red-500 before:bg-[#1C1C1C]/40 dark:before:bg-red-500";
      default:
        return "text-gray-500 before:bg-gray-500";
    }
  };

  return (
    <div className="flex-1 overflow-auto p-8">
      <div className="w-full max-w-300 mx-auto space-y-6">
        <h1 className="text-lg font-semibold text-primary">Order List</h1>
        <div
          className="flex items-center justify-between bg-[#F7F9FB]
            dark:bg-[#272727] p-2 rounded-lg"
        >
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 text-primary hover:bg-gray-200 dark:hover:bg-neutral-700"
              onClick={() => setIsAddDialogOpen(true)}
            >
              <Plus className="size-5" />
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className={`size-8 text-primary hover:bg-gray-200 dark:hover:bg-neutral-700
                    ${statusFilter ? "bg-gray-300 dark:bg-neutral-600" : ""}`}
                >
                  <ListFilter className="size-4.5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuCheckboxItem
                  checked={statusFilter === null}
                  onCheckedChange={() => setStatusFilter(null)}
                >
                  All Statuses
                </DropdownMenuCheckboxItem>
                {[
                  "In Progress",
                  "Complete",
                  "Pending",
                  "Approved",
                  "Rejected",
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
            <Button
              variant="ghost"
              size="icon"
              className={`h-8 w-8 text-primary hover:bg-gray-200 dark:hover:bg-neutral-700
                ${sortOrder ? "bg-gray-300 dark:bg-neutral-600" : ""}`}
              onClick={() =>
                setSortOrder((prev) => {
                  if (prev === "asc") return "desc";
                  if (prev === "desc") return null;
                  return "asc";
                })
              }
            >
              <ArrowUpDown className="size-4.5" />
            </Button>
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
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setCurrentPage(1);
              }}
            />
          </div>
        </div>

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
              {paginatedData.map((order) => (
                <TableRow
                  key={order.id}
                  className={`hover:bg-sky-100/50 hover:dark:bg-neutral-500/40
                  border-b border-transparent dark:border-neutral-700/40
                  ${selectedRows.includes(order.id) ? "bg-gray-50 dark:bg-neutral-500/40" : "jk"}`}
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
                        {order.status}
                      </div>
                      {order.status === "Rejected" && (
                        <MoreHorizontal className="h-4 w-4 text-gray-400 cursor-pointer" />
                      )}
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>

          <div className="flex items-center justify-end p-4 gap-2">
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
                variant={currentPage === page ? "secondary" : "ghost"}
                className={`h-8 w-8 text-sm ${currentPage === page
                  ? "bg-gray-100 dark:bg-neutral-700 text-primary font-medium"
                  : "text-gray-500"
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
          <AddOrderDialog
            open={isAddDialogOpen}
            onOpenChange={setIsAddDialogOpen}
            onAddOrder={handleAddOrder}
          />
        </div>
      </div>
    </div>
  );
}
