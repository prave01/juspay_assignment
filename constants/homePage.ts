import { type SidebarCategory } from "@/components/ui/organisms/SideBarClient";

export const sidebarData: SidebarCategory[] = [
  {
    category: "Pages",
    items: [
      {
        name: "User Profile",
        iconPath: "/profile.svg",
        selectItems: [
          {
            name: "Overview",
            href: "#",
          },
          {
            name: "Projects",
            href: "#",
          },
          {
            name: "Campaigns",
            href: "#",
          },
          {
            name: "Documents",
            href: "#",
          },
          {
            name: "Followers",
            href: "#",
          },
        ],
      },
      {
        name: "Account",
        iconPath: "/id.svg",
        selectItems: [],
      },
      {
        name: "Corporate",
        iconPath: "/group.svg",
        selectItems: [],
      },
      {
        name: "Blog",
        iconPath: "/blog.svg",
        selectItems: [],
      },
      {
        name: "Social",
        iconPath: "/social.svg",
        selectItems: [],
      },
    ],
  },
];
