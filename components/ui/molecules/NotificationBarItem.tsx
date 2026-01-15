import { cn } from "@/lib/utils";
import Image from "next/image";

export type NotificationBarItemType = {
  category: string;
  items: Array<{
    image: string;
    message: string;
    description?: string;
  }>;
};

export function NotificationBarItem({
  category,
  items,
}: NotificationBarItemType) {
  return (
    <div className="flex flex-col gap-5 w-full">
      <p className="font-semibold text-[14px]">{category}</p>
      <div
        className={cn(
          "px-0.5 pt-0.5 flex items-start flex-col",
          category === "Activities" ? "gap-2" : "gap-5",
        )}
      >
        {items.map((i, idx) => (
          <div className="flex gap-3" key={idx}>
            {" "}
            <div className="flex flex-col gap-2 items-center justify-center">
              {" "}
              <Image
                src={i.image}
                width={500}
                height={500}
                className="size-6"
                alt={"image"}
              />
              {category === "Activities" && (
                <span className=" text-[12px] text-neutral-200">|</span>
              )}
            </div>
            <div className="flex items-start justify-start flex-col">
              <p className="text-[14px]">{i.message}</p>
              <p className="text-[12px] text-black/40">{i.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
