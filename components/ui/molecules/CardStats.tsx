import { ClassValue } from "clsx";
import { StatCard } from "../atoms/StatCard";

export type CardStatsType = {
  name: string;
  number: string;
  points: string;
  raise: boolean;
  className?: ClassValue;
};

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
  );
}
