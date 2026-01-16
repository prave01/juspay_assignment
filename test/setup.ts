import '@testing-library/jest-dom'
import { vi } from 'vitest'

class ResizeObserver {
    observe = vi.fn()
    unobserve = vi.fn()
    disconnect = vi.fn()
}

global.ResizeObserver = ResizeObserver

Element.prototype.scrollIntoView = vi.fn()
