import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import OrdersList from '@/app/orders-list/page'
import { describe, it, expect, vi } from 'vitest'

vi.mock('@/constants/ordersPage', () => ({
    ordersData: [
        {
            id: '#CM1234',
            user: { name: 'John Doe', image: '/img1.png' },
            project: 'Project A',
            address: '123 Street',
            date: '2023-01-01',
            status: 'Complete',
        },
        {
            id: '#CM5678',
            user: { name: 'Jane Smith', image: '/img2.png' },
            project: 'Project B',
            address: '456 Avenue',
            date: '2023-01-02',
            status: 'Pending',
        },
    ],
}))

describe('OrdersList Page', () => {
    it('renders the order list title', () => {
        render(<OrdersList />)
        expect(screen.getByText('Order List')).toBeInTheDocument()
    })

    it('displays the mock orders', () => {
        render(<OrdersList />)
        expect(screen.getByText('John Doe')).toBeInTheDocument()
        expect(screen.getByText('Jane Smith')).toBeInTheDocument()
    })

    it('filters orders by search query', async () => {
        render(<OrdersList />)
        const searchInput = screen.getByPlaceholderText('Search')

        await userEvent.type(searchInput, 'John')

        expect(screen.getByText('John Doe')).toBeInTheDocument()
        expect(screen.queryByText('Jane Smith')).not.toBeInTheDocument()
    })

    it('opens the add order dialog when plus button is clicked', async () => {
        render(<OrdersList />)
        const addButton = screen.getByRole('button', { name: /add order/i })

        await userEvent.click(addButton)

        expect(screen.getByText('Add New Order')).toBeInTheDocument()
    })

    it('can add a new order via the dialog', async () => {
        render(<OrdersList />)
        const addButton = screen.getByRole('button', { name: /add order/i })
        await userEvent.click(addButton)

        const nameInput = screen.getByLabelText('Name')
        const projectInput = screen.getByLabelText('Project')
        const addressInput = screen.getByLabelText('Address')
        const submitButton = screen.getByText('Save changes')

        await userEvent.type(nameInput, 'New User')
        await userEvent.type(projectInput, 'New Project')
        await userEvent.type(addressInput, 'New Address')

        await userEvent.click(submitButton)

        expect(screen.getByText('New User')).toBeInTheDocument()
    })

    it('filters orders by status', async () => {
        render(<OrdersList />)
        const filterButton = screen.getByRole('button', { name: /filter status/i })
        await userEvent.click(filterButton)

        const pendingOption = screen.getByRole('menuitemcheckbox', { name: 'Pending' })
        await userEvent.click(pendingOption)

        expect(screen.getByText('Jane Smith')).toBeInTheDocument()
        expect(screen.queryByText('John Doe')).not.toBeInTheDocument()
    })

    it('sorts orders by date', async () => {
        render(<OrdersList />)
        const sortButton = screen.getByRole('button', { name: /sort orders/i })

        await userEvent.click(sortButton)
        let rows = screen.getAllByRole('row')
        expect(rows[1]).toHaveTextContent('John Doe')
        expect(rows[2]).toHaveTextContent('Jane Smith')

        await userEvent.click(sortButton)
        rows = screen.getAllByRole('row')
        expect(rows[1]).toHaveTextContent('Jane Smith')
        expect(rows[2]).toHaveTextContent('John Doe')
    })
})
