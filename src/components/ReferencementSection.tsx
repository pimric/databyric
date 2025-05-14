export default function ReferencementSection() {
 return (
<section
id="referencement"
className="bg-section-seo text-white py-32 px-6 space-y-24 scroll-mt-8"
>
{/* Accroche */}
<div className="text-center space-y-6 max-w-3xl mx-auto">
<h1 className="text-4xl font-bold">
 Donne à ton site la visibilité qu&apos;il mérite.
</h1>
<p className="text-lg text-white/80">
 Le plus beau site du monde ne sert à rien s&apos;il est invisible. Découvre mon approche SEO et optimisation.
</p>
</div>
{/* Pourquoi le SEO */}
<div className="space-y-6 max-w-3xl mx-auto">
<h2 className="text-3xl font-bold">Pourquoi optimiser ton référencement ?</h2>
<p>
 Chaque jour sans SEO est une opportunité manquée. Être bien référencé, c&apos;est être visible pour ceux qui te cherchent.
</p>
</div>
{/* Comment je travaille */}
<div className="space-y-12 max-w-6xl mx-auto">
<h2 className="text-3xl font-bold text-center">Comment je travaille</h2>
<div className="grid md:grid-cols-3 gap-8">
<div className="rounded-xl bg-white/10 p-6 shadow-md backdrop-blur">
<h3 className="text-xl font-semibold mb-4">Audit SEO</h3>
<p>
 J&apos;analyse la structure technique, la vitesse, les mots-clés stratégiques et les erreurs critiques.
</p>
</div>
<div className="rounded-xl bg-white/10 p-6 shadow-md backdrop-blur">
<h3 className="text-xl font-semibold mb-4">Exemples de succès</h3>
<p>
 Exemple : [NomClient] est passé de la 5ᵉ à la 1ʳᵉ page Google en 4 mois.
</p>
</div>
<div className="rounded-xl bg-white/10 p-6 shadow-md backdrop-blur">
<h3 className="text-xl font-semibold mb-4">Ce que tu gagnes</h3>
<p>
 Plus de visiteurs qualifiés, plus d&apos;opportunités, plus de croissance.
</p>
</div>
</div>
</div>
</section>
 );
 }