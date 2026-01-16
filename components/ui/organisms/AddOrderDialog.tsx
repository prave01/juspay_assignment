"use client"

import { useState } from "react"
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogFooter,
} from "@/components/shadcn/dialog"
import { Button } from "@/components/shadcn/button"
import { Input } from "@/components/shadcn/input"
import { Label } from "@/components/shadcn/label"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/shadcn/select"
import { Order, OrderStatus } from "@/constants/ordersPage"

interface AddOrderDialogProps {
    open: boolean
    onOpenChange: (open: boolean) => void
    onAddOrder: (order: Order) => void
}

export function AddOrderDialog({
    open,
    onOpenChange,
    onAddOrder,
}: AddOrderDialogProps) {
    const [name, setName] = useState("")
    const [project, setProject] = useState("")
    const [address, setAddress] = useState("")
    const [status, setStatus] = useState<OrderStatus>("Pending")

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()

        const newOrder: Order = {
            id: `#CM${Math.floor(Math.random() * 10000)}`,
            user: {
                name,
                image: `/contacts/con${Math.floor(Math.random() * 6) + 1}.png`,
            },
            project,
            address,
            date: "Just now",
            status,
        }

        onAddOrder(newOrder)
        onOpenChange(false)

        setName("")
        setProject("")
        setAddress("")
        setStatus("Pending")
    }

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Add New Order</DialogTitle>
                </DialogHeader>
                <form onSubmit={handleSubmit} className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="name" className="text-right">
                            Name
                        </Label>
                        <Input
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="col-span-3"
                            required
                        />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="project" className="text-right">
                            Project
                        </Label>
                        <Input
                            id="project"
                            value={project}
                            onChange={(e) => setProject(e.target.value)}
                            className="col-span-3"
                            required
                        />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="address" className="text-right">
                            Address
                        </Label>
                        <Input
                            id="address"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                            className="col-span-3"
                            required
                        />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="status" className="text-right">
                            Status
                        </Label>
                        <Select
                            value={status}
                            onValueChange={(value) => setStatus(value as OrderStatus)}
                        >
                            <SelectTrigger className="col-span-3">
                                <SelectValue placeholder="Select status" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="In Progress">In Progress</SelectItem>
                                <SelectItem value="Complete">Complete</SelectItem>
                                <SelectItem value="Pending">Pending</SelectItem>
                                <SelectItem value="Approved">Approved</SelectItem>
                                <SelectItem value="Rejected">Rejected</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    <DialogFooter>
                        <Button type="submit">Save changes</Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    )
}
