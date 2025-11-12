import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Building2, Target, Eye, Heart, Users, Quote } from "lucide-react";

export default function AboutUs() {
  const teamMembers = [
    { name: "Sipho Dlamini", role: "CEO & Founder", image: "/usericon.jpg" },
    { name: "Naledi Molefe", role: "Project Manager", image: "/usericon.jpg" },
    { name: "Kgosi Mthembu", role: "Lead Engineer", image: "/usericon.jpg" },
    { name: "Zanele Dube", role: "Architect", image: "/usericon.jpg" },
  ];

  const testimonials = [
    {
      name: "Karan Mehta",
      position: "Homeowner",
      feedback: "BEENA Constructions delivered our dream home on time with impeccable quality. Highly recommended!",
    },
    {
      name: "Shivani Rao",
      position: "Business Owner",
      feedback: "Their commercial project execution was smooth and professional. Every detail was taken care of.",
    },
    {
      name: "Vikram Patil",
      position: "Industrial Client",
      feedback: "The team is highly skilled and efficient. Our industrial facility was completed beyond expectations.",
    },
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "BEENA Constructions",
    "url": "https://your-domain.com",
    "logo": "https://your-domain.com/logo.png",
    "sameAs": [],
    "description": "BEENA Constructions is a premier construction company specializing in residential, commercial, and industrial projects with a commitment to quality and innovation."
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <>
      <Helmet>
        <title>About Us | BEENA Constructions</title>
        <meta
          name="description"
          content="Learn about BEENA Constructions, our mission, vision, values, team, and client testimonials. Delivering high-quality construction projects across residential, commercial, and industrial sectors."
        />
        <link rel="canonical" href="https://your-domain.com/about-us" />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>

      <div className="min-h-screen bg-white">
        {/* Hero Section with Gradient Background */}
        <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500 rounded-full blur-3xl opacity-10"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-yellow-500 rounded-full blur-3xl opacity-10"></div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="inline-flex items-center gap-2 bg-orange-500/10 backdrop-blur-sm border border-orange-500/20 rounded-full px-5 py-2 mb-6"
              >
                <Building2 className="w-5 h-5 text-orange-400" />
                <span className="text-sm font-medium text-orange-300">Building Tomorrow, Today</span>
              </motion.div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                About <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-400">BEENA Constructions</span>
              </h1>
              
              <p className="text-lg sm:text-xl text-slate-300 leading-relaxed max-w-3xl mx-auto">
                BEENA Constructions is a leading construction company delivering innovative, sustainable, and high-quality residential, commercial, and industrial projects. Our team is dedicated to turning visions into reality with efficiency and precision.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Mission, Vision, Values Section */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-white to-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="grid md:grid-cols-3 gap-6 lg:gap-8"
            >
              {[
                {
                  icon: Target,
                  title: "Our Mission",
                  gradient: "from-orange-500 to-orange-600",
                  iconBg: "bg-orange-100",
                  iconColor: "text-orange-600",
                  content: "At BEENA Constructions, our mission is to deliver exceptional construction projects that combine innovation, quality, and sustainability. We are dedicated to transforming architectural visions into reality by leveraging advanced technology, skilled craftsmanship, and meticulous project management. We strive to exceed client expectations by delivering projects on time, within budget, and to the highest standards of safety and environmental responsibility."
                },
                {
                  icon: Eye,
                  title: "Our Vision",
                  gradient: "from-yellow-500 to-amber-600",
                  iconBg: "bg-yellow-100",
                  iconColor: "text-yellow-600",
                  content: "At BEENA Constructions, our vision is to be recognized as a leader in the construction industry, known for delivering innovative, high-quality, and sustainable projects. We aspire to set new benchmarks in design, engineering, and project execution by embracing cutting-edge technology and modern construction practices. We envision a future where every structure we build enhances the community and environment."
                },
                {
                  icon: Heart,
                  title: "Our Values",
                  gradient: "from-slate-600 to-slate-700",
                  iconBg: "bg-slate-100",
                  iconColor: "text-slate-600",
                  content: "At BEENA Constructions, our values define every decision and project we undertake. We operate with integrity, transparency, and excellence in every detail, delivering superior craftsmanship while embracing innovation and sustainable practices to meet evolving client and community needs."
                }
              ].map((item, idx) => (
                <motion.article
                  key={idx}
                  variants={itemVariants}
                  className="group relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 overflow-hidden"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                  
                  <div className="relative">
                    <div className={`${item.iconBg} w-14 h-14 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                      <item.icon className={`w-7 h-7 ${item.iconColor}`} />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-slate-900 mb-4">{item.title}</h3>
                    <p className="text-slate-600 leading-relaxed">{item.content}</p>
                  </div>
                </motion.article>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12 md:mb-16"
            >
              <div className="inline-flex items-center gap-2 bg-slate-100 rounded-full px-4 py-2 mb-4">
                <Users className="w-4 h-4 text-slate-600" />
                <span className="text-sm font-medium text-slate-600">Our Team</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">Meet Our Experts</h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Talented professionals dedicated to bringing your construction vision to life
              </p>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
            >
              {teamMembers.map((member, idx) => (
                <motion.article
                  key={idx}
                  variants={itemVariants}
                  className="group relative bg-gradient-to-b from-white to-slate-50 rounded-2xl p-6 text-center hover:shadow-xl transition-all duration-300 border border-slate-100"
                >
                  <div className="relative mb-5 inline-block">
                    <div className="w-32 h-32 rounded-full overflow-hidden ring-4 ring-slate-100 group-hover:ring-orange-200 transition-all duration-300">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        loading="lazy"
                      />
                    </div>
                    <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-gradient-to-br from-orange-400 to-yellow-500 rounded-full flex items-center justify-center shadow-lg">
                      <Building2 className="w-5 h-5 text-white" />
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-slate-900 mb-1">{member.name}</h3>
                  <p className="text-slate-600 font-medium">{member.role}</p>
                </motion.article>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-slate-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12 md:mb-16"
            >
              <div className="inline-flex items-center gap-2 bg-slate-100 rounded-full px-4 py-2 mb-4">
                <Quote className="w-4 h-4 text-slate-600" />
                <span className="text-sm font-medium text-slate-600">Testimonials</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">What Our Clients Say</h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Real feedback from clients who trusted us with their projects
              </p>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="grid md:grid-cols-3 gap-6 lg:gap-8"
            >
              {testimonials.map((testimonial, idx) => (
                <motion.article
                  key={idx}
                  variants={itemVariants}
                  className="relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100"
                >
                  <div className="absolute top-6 right-6 w-12 h-12 bg-gradient-to-br from-orange-100 to-yellow-100 rounded-full flex items-center justify-center">
                    <Quote className="w-6 h-6 text-orange-500" />
                  </div>
                  
                  <div className="mb-6">
                    <p className="text-slate-700 leading-relaxed italic">"{testimonial.feedback}"</p>
                  </div>
                  
                  <div className="flex items-center gap-4 pt-6 border-t border-slate-100">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-400 to-yellow-500 flex items-center justify-center text-white font-bold text-lg shadow-md">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900">{testimonial.name}</h4>
                      <p className="text-sm text-slate-600">{testimonial.position}</p>
                    </div>
                  </div>
                </motion.article>
              ))}
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-500 rounded-full blur-3xl opacity-20"></div>
          
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                Ready to Start Your Project?
              </h2>
              <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
                Let's discuss how we can bring your construction vision to life with quality and precision
              </p>
              <button className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300">
                Get in Touch
              </button>
            </motion.div>
          </div>
        </section>
      </div>

      <style>{`
        .bg-grid-pattern {
          background-image: 
            linear-gradient(to right, rgba(255, 255, 255, 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 1px, transparent 1px);
          background-size: 40px 40px;
        }
      `}</style>
    </>
  );
}