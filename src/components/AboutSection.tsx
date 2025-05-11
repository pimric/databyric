export default function AboutSection() {
    return (
      <section id="about" className="py-24">
        <div className="container mx-auto grid items-center gap-12 px-6 md:grid-cols-2">
          {/* Photo de toi */}
          <img
            src="/img/profile.jpg"
            alt="Ric"
            className="mx-auto w-72 rounded-2xl shadow-xl md:w-auto"
          />
  
          {/* Texte */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">Salut, moi c’est Ric 👋</h2>
  
            <p>
              Développeur web <strong>front-end React/Next.js</strong> et
              <strong> data analyst</strong> freelance. Mon kif : transformer tes
              idées (et tes chiffres) en actions concrètes qui font grimper ton
              business.
            </p>
  
            <p>
              <em>Mon credo :</em> du code propre, des dashboards clairs, et une
              communication sans jargon. Je bosse avec les
              solopreneurs & PME qui veulent un accompagnement humain – pas une
              agence impersonnelle.
            </p>
  
            <a
              href="#contact"
              className="inline-block rounded-full bg-primary px-8 py-3 font-semibold text-white transition hover:bg-secondary"
            >
              Discutons 15 min
            </a>
          </div>
        </div>
      </section>
    );
  }
  