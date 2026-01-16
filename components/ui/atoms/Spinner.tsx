import { Loader2 } from 'lucide-react'
import { cn } from '@/lib/utils'

import { SpinnerProps } from '@/lib/types'

export function Spinner({ className, ...props }: SpinnerProps) {
  return (
    <Loader2 className={cn('h-4 w-4 animate-spin', className)} {...props} />
  )
}
