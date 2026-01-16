'use client'

import { Spinner } from '@/components/ui/atoms/Spinner'
import { EcommerceTemplate } from '@/components/ui/templates/EcommerceTemplate'
import { useEffect, useState } from 'react'

export default function Home() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const randomTime = Math.floor(Math.random() * 2000) + 2000
    const timer = setTimeout(() => {
      setLoading(false)
    }, randomTime)

    return () => clearTimeout(timer)
  }, [])

  if (loading) {
    return (
      <div
        className="h-full w-full flex items-center justify-center min-h-[80vh]"
      >
        <Spinner className="h-10 w-10 text-primary" />
      </div>
    )
  }

  return <EcommerceTemplate />
}
