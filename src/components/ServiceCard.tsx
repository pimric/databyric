import Link from "next/link";

export default function ServiceCard({
  icon,
  title,
  desc,
  href,
}: {
  icon: JSX.Element;
  title: string;
  desc: string;
  href: string;
}) {
  return (
    <article className="group rounded-2xl bg-white p-10 shadow-lg transition hover:-translate-y-2 hover:shadow-xl">
      <div className="mb-6 text-primary">{icon}</div>
      <h3 className="mb-4 text-xl font-bold group-hover:text-primary">
        {title}
      </h3>
      <p className="mb-8 text-gray-600">{desc}</p>

      <Link
        href={href}
        className="inline-block rounded-full border-2 border-primary px-6 py-2 font-semibold text-primary transition hover:bg-primary hover:text-white"
      >
        Découvrir
      </Link>
    </article>
  );
}
