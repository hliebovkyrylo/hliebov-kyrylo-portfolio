interface ISection {
  title: string;
  description: string;
}

export const Section = ({ title, description }: ISection) => {
  return (
    <section className="w-full flex justify-between">
      <h2 className="font-bold">{title}</h2>
      <p className="w-full max-w-[600px]">{description}</p>
    </section>
  );
};
