import Image from "next/image";
import Link from "next/link";

const menuItems = [
  {
    title: "MENU",
    items: [
      {
        icon: "/home.png",
        label: "Home",
        href: "/admin",
        visible: ["admin", "user"],
      },
      // {
      //   icon: "/word.png",
      //   label: "Word Cloud",
      //   href: "/list/words",
      //   visible: ["admin", "user"],
      // },
      {
        icon: "/finance.png",
        label: "Portfolio",
        href: "/portfolio",
        visible: ["admin", "user"],
      },

      {
        icon: "/exam.png",
        label: "History",
        href: "/history",
        visible: ["admin", "user"],
      },
    ],
  },
  {
    title: "OTHER",
    items: [
      // {
      //   icon: "/profile.png",
      //   label: "Profile",
      //   href: "/profile",
      //   visible: ["admin", "user"],
      // },
      {
        icon: "/setting.png",
        label: "Settings",
        href: "/settings",
        visible: ["admin", "user"],
      },
      {
        icon: "/logout.png",
        label: "Logout",
        href: "/",
        visible: ["admin", "user"],
      },
    ],
  },
];

export default function Menu() {
  return (
    <div className="mt-4 text-sm">
      {menuItems.map((i) => (
        <div className="flex flex-col gap-2" key={i.title}>
          <span className="hidden lg:block text-gray-400 font-light my-4">
            {i.title}
          </span>
          {i.items.map((item) => (
            <Link
              href={item.href}
              key={item.label}
              className="flex items-center justify-center lg:justify-start gap-4 text-gray-500 py-2"
            >
              <Image src={item.icon} alt="icon" width={20} height={20}></Image>
              <span className="hidden lg:block text-gray-400">
                {item.label}
              </span>
            </Link>
          ))}
        </div>
      ))}
    </div>
  );
}
