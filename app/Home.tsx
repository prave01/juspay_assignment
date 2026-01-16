'use client'
import { ProjectionsVsActualsChart } from '@/components/ui/molecules/BarStats'
import { CardStats } from '@/components/ui/molecules/CardStats'
import { RevenueByLocation } from '@/components/ui/molecules/RevenueByLocation'
import { RevenueChart } from '@/components/ui/molecules/RevenueChart'
import { TopSellingProducts } from '@/components/ui/molecules/TopSellingProducts'
import { TotalSales } from '@/components/ui/molecules/TotalSales'
import { Spinner } from '@/components/ui/atoms/Spinner'
import { statCardsData, topSellingProductsData } from '@/constants/homePage'
import { useState, useEffect } from 'react'

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

  return (
    <div
      className="w-full flex-col mx-auto p-8 flex items-start justify-center
        h-full"
    >
      <div
        className="h-full flex-col max-w-400 w-full space-y-6 flex items-center
          justify-start gap-4"
      >
        {' '}
        <div className="max-w-fit w-full flex flex-col gap-7">
          {' '}
          <p className="font-semibold px-4 mr-auto">eCommerce</p>
          <div
            className="w-full h-fit flex justify-center items-center gap-[28px]"
          >
            {' '}
            <div className="grid grid-rows-2 grid-cols-2 w-fit gap-6">
              <CardStats data={statCardsData} />
            </div>
            <ProjectionsVsActualsChart />
          </div>
          <div className="flex gap-[28px]">
            <RevenueChart />
            <RevenueByLocation />
          </div>
          <div
            className="flex gap-2 pb-[28px] items-center justify-between w-full"
          >
            <TopSellingProducts data={topSellingProductsData} />
            <TotalSales />
          </div>
        </div>
      </div>
    </div>
  )
}
