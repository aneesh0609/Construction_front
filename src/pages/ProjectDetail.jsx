import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import API from "../api"; // Axios instance

export default function ProjectDetail() {
  const { slug } = useParams();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const { data } = await API.get(`/projects/${slug}`);
        if (data.success) setProject(data.project);
      } catch (error) {
        console.error("Error fetching project:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProject();
  }, [slug]);

  if (loading)
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-gray-700 text-lg">Loading project...</p>
      </div>
    );

  if (!project)
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-gray-700 text-lg">Project not found.</p>
      </div>
    );

  // Structured JSON-LD for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Project",
    "name": project.title,
    "description": project.description,
    "url": `https://your-domain.com/projects/${project.slug}`,
    "image": project.images || [],
    "location": project.location || "",
    "category": project.category || "",
  };

  return (
    <>
      <Helmet>
        <title>{project.title} | BuildRight Construction</title>
        <meta name="description" content={project.description} />
        <meta name="keywords" content={`${project.title}, construction, project`} />
        <link rel="canonical" href={`https://your-domain.com/projects/${project.slug}`} />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>

      <main className="max-w-7xl mx-auto p-6">
        {/* Back to Projects */}
        <div className="mb-6">
          <Link
            to="/projects"
            className="text-blue-600 hover:underline font-medium"
          >
            &larr; Back to Projects
          </Link>
        </div>

        {/* Project Title and Info */}
        <h1 className="text-4xl md:text-5xl font-bold mb-4">{project.title}</h1>
        <p className="text-gray-600 mb-2">{project.category}</p>
        <p className="text-gray-500 mb-6">{project.location}</p>

        {/* Project Images */}
        {project.images && project.images.length > 0 && (
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 mb-6">
            {project.images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`${project.title} image ${index + 1}`}
                loading="lazy"
                className="w-full h-56 object-cover rounded-lg shadow"
              />
            ))}
          </div>
        )}

        {/* Project Description */}
        <section className="text-gray-800 text-lg leading-relaxed">
          <p>{project.description}</p>
        </section>
      </main>
    </>
  );
}
