// src/components/Services.tsx
import React from "react";

const servicesData = [
  { icon: "🌐", title: "Création de Sites Web", description: "Sites vitrines, e-commerce, blogs personnalisés avec une interface utilisateur intuitive et moderne." },
  { icon: "📊", title: "Data Analysis", description: "Analyses de données avancées pour vous aider à prendre des décisions stratégiques basées sur des insights concrets." },
  { icon: "📱", title: "Expérience Utilisateur", description: "Conception de sites web intuitifs et agréables à parcourir, qui mettent en valeur votre marque et vos services." },
  { icon: "💼", title: "Consulting", description: "Accompagnement stratégique pour développer votre entreprise et améliorer son organisation interne." },
  { icon: "📈", title: "Stratégie Digitale", description: "Conseils et accompagnement pour optimiser votre présence en ligne et atteindre efficacement vos objectifs." },
  { icon: "🔄", title: "Maintenance", description: "Suivi et mises à jour régulières de votre site web pour en assurer les performances et la sécurité." },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-red-500">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Mes Services</h2>
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {servicesData.map((svc) => (
            <div
              key={svc.title}
              className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition"
            >
              <div className="text-5xl mb-4 text-primary">{svc.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{svc.title}</h3>
              <p className="text-gray-700">{svc.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
