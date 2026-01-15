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
      <div className="px-0.5 pt-0.5 flex gap-5 items-start flex-col">
        {items.map((i, idx) => (
          <div className="flex gap-3" key={idx}>
            {" "}
            <Image
              src={i.image}
              width={500}
              height={500}
              className="size-6"
              alt={"image"}
            />
            <div className="flex items-start justify-center flex-col">
              <p className="text-[14px]">{i.message}</p>
              <p className="text-[12px] text-black/40">{i.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
