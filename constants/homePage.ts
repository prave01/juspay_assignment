import { NotificationBarItemType } from "@/components/ui/molecules/NotificationBarItem";
import { type SidebarCategory } from "@/components/ui/organisms/AppSideBar";

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

export const notificationBarData: NotificationBarItemType[] = [
  {
    category: "Notifications",
    items: [
      {
        image: "/notifications/bug.svg",
        message: "You have a bug that needs...",
        description: "Just now",
      },
      {
        image: "/notifications/user.svg",
        message: "New user registered",
        description: "59 minutes ago",
      },
      {
        image: "/notifications/bug.svg",
        message: "You have a bug that needs...",
        description: "12 hours ago",
      },
      {
        image: "/notifications/signal.svg",
        message: "Andi Lane subscribed to you",
        description: "Today, 11:59 AM",
      },
    ],
  },
  {
    category: "Activities",
    items: [
      {
        image: "/activities/user1.png",
        message: "You have a bug that needs...",
        description: "Just now",
      },
      {
        image: "/activities/user2.png",
        message: "Released a new version",
        description: "59 minutes ago",
      },
      {
        image: "/activities/user3.png",
        message: "Submitter a bug",
        description: "12 hours ago",
      },
      {
        image: "/activities/user4.png",
        message: "Modified A data in Page X",
        description: "Today, 11:59 AM",
      },
      {
        image: "/activities/user5.png",
        message: "Deleted a page in Project X",
        description: "Feb 2, 2023",
      },
    ],
  },
  {
    category: "Contacts",
    items: [
      {
        image: "/contacts/con1.png",
        message: "Natali Craig",
      },
      {
        image: "/contacts/con2.png",
        message: "Drew Cano",
      },
      {
        image: "/contacts/con3.png",
        message: "Orlando Diggs",
      },
      {
        image: "/contacts/con4.png",
        message: "Andi Lane",
      },
      {
        image: "/contacts/con5.png",
        message: "Kate Morrison",
      },
      {
        image: "/contacts/con6.png",
        message: "Koray Okurmus",
      },
    ],
  },
];
