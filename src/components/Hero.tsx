import Link from "next/link";

export default function Hero() {
  return (
    <section className="flex items-center justify-center min-h-[80vh] w-full bg-white px-6">
      <div className="text-center max-w-2xl space-y-8">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
          Solutions digitales innovantes <br className="hidden md:block" />
          pour votre réussite
        </h1>

        <p className="text-lg md:text-xl text-gray-700">
          Webmaster et Data&nbsp;Analyst freelance, je conçois des sites&nbsp;web épurés
          et développe des analyses de données personnalisées pour répondre
          à vos besoins spécifiques.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="#contact"
            className="rounded-full bg-primary px-8 py-3 font-semibold text-white transition hover:bg-secondary"
          >
            Démarrer un projet
          </Link>
          <Link
            href="#services"
            className="rounded-full border-2 border-primary px-8 py-3 font-semibold text-primary transition hover:bg-primary hover:text-white"
          >
            Découvrir mes services
          </Link>
        </div>
      </div>
    </section>
  );
}
