import Link from "next/link";

interface SectionLinkProps {
  sectionName: string;
  isCurrent: boolean;
}

export const SectionLink = ({ sectionName, isCurrent }: SectionLinkProps) => {
  return (
    <div className="flex items-center gap-2">
      <div
        className={`${
          isCurrent ? "w-10 bg-white" : "w-6 bg-slate-400"
        } h-[2px] transition-all`}
      />
      <Link
        className={`block ${!isCurrent && " text-slate-400"}`}
        href={sectionName === "ABOUT" ? "/" : sectionName.toLowerCase()}
      >
        {sectionName}
      </Link>
    </div>
  );
};
