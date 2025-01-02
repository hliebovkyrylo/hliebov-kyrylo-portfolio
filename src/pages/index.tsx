import { Layout } from "@/components/Layout";
import { useTheme } from "next-themes";
import { AiOutlineMoon, AiOutlineSun } from "react-icons/ai";
import Head from "next/head";
import { InfoSidebar } from "@/components/InfoSidebar";

export default function Home() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  return (
    <>
      <Head>
        <title>Kyrylo Hliebov</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="This is website with info about me :)"
        />
      </Head>
      <div className="flex justify-center inset-0 min-h-screen w-full bg-slate-900">
        <button
          onClick={toggleTheme}
          className="absolute top-4 right-8 w-6 h-6"
        >
          {theme === "dark" ? (
            <AiOutlineSun className="w-full h-full" />
          ) : (
            <AiOutlineMoon className="w-full h-full" />
          )}
        </button>
        <Layout>
          <InfoSidebar
            name="Hliebov Kyrylo"
            jobTitle="Front-End Engineer"
            description="Ya tipa eee ny da"
            instHref="https://instagram.com/xenoniiii/"
            tgHref="https://t.me/kyrylohliebov"
            linkedInHref="https://www.linkedin.com/in/kyrylo-hliebov-a5055926a/"
            gitHubHref="https://github.com/hliebovkyrylo"
            currentSection="ABOUT"
          />
          <div className="h-[100px]"></div>
        </Layout>
      </div>
    </>
  );
}
