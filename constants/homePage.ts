import { CardStatsType, NotificationBarItemType, SidebarCategory } from '@/lib/types'

export const sidebarData: SidebarCategory[] = [
  {
    category: 'Pages',
    items: [
      {
        name: 'User Profile',
        iconPath: '/profile.svg',
        selectItems: [
          {
            name: 'Overview',
            href: '#',
          },
          {
            name: 'Projects',
            href: '#',
          },
          {
            name: 'Campaigns',
            href: '#',
          },
          {
            name: 'Documents',
            href: '#',
          },
          {
            name: 'Followers',
            href: '#',
          },
        ],
      },
      {
        name: 'Account',
        iconPath: '/id.svg',
        selectItems: [],
      },
      {
        name: 'Corporate',
        iconPath: '/group.svg',
        selectItems: [],
      },
      {
        name: 'Blog',
        iconPath: '/blog.svg',
        selectItems: [],
      },
      {
        name: 'Social',
        iconPath: '/social.svg',
        selectItems: [],
      },
    ],
  },
]

export const notificationBarData: NotificationBarItemType[] = [
  {
    category: 'Notifications',
    items: [
      {
        image: '/notifications/bug.svg',
        message: 'You have a bug that needs...',
        description: 'Just now',
      },
      {
        image: '/notifications/user.svg',
        message: 'New user registered',
        description: '59 minutes ago',
      },
      {
        image: '/notifications/bug.svg',
        message: 'You have a bug that needs...',
        description: '12 hours ago',
      },
      {
        image: '/notifications/signal.svg',
        message: 'Andi Lane subscribed to you',
        description: 'Today, 11:59 AM',
      },
    ],
  },
  {
    category: 'Activities',
    items: [
      {
        image: '/activities/user1.png',
        message: 'You have a bug that needs...',
        description: 'Just now',
      },
      {
        image: '/activities/user2.png',
        message: 'Released a new version',
        description: '59 minutes ago',
      },
      {
        image: '/activities/user3.png',
        message: 'Submitter a bug',
        description: '12 hours ago',
      },
      {
        image: '/activities/user4.png',
        message: 'Modified A data in Page X',
        description: 'Today, 11:59 AM',
      },
      {
        image: '/activities/user5.png',
        message: 'Deleted a page in Project X',
        description: 'Feb 2, 2023',
      },
    ],
  },
  {
    category: 'Contacts',
    items: [
      {
        image: '/contacts/con1.png',
        message: 'Natali Craig',
      },
      {
        image: '/contacts/con2.png',
        message: 'Drew Cano',
      },
      {
        image: '/contacts/con3.png',
        message: 'Orlando Diggs',
      },
      {
        image: '/contacts/con4.png',
        message: 'Andi Lane',
      },
      {
        image: '/contacts/con5.png',
        message: 'Kate Morrison',
      },
      {
        image: '/contacts/con6.png',
        message: 'Koray Okurmus',
      },
    ],
  },
]

export const statCardsData: CardStatsType[] = [
  {
    className: 'bg-sky-100',
    name: 'Customers',
    number: '3,781',
    points: '+11.01%',
    raise: true,
  },
  {
    className: 'bg-sky-100/30',
    name: 'Orders',
    number: '1,219',
    points: '-0.03%',
    raise: false,
  },
  {
    className: 'bg-sky-100/30',
    name: 'Revenue',
    number: '$695',
    points: '+15.02%',
    raise: true,
  },
  {
    className: 'bg-[#E5ECF6]',
    name: 'Growth',
    number: '30.1%',
    points: '+6.08%',
    raise: true,
  },
]

export const topSellingProductsData = [
  {
    name: 'ASOS Ridley High Waist',
    price: '$79.49',
    quantity: 82,
    amount: '$6,518.18',
  },
  {
    name: 'Marco Lightweight Shirt',
    price: '$128.50',
    quantity: 37,
    amount: '$4,754.50',
  },
  {
    name: 'Half Sleeve Shirt',
    price: '$39.99',
    quantity: 64,
    amount: '$2,559.36',
  },
  {
    name: 'Lightweight Jacket',
    price: '$20.00',
    quantity: 184,
    amount: '$3,680.00',
  },
  {
    name: 'Marco Shoes',
    price: '$79.49',
    quantity: 64,
    amount: '$1,965.81',
  },
]
