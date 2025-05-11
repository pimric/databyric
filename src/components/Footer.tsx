import Link from "next/link";

export default function Footer() {
  const items = [
    { href: "/developpement", label: "Développement" },
    { href: "/bilan", label: "Bilan" },
    { href: "/referencement", label: "Référencement" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <footer className="bg-darkBg text-lightBg py-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="font-bold mb-4">Data By Ric</h3>
          <p>Webmaster & Data Analyst freelance.</p>
        </div>
        <div>
          <h3 className="font-bold mb-4">Liens</h3>
          <ul className="space-y-2">
            {items.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="hover:text-secondary transition"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-4">Contact</h3>
          <p>contact@databyric.fr</p>
        </div>
      </div>
      <p className="text-center text-sm mt-8">
        &copy; {new Date().getFullYear()} Data By Ric. Tous droits réservés.
      </p>
    </footer>
  );
}
