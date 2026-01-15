import { cn } from "@/lib/utils";
import { ClassValue } from "clsx";
import Image from "next/image";

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
  return (
    <div
      className={cn(
        `w-50.5 h-28 flex items-start
        gap-y-3 flex-col bg-sky-100 rounded-xl p-6`,
        className,
      )}
    >
      <p className="text-[14px] font-semibold text-black">{name}</p>
      <div className="flex gap-7 items-center w-full">
        <p className="text-[24px] font-semibold text-black">{number}</p>
        <div className="flex gap-1 items-center justify-center">
          {" "}
          <p className="text-black text-[12px]">{points}</p>
          {raise && (
            <Image
              src={"/body/statcard/ArrowRise.svg"}
              width={200}
              height={200}
              className="size-4"
              alt={""}
            />
          )}{" "}
          {!raise && (
            <Image
              src={"/body/statcard/ArrowFall.svg"}
              width={200}
              height={200}
              className="size-4"
              alt={""}
            />
          )}
        </div>
      </div>
    </div>
  );
}
