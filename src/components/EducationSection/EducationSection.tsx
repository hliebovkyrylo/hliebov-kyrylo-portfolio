interface EducationSectionProps {
  years: string;
  name: string;
  specialization: string;
  description: string;
}

export const EducationSection = ({
  years,
  name,
  specialization,
  description,
}: EducationSectionProps) => {
  return (
    <section id="education" className="w-full bg-slate-800 rounded-lg p-2">
      <p className="bg-slate-600 inline-block p-1 rounded-md text-sm">
        {years}
      </p>
      <div className="flex items-center gap-2 my-3 font-bold">
        <p>{name}</p>
        <div className="w-1 h-1 rounded-full bg-white" />
        <p>{specialization}</p>
      </div>
      <p>{description}</p>
    </section>
  );
};
