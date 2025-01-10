import Link from "next/link";
import { SectionLink } from "./components";
import {
  BiLogoGithub,
  BiLogoInstagram,
  BiLogoLinkedin,
  BiLogoTelegram,
} from "react-icons/bi";
import { useActiveSection } from "./hooks/useActiveSection";

interface InfoSidebarProps {
  name: string;
  description: string;
  jobTitle: string;
  instHref: string;
  tgHref: string;
  gitHubHref: string;
  linkedInHref: string;
}

export const InfoSidebar = ({
  name,
  description,
  jobTitle,
  instHref,
  tgHref,
  gitHubHref,
  linkedInHref,
}: InfoSidebarProps) => {
  const activeSection = useActiveSection();
  
  return (
    <aside className="sticky top-0 flex flex-col justify-between h-screen py-6">
      <div className="flex flex-col w-56">
        <h1 className="text-3xl font-bold">{name}</h1>
        <h2 className="text-lg">{jobTitle}</h2>
        <p className="text-base font-extralight text-slate-300">
          {description}
        </p>
      </div>
      <div className="flex gap-1 flex-col">
        <SectionLink
          sectionName="ABOUT"
          isCurrent={activeSection === "about"}
        />
        <SectionLink
          sectionName="EDUCATION"
          isCurrent={activeSection === "education"}
        />
        <SectionLink
          sectionName="PROJECTS"
          isCurrent={activeSection === "projects"}
        />
      </div>
      <div className="flex items-center gap-2">
        <Link href={gitHubHref}>{<BiLogoGithub className="w-5 h-5" />}</Link>
        <Link href={tgHref}>{<BiLogoTelegram className="w-5 h-5" />}</Link>
        <Link href={instHref}>
          <BiLogoInstagram className="w-5 h-5" />
        </Link>
        <Link href={linkedInHref}>
          <BiLogoLinkedin className="w-5 h-5" />
        </Link>
      </div>
    </aside>
  );
};
