import { cn } from "@/lib/utils";
import { ClassValue } from "clsx";
import { ReactSVG } from "react-svg";

export function StatCard({
  name,
  number,
  points,
  raise,
  className,
}: {
  name: string;
  number: string;
  points: string;
  raise: boolean;
  className: ClassValue;
}) {
  const isSpecial = name === "Orders" || name === "Revenue";
  const bgColor = isSpecial ? "bg-[#F7F9FB] dark:bg-[#272727]" : "bg-[#F7F9FB]";
  const textColor = isSpecial ? "text-[#1C1C1C] dark:text-white" : "text-[#1C1C1C]";

  return (
    <div
      className={cn(
        "w-50.5 h-28 flex items-start gap-y-3 flex-col rounded-xl p-6",
        bgColor,
        className,
      )}
    >
      <p className={cn("text-[14px] font-semibold", textColor)}>{name}</p>
      <div className="flex gap-7 items-center w-full">
        <p className={cn("text-[24px] font-semibold", textColor)}>{number}</p>
        <div className="flex gap-1 items-center justify-center">
          <p className={cn("text-[12px]", textColor)}>{points}</p>
          {raise ? (
            <ReactSVG className={cn(isSpecial ? "stroke-dark dark:stroke-white fill-dark dark:fill-white" : "stroke-primary dark:stroke-black")} src="/body/statcard/ArrowRise.svg" />
          ) : (
            <ReactSVG className={cn(isSpecial ? "stroke-dark dark:stroke-white fill-dark dark:fill-white" : "stroke-primary dark:stroke-black")} src="/body/statcard/ArrowFall.svg" />
          )}
        </div>
      </div>
    </div>
  );
}
