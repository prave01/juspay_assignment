import Image from "next/image";

export function StatCard() {
  return (
    <div className="w-50.5 h-28 flex items-start gap-y-3 flex-col bg-sky-100 rounded-xl p-6">
      <p className="text-[14px] font-semibold text-black">Customers</p>
      <div className="flex gap-7 items-center w-full">
        <p className="text-[24px] font-semibold text-black">3,781</p>
        <div className="flex gap-1 items-center justify-center">
          {" "}
          <p className="text-black text-[12px]">+11.01%</p>
          <Image
            src={"/body/statcard/ArrowRise.svg"}
            width={200}
            height={200}
            className="size-4"
            alt={""}
          />
        </div>
      </div>
    </div>
  );
}
