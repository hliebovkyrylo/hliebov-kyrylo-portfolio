import Image from "next/image";

export const Header = () => {
  return (
    <header className="flex items-center justify-between mb-6">
      <div>
        <h1 className="text-2xl font-bold">Kyrylo Hliebov</h1>
        <div>Full-stack developer</div>
      </div>
      <Image
        src={"/photo.png"}
        alt="Kyrylo Hliebov image"
        className="w-24 rounded-3xl"
        width={96}
        height={96}
      />
    </header>
  );
};
