import Link from "next/link";

interface ISocialLink {
  title: string;
  url: string;
}

export const SocialLink = ({ title, url }: ISocialLink) => {
  return (
    <Link href={url} className="hover:text-cyan-600">
      {title}
    </Link>
  );
};
