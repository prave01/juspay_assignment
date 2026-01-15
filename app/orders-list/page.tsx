"use client";

import { ordersData } from "@/constants/ordersPage";
import { useState } from "react";
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
import { Avatar, AvatarFallback, AvatarImage } from "@/components/shadcn/avatar";
import {
  Plus,
  Filter,
  ArrowUpDown,
  Search,
  Calendar,
  MoreHorizontal,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

export default function OrdersList() {
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedRows, setSelectedRows] = useState<string[]>([]);

  const itemsPerPage = 10;

  // Filter data based on search query
  const filteredData = ordersData.filter((order) =>
    order.user.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Pagination logic
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const paginatedData = filteredData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Handle row selection
  const toggleRowSelection = (id: string) => {
    setSelectedRows((prev) =>
      prev.includes(id) ? prev.filter((rowId) => rowId !== id) : [...prev, id]
    );
  };

  const toggleAllSelection = () => {
    if (selectedRows.length === paginatedData.length) {
      setSelectedRows([]);
    } else {
      setSelectedRows(paginatedData.map((order) => order.id));
    }
  };

  // Status color helper
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
        return "text-[#1C1C1C]/40 before:bg-[#1C1C1C]/40";
      default:
        return "text-gray-500 before:bg-gray-500";
    }
  };

  return (
    <div className="flex-1 overflow-auto p-8">
      <div className="w-full max-w-[1200px] mx-auto space-y-6">
        <h1 className="text-lg font-semibold text-black">Order List</h1>

        {/* Toolbar */}
        <div className="flex items-center justify-between bg-[#F7F9FB] p-2 rounded-lg">
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="h-8 w-8 text-black hover:bg-gray-200">
              <Plus className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon" className="h-8 w-8 text-black hover:bg-gray-200">
              <Filter className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon" className="h-8 w-8 text-black hover:bg-gray-200">
              <ArrowUpDown className="h-4 w-4" />
            </Button>
          </div>
          <div className="relative w-[200px]">
            <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Search"
              className="pl-8 h-8 bg-white border-none shadow-sm text-sm"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setCurrentPage(1); // Reset to first page on search
              }}
            />
          </div>
        </div>

        {/* Table */}
        <div className="bg-white rounded-lg border border-gray-100">
          <Table>
            <TableHeader>
              <TableRow className="hover:bg-transparent border-b border-gray-100">
                <TableHead className="w-[50px] pl-4">
                  <input
                    type="checkbox"
                    className="rounded border-gray-300 accent-black h-4 w-4"
                    checked={paginatedData.length > 0 && selectedRows.length === paginatedData.length}
                    onChange={toggleAllSelection}
                  />
                </TableHead>
                <TableHead className="text-xs font-normal text-gray-400">Order ID</TableHead>
                <TableHead className="text-xs font-normal text-gray-400">User</TableHead>
                <TableHead className="text-xs font-normal text-gray-400">Project</TableHead>
                <TableHead className="text-xs font-normal text-gray-400">Address</TableHead>
                <TableHead className="text-xs font-normal text-gray-400">Date</TableHead>
                <TableHead className="text-xs font-normal text-gray-400">Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {paginatedData.map((order) => (
                <TableRow
                  key={order.id}
                  className={`hover:bg-sky-100/50 border-b border-gray-50 ${selectedRows.includes(order.id) ? "bg-gray-50" : ""
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
                  <TableCell className="text-sm text-black font-medium">{order.id}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Avatar className="h-6 w-6">
                        <AvatarImage src={order.user.image} />
                        <AvatarFallback>{order.user.name[0]}</AvatarFallback>
                      </Avatar>
                      <span className="text-sm text-black">{order.user.name}</span>
                    </div>
                  </TableCell>
                  <TableCell className="text-sm text-black">{order.project}</TableCell>
                  <TableCell className="text-sm text-black">{order.address}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2 text-black">
                      <Calendar className="h-4 w-4 text-gray-400" />
                      <span className="text-sm">{order.date}</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center justify-between">
                      <div className={`flex items-center gap-2 text-sm ${getStatusColor(order.status)} before:content-[''] before:w-1.5 before:h-1.5 before:rounded-full before:mr-1`}>
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

          {/* Pagination */}
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
                className={`h-8 w-8 text-sm ${currentPage === page ? "bg-gray-100 text-black font-medium" : "text-gray-500"
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
        </div>
      </div>
    </div>
  );
}
