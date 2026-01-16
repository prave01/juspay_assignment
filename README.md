# Juspay Assignment

This project is a modern web application built with Next.js, focusing on a clean architecture and a premium user experience. It was developed as part of the Juspay assignment.

## Getting Started

To run this project locally, follow these steps:

1. Clone the repository to your local machine.
2. Install the necessary dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Open your browser and navigate to http://localhost:3000 to see the application in action.

## Core Technologies

The project leverages a robust stack of modern libraries and frameworks to ensure performance and maintainability:

- **Next.js**: The core framework used for building the application.
- **Tailwind CSS 4**: Used for styling, providing a utility-first approach with the latest features.
- **Radix UI**: A set of unstyled, accessible UI primitives used for building complex components like dialogs, dropdowns, and tooltips.
- **Framer Motion**: Utilized for creating smooth, high-quality animations and transitions.
- **Lucide React**: Provides a comprehensive set of clean and consistent icons.
- **Recharts**: Used for rendering data visualizations and charts.
- **TypeScript**: Ensures type safety across the entire codebase.

## Architecture: Atomic Design Pattern

The component architecture follows the Atomic Design pattern to promote reusability and a clear hierarchy. You can find the components organized in the `components/ui` directory:

- **Atoms**: The smallest building blocks, such as buttons, inputs, and labels.
- **Molecules**: Groups of atoms functioning together as a unit, like a search bar or a form field with a label.
- **Organisms**: Complex components composed of molecules and atoms, forming distinct sections of the interface like a sidebar or a header.
- **Templates**: Page-level layouts that define the structure of the content.

This approach ensures that the UI is consistent and easy to scale.

## Code Quality and Formatting

We use Prettier to maintain a consistent coding style throughout the project. The configuration includes several specialized plugins to enhance the development experience:

- **prettier-plugin-organize-imports**: Automatically sorts and organizes import statements.
- **prettier-plugin-tailwindcss**: Ensures that Tailwind CSS classes are sorted in a consistent order.
- **prettier-plugin-classnames**: Handles formatting for complex class name strings.

You can format the entire project by running:
```bash
npm run prettier:write
```

The project also uses ESLint to catch potential issues and enforce best practices.
