import Link from "next/link";
import { SectionLink } from "./components";
import { BiLogoGithub, BiLogoInstagram, BiLogoLinkedin, BiLogoTelegram } from "react-icons/bi";

interface InfoSidebarProps {
  name: string;
  description: string;
  jobTitle: string;
  instHref: string;
  tgHref: string;
  gitHubHref: string;
  linkedInHref: string;
  currentSection: "ABOUT" | "EDUCATION" | "PROJECTS";
}

export const InfoSidebar = ({
  name,
  description,
  jobTitle,
  instHref,
  tgHref,
  gitHubHref,
  linkedInHref,
  currentSection,
}: InfoSidebarProps) => {
  return (
    <aside className="sticky flex flex-col justify-between h-full p-5">
      <div className="flex flex-col w-56">
        <h1 className="text-3xl font-bold">{name}</h1>
        <h2 className="text-lg">{jobTitle}</h2>
        <p className="text-base font-extralight text-slate-300">{description}</p>
      </div>
      <div className="flex gap-1 flex-col">
        <SectionLink
          sectionName="ABOUT"
          isCurrent={currentSection === "ABOUT"}
        />
        <SectionLink
          sectionName="EDUCATION"
          isCurrent={currentSection === "EDUCATION"}
        />
        <SectionLink
          sectionName="PROJECTS"
          isCurrent={currentSection === "PROJECTS"}
        />
      </div>
      <div className="flex items-center gap-2">
        <Link href={gitHubHref}>{<BiLogoGithub className="w-5 h-5" />}</Link>
        <Link href={tgHref}>{<BiLogoTelegram className="w-5 h-5" />}</Link>
        <Link href={instHref}><BiLogoInstagram className="w-5 h-5" /></Link>
        <Link href={linkedInHref}><BiLogoLinkedin className="w-5 h-5" /></Link>
      </div>
    </aside>
  );
};
