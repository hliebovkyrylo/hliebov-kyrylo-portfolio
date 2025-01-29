import { Education } from "@/components/Education";
import { Layout } from "@/components/Layout";
import { Project } from "@/components/Project";
import { api } from "@/lib/api/api";
import { endpoints } from "@/lib/api/endpoints";
import { useQuery } from "@tanstack/react-query";
import Head from "next/head";

export default function Home() {
  const { data: user, isLoading: isLoadingUser } = useQuery({
    queryKey: [endpoints.getUser()],
    queryFn: () => api.getUser(),
    select: (data) => data.data.data,
  });

  const { data: educations, isLoading: isLoadingEducations } = useQuery({
    queryKey: [endpoints.getAllEducations()],
    queryFn: () => api.getAllEducations(),
    select: (data) => data.data.data,
  });

  const { data: projects, isLoading: isLoadingProjects } = useQuery({
    queryKey: [endpoints.getAllProjects()],
    queryFn: () => api.getAllProjects(),
    select: (data) => data.data.data,
  });

  if (isLoadingUser || isLoadingEducations || isLoadingProjects)
    return <div>Loading...</div>;

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
        <section id="about">{user?.description}</section>
        <section id="education">
          <div className="flex items-center gap-2 my-8">
            <span>EDUCATION</span>
            <div className="h-[1px] w-full bg-gray-700"></div>
          </div>
          {educations?.map((education, i) => (
            <Education
              key={i}
              years={education.years}
              name={education.name}
              specialization={education.specialization}
              description={education.description}
            />
          ))}
        </section>
        <section id="projects">
          <div className="flex items-center gap-2 my-8">
            <span>PROJECTS</span>
            <div className="h-[1px] w-full bg-gray-700"></div>
          </div>
          <div
            className="flex flex-col gap-3"
            data-section="projects"
            id="projects"
          >
            {projects?.map((project, i) => (
              <Project key={i} project={project} />
            ))}
          </div>
        </section>
      </Layout>
    </>
  );
}
