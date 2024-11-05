import { Section } from "@/components/Section";
import { Layout } from "@/components/Layout";
import { SocialLink } from "@/components/Link";
import { useTheme } from "next-themes";
import { AiOutlineMoon, AiOutlineSun } from "react-icons/ai";
import Head from "next/head";

export default function Home() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  return (
    <>
      <Head>
        <title>Kyrylo Hliebov Info</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="This is website with info about me :)" />
      </Head>
      <div className="flex justify-center inset-0 min-h-screen w-full dark:bg-[#0A0A0A] bg-white bg-[linear-gradient(to_right,#F1F1F1_1px,transparent_1px),linear-gradient(to_bottom,#F1F1F1_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#0F0F10_1px,transparent_1px),linear-gradient(to_bottom,#0F0F10_1px,transparent_1px)] bg-[size:24px_24px]">
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
          <div className="flex flex-col gap-6">
            <Section
              title="About me"
              description={`I, Kyrylo Hlebov, a 2nd-year student at the Dnipro National University
              Oles Honchar University, where I am studying for a specialty
              "Computer engineering" (specialty code — 123). I am 18 years old, and since the fall
              In 2022, I am actively engaged in web application development, all the time
              expanding your skills and deepening your industry knowledge
              programming.
              
              In development, I adhere to the principles of clean code (SOLID, KISS, DRY) and use modern architectural approaches, including REST API and client-server architecture. This allows for scalable and easily maintainable solutions to build products that solve real user problems.
            `}
            />
            <Section
              title="Education"
              description={`I am a 2nd year student majoring in "Computer Engineering" at Oles Honchar Dnipro National University.
              Specialization prepares specialists to solve the following tasks, such as the development of programs on object-oriented, logical, functional
              programming languages: C, C++, C#, Java, development of web applications based on HTML, CSS, JavaScript, ASP.NET and
              others, design and development of expert and intelligent systems.
            `}
            />
            <Section
              title="Skills"
              description={`HTML5, CSS3, Scss(Sass), Tailwindcss, JavaScript, TypeScript, React, Next.js, Node JS, Express, NestJS, Fastify, Mongodb, PostgreSQL, Docker, Redux, Redux toolkit, TanStack Query`}
            />
            <hr className="h-px bg-slate-400 border-0 dark:bg-gray-700" />
            <div className="flex flex-col mb-6 sm:mb-0 sm:flex-row gap-3">
              <SocialLink title="Telegram" url="https://t.me/xenoniiii" />
              <SocialLink
                title="GitHub"
                url="https://github.com/hliebovkyrylo"
              />
              <SocialLink
                title="Linkedin"
                url="https://www.linkedin.com/in/kyrylo-hliebov-a5055926a/"
              />
              <SocialLink
                title="Instagram"
                url="https://www.instagram.com/xenoniiii/"
              />
            </div>
          </div>
        </Layout>
      </div>
    </>
  );
}
