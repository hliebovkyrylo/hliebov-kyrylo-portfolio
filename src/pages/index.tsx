import { Section } from "@/components/Section";
import { Layout } from "@/components/Layout";
import { SocialLink } from "@/components/Link";

export default function Home() {
  return (
    <div className="flex justify-center absolute inset-0 h-full w-full bg-[#0A0A0A] bg-[linear-gradient(to_right,#0F0F10_1px,transparent_1px),linear-gradient(to_bottom,#0F0F10_1px,transparent_1px)] bg-[size:24px_24px]">
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
              
              In my work, I apply the key principles of client-server architecture,
              in particular, SOLID, KISS, DRY, REST, which allow you to create flexible,
              effective and scalable solutions. I have object-oriented
              programming, I have a good understanding of API concepts and have practical experience
              developments to ensure interaction between clients and servers.
              I am constantly working on improving my skills and mastering new ones
              technologies to create products that solve real problems and are
              useful for users.
            `}
          />
          <Section
            title="Education"
            description={`
              I am a 2nd year student majoring in "Computer Engineering" at Oles Honchar Dnipro National University.
              Specialization prepares specialists to solve the following tasks, such as the development of programs on object-oriented, logical, functional
              programming languages: C, C++, C#, Java, development of web applications based on HTML, CSS, JavaScript, ASP.NET and
              others, design and development of expert and intelligent systems.
            `}
          />
          <Section
            title="Skills"
            description={`HTML5, CSS3, Scss(Sass), Tailwindcss, JavaScript, TypeScript, React, Next.js, Node JS, Express, NestJS, Fastify, Mongodb, PostgreSQL, Docker`}
          />
          <hr className="h-px bg-gray-200 border-0 dark:bg-gray-700" />
          <div className="flex gap-3">
            <SocialLink title="Telegram" url="https://t.me/xenoniiii" />
            <SocialLink title="GitHub" url="https://github.com/hliebovkyrylo" />
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
  );
}
