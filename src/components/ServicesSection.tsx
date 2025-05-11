import {
    FiCode,
    FiBarChart2,
    FiRefreshCw,
  } from "react-icons/fi";
  import ServiceCard from "./ServiceCard";
  
  export default function ServicesSection() {
    const services = [
      {
        icon: <FiCode size={48} />,
        title: "🚀  Un site qui te ressemble",
        desc:
          "Je conçois et je code un site unique, rapide et joli — pas un template cloné.",
        href: "/services/conception",
      },
      {
        icon: <FiBarChart2 size={48} />,
        title: "📊  Tes chiffres, mais parlants",
        desc:
          "Dashboards simples + recos concrètes. Tu décides sur du solide, pas au pif.",
        href: "/services/data",
      },
      {
        icon: <FiRefreshCw size={48} />,
        title: "🔄  Je reste dans la boucle",
        desc:
          "Màj, SEO, perf : ton site évolue avec toi. Zéro stress côté technique.",
        href: "/services/croissance",
      },
    ];
  
    return (
      <section id="services" className="bg-lightBg py-24">
        <div className="container mx-auto px-6">
          <h2 className="mb-16 text-center text-3xl font-bold">
            Comment je t’accompagne
          </h2>
  
          <div className="grid gap-12 md:grid-cols-3">
            {services.map(({ icon, title, desc, href }) => (
              <ServiceCard
                key={title}
                icon={icon}
                title={title}
                desc={desc}
                href={href}
              />
            ))}
          </div>
        </div>
      </section>
    );
  }
  