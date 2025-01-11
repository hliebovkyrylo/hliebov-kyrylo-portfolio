import Link from "next/link";
import { useRouter } from "next/router";
import { ReactNode } from "react";
import { links } from "./constants";

export const AdminLayout = ({ children }: { children: ReactNode }) => {
  const router = useRouter();

  return (
    <div className="flex gap-6">
      <aside className="flex flex-col gap-1 p-3 w-64 bg-slate-800 h-screen">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`w-full px-3 py-2 rounded-xl hover:bg-slate-700 ${
              router.pathname === link.href ? "bg-slate-700" : ""
            }`}
          >
            {link.label}
          </Link>
        ))}
        <button className="text-start w-full px-3 py-2 rounded-xl hover:bg-slate-700">
          Logout
        </button>
      </aside>
      <div className="py-6 w-full">{children}</div>
    </div>
  );
};
