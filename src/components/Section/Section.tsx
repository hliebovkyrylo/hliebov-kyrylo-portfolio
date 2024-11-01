interface ISection {
  title: string;
  description: string;
}

export const Section = ({ title, description }: ISection) => {
  return (
    <section className="w-full flex flex-col md:flex-row justify-between">
      <h2 className="font-bold mb-2  md:mb-0">{title}</h2>
      <p className="w-full max-w-[600px]">{description}</p>
    </section>
  );
};
