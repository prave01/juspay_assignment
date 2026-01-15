"use client";

import { Button } from "@/components/shadcn/button";
import { useSidebar } from "@/components/shadcn/sidebar";
import { cn } from "@/lib/utils";
import Image from "next/image";

export function SideBarTrigger({
  position,
  className,
  onClick,
  ...props
}: React.ComponentProps<typeof Button> & { position: "right" | "left" }) {
  const { toggleSidebar } = useSidebar();

  return (
    <button
      onClick={(event) => {
        onClick?.(event);
        toggleSidebar();
      }}
      className={cn(
        position === "right" && "rotate-180",
        "bg-transparent cursor-pointer border-none focus-visible:outline-none",
        className,
      )}
    >
      <Image
        width={500}
        height={500}
        src={"/expand.svg"}
        className="size-5"
        alt={""}
      />
    </button>
  );
}
