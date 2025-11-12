export default function OwnersSection() {
  const owners = [
    {
      name: "Isaiah Bless Koomson",
      role: "Founder & CEO",
      image: "/usericon.jpg",
      bio: "Over 20 years of experience in residential and commercial construction.",
     
    },
    {
      name: "Thandi Nkosi",
      role: "Co-Founder & Managing Director",
      image: "/usericon.jpg",
      bio: "Expert in project management and infrastructure planning.",
    
    },
    {
      name: "Lerato Khumalo",
      role: "Chief Technical Officer",
      image: "/usericon.jpg",
      bio: "Specializes in innovative construction technologies and design.",
    
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <h2 className="text-4xl font-bold text-center mb-12">Meet Our Owners</h2>
      <div className="max-w-6xl mx-auto grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {owners.map((owner, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow hover:shadow-lg transition p-6 text-center"
          >
            <img
              src={owner.image}
              alt={owner.name}
              className="w-32 h-32 mx-auto rounded-full object-cover mb-4"
            />
            <h3 className="text-xl font-semibold">{owner.name}</h3>
            <p className="text-blue-600 font-medium mb-2">{owner.role}</p>
            <p className="text-gray-600 mb-4">{owner.bio}</p>
           
          </div>
        ))}
      </div>
    </section>
  );
}
