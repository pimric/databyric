export default function BilanSection() {
    return (
      <section
        id="bilan"
        className="bg-section-bilan text-white py-32 px-6 space-y-24 scroll-mt-8"
      >
        {/* Accroche */}
        <div className="text-center space-y-6 max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold">
            Ton site mérite mieux qu'un vague bilan : il mérite un vrai diagnostic.
          </h1>
          <p className="text-lg text-white/80">
            Découvre comment je t’aide à identifier ce qui freine ta visibilité et à trouver des solutions concrètes.
          </p>
        </div>
  
        {/* Pourquoi faire un bilan */}
        <div className="space-y-6 max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold">Pourquoi faire un bilan ?</h2>
          <p>
            Trop de sites web sont lents, mal référencés ou incompris par leurs utilisateurs. Un bilan te permet de faire le point avant d’investir à l’aveugle dans des améliorations.
          </p>
        </div>
  
        {/* Comment je travaille */}
        <div className="space-y-12 max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center">Comment je travaille</h2>
  
          <div className="grid md:grid-cols-3 gap-8">
            <div className="rounded-xl bg-white/10 p-6 shadow-md backdrop-blur">
              <h3 className="text-xl font-semibold mb-4">Exemple théorique</h3>
              <p>
                J'analyse la vitesse de ton site, le SEO technique, l’expérience utilisateur et la cohérence des contenus.
              </p>
            </div>
  
            <div className="rounded-xl bg-white/10 p-6 shadow-md backdrop-blur">
              <h3 className="text-xl font-semibold mb-4">Belle réalisation</h3>
              <p>
                Exemple concret : j’ai aidé [NomClient] à augmenter son trafic organique de 70% en 3 mois grâce à un bilan précis.
              </p>
            </div>
  
            <div className="rounded-xl bg-white/10 p-6 shadow-md backdrop-blur">
              <h3 className="text-xl font-semibold mb-4">Ce que tu gagnes</h3>
              <p>
                Un plan d'action clair, des priorités ciblées, et l’assurance de dépenser ton budget intelligemment.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
  