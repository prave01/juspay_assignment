import { CardStatsType } from '@/lib/types'
import { StatCard } from '../atoms/StatCard'

export function CardStats({ data }: { data: CardStatsType[] }) {
  return (
    <>
      {data.map((i, idx) => (
        <StatCard
          key={idx}
          name={i.name}
          number={i.number}
          points={i.points}
          raise={i.raise}
          className={i.className}
        />
      ))}
    </>
  )
}
