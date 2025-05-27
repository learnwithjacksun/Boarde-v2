import { CheckCheck, NotebookPen, ShoppingCart } from "lucide-react";

export const libraries = [
  "Zustand",
  "React Router",
  "React Query",
  "React Hook Form",
  "Sonner",
  "Lucide-React",
  "Tailwind CSS",
  "TypeScript",
  "axios",
  "Framer Motion",
  "Zod",
];

export const menuItems = [
  {
    label: "Tasks",
    icon: CheckCheck,
    href: "/tasks",
  },
  {
    label: "Shopping",
    icon: ShoppingCart,
    href: "/shopping",
  },
  {
    label: "Notes",
    icon: NotebookPen,
    href: "/notes",
  },
];
