import { ReactNode } from "react";
import { Header } from "./components";

export const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="w-full max-w-[900px] p-12">
      <Header />
      {children}
    </main>
  );
};
