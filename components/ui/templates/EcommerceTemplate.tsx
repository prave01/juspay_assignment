'use client'

import { ProjectionsVsActualsChart } from '@/components/ui/molecules/BarStats'
import { RevenueChart } from '@/components/ui/molecules/RevenueChart'
import { RevenueByLocation } from '@/components/ui/molecules/RevenueByLocation'
import { TopSellingProducts } from '@/components/ui/molecules/TopSellingProducts'
import { TotalSales } from '@/components/ui/molecules/TotalSales'
import { CardStats } from '@/components/ui/molecules/CardStats'
import { statCardsData, topSellingProductsData } from '@/constants/homePage'
import { motion, Variants } from 'framer-motion'

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2,
        },
    },
}

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20, filter: 'blur(10px)' },
    visible: {
        opacity: 1,
        y: 0,
        filter: 'blur(0px)',
        transition: {
            duration: 0.5,
            ease: 'easeOut',
        },
    },
}

export function EcommerceTemplate() {
    return (
        <motion.div
            className="w-fit flex-col mx-auto p-8 flex items-start justify-center
        h-full"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
        >
            <div
                className="h-full flex-col w-full space-y-6 flex items-center
          justify-start gap-4"
            >
                <div className="w-full flex flex-col gap-7">
                    <motion.p
                        variants={itemVariants}
                        className="font-semibold px-4 mr-auto"
                    >
                        eCommerce
                    </motion.p>
                    <div
                        className="w-full h-fit flex flex-col xl:flex-row justify-between
              items-center gap-7"
                    >
                        <motion.div
                            variants={itemVariants}
                            className="grid grid-cols-1 sm:grid-cols-2 w-full xl:w-fit gap-6"
                        >
                            <CardStats data={statCardsData} />
                        </motion.div>
                        <motion.div variants={itemVariants} className="w-full xl:w-fit">
                            <ProjectionsVsActualsChart />
                        </motion.div>
                    </div>
                    <motion.div
                        variants={itemVariants}
                        className="flex flex-col xl:flex-row gap-7 w-full"
                    >
                        <RevenueChart />
                        <RevenueByLocation />
                    </motion.div>
                    <motion.div
                        variants={itemVariants}
                        className="flex flex-col xl:flex-row gap-7 xl:gap-2 pb-7
              items-center justify-between w-full"
                    >
                        <TopSellingProducts data={topSellingProductsData} />
                        <TotalSales />
                    </motion.div>
                </div>
            </div>
        </motion.div>
    )
}
