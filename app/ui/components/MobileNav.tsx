"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  HomeIcon,
  ChatBubbleOvalLeftIcon,
  PlusIcon,
  MapIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import { cva, VariantProps } from "class-variance-authority";

const linkStyles = cva("flex flex-col items-center p-1", {
  variants: {
    isActive: {
      true: "text-kagu-green-500",
    },
  },
});

const NAV_LINKS = [
  { name: "Home", href: "/", icon: HomeIcon },
  { name: "Trips", href: "/dashboard/trips", icon: MapIcon },
  { name: "New", href: "/dashboard/trips/new", icon: PlusIcon },
  { name: "Dashboard", href: "/dashboard", icon: UserIcon },
  {
    name: "Messages",
    href: "/dashboard/messages",
    icon: ChatBubbleOvalLeftIcon,
  },
];

function NavItem({ link }: any) {
  return (
    <li className="flex-1">
      <Link
        href={link.href}
        className={linkStyles({ isActive: link.isActive })}
      >
        <link.icon className="w-8 h-8" />
        <span className="text-xs">{link.name}</span>
      </Link>
    </li>
  );
}

export default function MobileNav() {
  const path = usePathname();
  console.log(path);
  return (
    <nav className="bg-gray-50 shadow-200 block w-full fixed bottom-0 left-0 z-10 lg:hidden">
      <ul className="flex">
        {NAV_LINKS.map((link) => (
          <NavItem
            key={link.name}
            link={{ ...link, isActive: path === link.href }}
          />
        ))}
      </ul>
    </nav>
  );
}
