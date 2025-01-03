import { EducationSection } from "@/components/EducationSection";
import { Layout } from "@/components/Layout";
import Head from "next/head";

export default function Home() {
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
      <Layout>
        <section id="about">
          I, Kyrylo Hlebov, a 2nd-year student at the Dnipro National University
          Oles Honchar University, where I am studying for a specialty "Computer
          engineering" (specialty code — 123). I am 18 years old, and since the
          fall In 2022, I am actively engaged in web application development,
          all the time expanding your skills and deepening your industry
          knowledge programming. In development, I adhere to the principles of
          clean code (SOLID, KISS, DRY) and use modern architectural approaches,
          including REST API and client-server architecture. This allows for
          scalable and easily maintainable solutions to build products that
          solve real user problems.
        </section>
        <hr className="h-px my-8 border-0 bg-gray-700" />
        <EducationSection
          years="2023-2027"
          name="Oles Honchar Dnipro National University"
          specialization="Computer engineering"
          description="Specialization prepares specialists to solve the following tasks, such
            as the development of programs on object-oriented, logical, functional
            programming languages: C, C++, C#, Java, development of web applications
            based on HTML, CSS, JavaScript, ASP.NET and others, design and
            development of expert and intelligent systems."
        />
        <hr className="h-px my-8 border-0 bg-gray-700" />
      </Layout>
    </>
  );
}
