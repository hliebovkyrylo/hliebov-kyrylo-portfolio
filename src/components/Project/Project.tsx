import Image from "next/image";
import { Skill } from "./components/Skill";

export const Project = () => {
  return (
    <div className="flex gap-3 bg-slate-800 p-3 rounded-xl opacity-30 hover:opacity-100 transition duration-500 ease-in-out">
      <Image
        src={"/photo.png"}
        alt="asdf"
        width={128}
        height={128}
        className="w-32 h-32 object-cover rounded-lg"
      />
      <div>
        <p className="font-bold text-lg">Culinarybook</p>
        <p className="my-3">
          A social network for recipes that allows users to receive personalized
          recommendations based on their preferences. In this project, I am
          fully responsible for developing the frontend, backend and providing
          SEO optimization to improve the visibility of the application in
          search engines. I paid special attention to the localization of the
          application to provide support for multiple languages ​​​​for users
          from different countries.
        </p>
        <div className="flex gap-2">
          {[...Array(5)].map((_, index) => (
            <Skill key={index} name="React" />
          ))}
        </div>
      </div>
    </div>
  );
};
