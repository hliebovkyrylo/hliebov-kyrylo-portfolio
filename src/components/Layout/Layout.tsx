import { ReactNode } from "react";
import { InfoSidebar } from "./components/InfoSidebar";
import { GetUserResult } from "@/lib/services/userService";

interface LayoutProps {
  children: ReactNode;
  user?: GetUserResult;
}

export const Layout = ({ children, user }: LayoutProps) => {
  return (
    <div className="flex justify-center inset-0 min-h-screen w-full">
      <main className="w-full max-w-[1000px] flex gap-6 max-lg:block">
        <InfoSidebar
          name={user?.name || "Kyrylo Hliebov"}
          jobTitle={user?.position || "Full-Stack Developer"}
          description={
            user?.smallDescription ||
            "I can develop hight-performance web and android apps"
          }
          instHref="https://instagram.com/xenoniiii/"
          tgHref="https://t.me/kyrylohliebov"
          linkedInHref="https://www.linkedin.com/in/kyrylo-hliebov-a5055926a/"
          gitHubHref="https://github.com/hliebovkyrylo"
        />
        <div className="p-6">{children}</div>
      </main>
    </div>
  );
};
