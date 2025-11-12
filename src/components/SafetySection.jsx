import { Helmet } from "react-helmet-async";

export default function SafetySection() {
  const safetyMeasures = [
    {
      title: "Trained Workforce",
      descriptionPoints: [
        "All staff undergo rigorous safety training.",
        "Certified professionals for every role on-site.",
        "Continuous education on safety updates and procedures.",
      ],
      image: "https://img.freepik.com/free-photo/all-black-team-engineers-comparing-solar-panels-designs-laptop_482257-125792.jpg?semt=ais_hybrid&w=740&q=80",
    },
    {
      title: "Protective Gear",
      descriptionPoints: [
        "High-quality helmets, gloves, boots, and vests for all workers.",
        "Regularly inspected and replaced gear.",
        "Safety equipment tailored to specific site risks.",
      ],
      image: "https://img.freepik.com/free-photo/front-view-protective-glasses-with-hard-hat-headphones_23-2148773471.jpg?semt=ais_hybrid&w=740&q=80",
    },
    {
      title: "Regular Inspections",
      descriptionPoints: [
        "Daily site safety inspections to prevent accidents.",
        "Risk assessments and hazard identifications conducted routinely.",
        "Immediate corrective actions for any safety violations.",
      ],
      image: "https://img.freepik.com/premium-photo/building-construction-industry_35752-9622.jpg?semt=ais_hybrid&w=740&q=80",
    },
    {
      title: "Emergency Preparedness",
      descriptionPoints: [
        "Well-defined emergency response protocols.",
        "Regular drills for fire, medical, and site accidents.",
        "On-site emergency kits and first-aid stations.",
      ],
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAWDc80Y0t2S80Ukmpb-1JE_cQyfGjXhdgt6uBhYf7QAIa1VbvjuPWETRAFdL8LZ1pqow&usqp=CAU",
    },
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "Construction Safety Measures",
    "description": "Our construction company ensures site safety with trained staff, protective gear, regular inspections, and emergency preparedness.",
    "step": safetyMeasures.map((item, index) => ({
      "@type": "HowToStep",
      "name": item.title,
      "url": `#safety-${index}`,
      "itemListElement": item.descriptionPoints.map((point) => ({
        "@type": "HowToDirection",
        "text": point
      }))
    }))
  };

  return (
    <section className="py-16 bg-gray-50" aria-labelledby="safety-section">
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>

      <div className="max-w-7xl mx-auto px-6">
        <h2 id="safety-section" className="text-4xl font-bold text-center mb-12">
          Our Commitment to Safety
        </h2>
        <div className="grid gap-12 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {safetyMeasures.map((item, index) => (
            <article
              key={index}
              id={`safety-${index}`}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition"
            >
            
              <div className="w-full h-48 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>

           
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-4">{item.title}</h3>
                <ul className="text-gray-700 list-disc list-inside space-y-2">
                  {item.descriptionPoints.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
