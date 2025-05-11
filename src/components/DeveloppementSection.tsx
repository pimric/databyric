export default function DeveloppementSection() {
    return (
      <section
        id="developpement"
        className="bg-section-dev text-white py-32 px-6 space-y-24 scroll-mt-8"
      >
        {/* 1. Accroche */}
        <div className="text-center space-y-6 max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold leading-tight">
            Développons ensemble un site qui te ressemble vraiment.
          </h1>
          <p className="text-lg text-white/80">
            Un site rapide, clair, sur-mesure — pas un template cloné. Découvre ma méthode.
          </p>
        </div>
  
        {/* 2. Pourquoi sur-mesure */}
        <div className="space-y-6 max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold">Pourquoi créer un site sur-mesure ?</h2>
          <p>
            Ton site est ta vitrine principale. Il doit être unique, performant et pensé pour tes visiteurs — pas pour ressembler aux autres.
          </p>
        </div>
  
        {/* 3. Méthode */}
        <div className="space-y-12 max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center">Comment je travaille</h2>
  
          <div className="grid md:grid-cols-3 gap-8">
            <div className="rounded-xl bg-white/10 p-6 shadow-md backdrop-blur">
              <h3 className="text-xl font-semibold mb-4">Processus clair</h3>
              <p>
                Analyse des besoins, design personnalisé, développement propre, SEO friendly dès le départ.
              </p>
            </div>
  
            <div className="rounded-xl bg-white/10 p-6 shadow-md backdrop-blur">
              <h3 className="text-xl font-semibold mb-4">Belle réalisation</h3>
              <p>
                Exemple : [ProjetClient] a doublé ses leads grâce à un site rapide et bien structuré.
              </p>
            </div>
  
            <div className="rounded-xl bg-white/10 p-6 shadow-md backdrop-blur">
              <h3 className="text-xl font-semibold mb-4">Ce que tu gagnes</h3>
              <p>
                Plus de visiteurs, plus de confiance, plus d’opportunités commerciales.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
  