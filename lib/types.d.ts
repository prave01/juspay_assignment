import { ClassValue } from 'clsx'
import * as React from 'react'

export type OrderStatus =
    | 'In Progress'
    | 'Complete'
    | 'Pending'
    | 'Approved'
    | 'Rejected'

export interface Order {
    id: string
    user: {
        name: string
        image: string
    }
    project: string
    address: string
    date: string
    status: OrderStatus
}

export type CardStatsType = {
    name: string
    number: string
    points: string
    raise: boolean
    className?: ClassValue
}

export type NotificationBarItemType = {
    category: string
    items: Array<{
        image: string
        message: string
        description?: string
    }>
}

export type SidebarSelectItem = {
    name: string
    href: string
}

export type SidebarItem = {
    name: string
    iconPath: string
    selectItems: SidebarSelectItem[]
}

export type SidebarCategory = {
    category: string
    items: SidebarItem[]
}

export interface Product {
    name: string
    price: string
    quantity: number
    amount: string
}

export interface TopSellingProductsProps {
    data: Product[]
}

export type SpinnerProps = React.SVGProps<SVGSVGElement>
