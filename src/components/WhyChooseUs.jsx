import { Helmet } from "react-helmet-async";
import { CheckCircleIcon } from "@heroicons/react/24/solid"; // heroicons for simple icons

export default function WhyChooseUs() {
  const usps = [
    {
      title: "Experienced Team",
      description:
        "Our team of skilled engineers, architects, and builders bring years of experience to every project.",
    },
    {
      title: "Timely Delivery",
      description:
        "We respect your time. Projects are completed efficiently without compromising quality.",
    },
    {
      title: "Quality Materials",
      description:
        "We use only premium construction materials, ensuring durability and excellence in every build.",
    },
    {
      title: "Customer Satisfaction",
      description:
        "Your happiness is our priority. We deliver projects that meet your vision and expectations.",
    },
  ];

  return (
    <section className="bg-gray-50 py-20">
      <Helmet>
        <title>Why Choose Us | BEENA CONSTRUCTION</title>
        <meta
          name="description"
          content="BuildRight Construction delivers quality infrastructure with an experienced team, timely delivery, premium materials, and customer satisfaction."
        />
      </Helmet>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 px-6">
        {/* Left Image */}
        <div className="md:w-1/2 w-full">
          <img
            src="https://c0.wallpaperflare.com/preview/677/43/705/construction-site-building-building-construction-working.jpg" 
            alt="Construction Site"
            className="rounded-lg shadow-lg w-full h-auto object-cover"
          />
        </div>

        {/* Right Content */}
        <div className="md:w-1/2 w-full">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
            Why Choose Beena Construction
          </h2>
          <p className="text-gray-700 mb-8">
            At beena construction , we are committed to delivering excellence in every project. 
            From residential to commercial constructions, our approach ensures efficiency, quality, and client satisfaction.
          </p>

          {/* USP List */}
          <div className="space-y-6">
            {usps.map((item, index) => (
              <div key={index} className="flex items-start gap-4">
                <CheckCircleIcon className="w-8 h-8 text-blue-600 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
