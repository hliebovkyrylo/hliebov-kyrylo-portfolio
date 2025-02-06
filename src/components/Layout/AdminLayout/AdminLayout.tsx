import Link from "next/link";
import { useRouter } from "next/router";
import { ReactNode, useEffect } from "react";
import { links } from "./constants";
import { BiLogOut } from "react-icons/bi";
import cookies from "js-cookie";

export const AdminLayout = ({ children }: { children: ReactNode }) => {
  const router = useRouter();
  const accessToken = cookies.get("accessToken");

  useEffect(() => {
    if (!accessToken) {
      router.push("/sign-in");
    }
  }, [accessToken, router]);

  if (!accessToken) {
    return null;
  }

  return (
    <div className="flex gap-6">
      <aside className="flex sticky top-0 flex-col gap-1 p-3 w-64 bg-slate-800 h-screen">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`w-full px-3 py-2 rounded-xl hover:bg-slate-700 ${
              router.pathname === link.href ? "bg-slate-700" : ""
            }`}
          >
            <div className="flex items-center gap-2">
              {<link.icon />}
              {link.label}
            </div>
          </Link>
        ))}
        <button
          onClick={() => {
            cookies.remove("accessToken");
            router.push("/");
          }}
          className="flex items-center gap-2 text-start w-full px-3 py-2 rounded-xl hover:bg-slate-700"
        >
          <BiLogOut />
          Logout
        </button>
      </aside>
      <div className="py-6 px-6 w-full">{children}</div>
    </div>
  );
};
