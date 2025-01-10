import { ReactNode } from "react";
import { InfoSidebar } from "./components/InfoSidebar";

export const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex justify-center inset-0 min-h-screen w-full">
      <main className="w-full max-w-[1000px] flex gap-6">
        <InfoSidebar
          name="Hliebov Kyrylo"
          jobTitle="Front-End Engineer"
          description="Ya tipa eee ny da"
          instHref="https://instagram.com/xenoniiii/"
          tgHref="https://t.me/kyrylohliebov"
          linkedInHref="https://www.linkedin.com/in/kyrylo-hliebov-a5055926a/"
          gitHubHref="https://github.com/hliebovkyrylo"
        />
        <div className="p-6">
        {children}
        </div>
      </main>
    </div>
  );
};
