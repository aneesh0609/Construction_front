import React, { useState, useEffect } from "react";
import {
  MapPin,
  Clock,
  DollarSign,
  Search,
  X,
  CheckCircle,
  Loader2,
} from "lucide-react";
import API from "../api";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import WhyChooseUs from "../components/CarrerChoose";

export default function CareerPage() {
  const [jobs, setJobs] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedJob, setSelectedJob] = useState(null);
  const [showApplicationForm, setShowApplicationForm] = useState(false);
  const [applicationSubmitted, setApplicationSubmitted] = useState(false);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    location: "",
    experience: "",
    coverLetter: "",
    resume: null,
  });

  /* -------------------------
     Fetch Jobs from Backend
  -------------------------- */
  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await API.get("/jobs/all");
        if (res.data.success) setJobs(res.data.jobs);
        else toast.error("Failed to load jobs");
      } catch {
        toast.error("Unable to fetch job listings");
      } finally {
        setLoading(false);
      }
    };
    fetchJobs();
    document.title = "Careers - Join Our Construction Team | Build Your Future";
  }, []);

  /* -------------------------
     Filter Logic
  -------------------------- */
  const filteredJobs = jobs.filter((job) =>
    [job.title, job.location].some((f) =>
      f?.toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  /* -------------------------
     Form Handling
  -------------------------- */
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((p) => ({ ...p, [name]: value }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    if (file.size > 500 * 1024) {
      toast.error("File size should not exceed 500 KB");
      return;
    }

    const allowedTypes = [
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ];
    if (!allowedTypes.includes(file.type)) {
      toast.error("Only PDF, DOC, or DOCX files are allowed");
      return;
    }

    setFormData((p) => ({ ...p, resume: file }));
  };

  /* -------------------------
     Submit Application
  -------------------------- */
  const handleSubmitApplication = async () => {
    const { fullName, email, phone, location, experience, coverLetter, resume } =
      formData;

    if (
      !fullName ||
      !email ||
      !phone ||
      !location ||
      !experience ||
      !coverLetter ||
      !resume
    ) {
      toast.error("Please fill in all required fields");
      return;
    }

    setSubmitting(true);
    try {
      const data = new FormData();
      Object.entries(formData).forEach(([key, val]) => data.append(key, val));
      data.append("jobTitle", selectedJob?.title);

      const res = await API.post("/careers/apply", data, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      if (res.data.success) {
        toast.success("Application submitted successfully!");
        setApplicationSubmitted(true);
        setTimeout(() => {
          setShowApplicationForm(false);
          setApplicationSubmitted(false);
          setFormData({
            fullName: "",
            email: "",
            phone: "",
            location: "",
            experience: "",
            coverLetter: "",
            resume: null,
          });
        }, 1800);
      } else toast.error(res.data.message || "Failed to submit application");
    } catch (err) {
      toast.error(
        err.response?.data?.message || "Server error. Please try again."
      );
    } finally {
      setSubmitting(false);
    }
  };

  const openApplication = (job) => {
    setSelectedJob(job);
    setShowApplicationForm(true);
  };

  /* -------------------------
     UI Section
  -------------------------- */
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-orange-50 to-slate-100">
      {/* 🧭 Hero Section */}
      <section className="relative bg-gradient-to-r from-slate-900 via-orange-900 to-slate-900 text-white py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Build Your <span className="text-orange-400">Career</span> With Us
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto">
            Join a team that's shaping skylines and building the future.
          </p>
        </div>
      </section>

      <WhyChooseUs />

      {/* 🔍 Job Search */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-6 text-center">
            Open Positions
          </h2>

          <div className="mb-8 flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400"
                size={20}
              />
              <input
                type="text"
                placeholder="Search by job title or location..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-xl border-2 border-slate-200 focus:border-orange-500 focus:outline-none text-slate-900"
              />
            </div>
          </div>

          {/* 🔄 Loading State */}
          {loading ? (
            <div className="flex flex-col items-center py-20 text-slate-600">
              <Loader2 className="animate-spin mb-3 text-orange-500" size={32} />
              Loading jobs...
            </div>
          ) : filteredJobs.length === 0 ? (
            <p className="text-center text-slate-500 py-20 text-lg">
              No positions found matching your search.
            </p>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredJobs.map((job) => (
                <div
                  key={job._id}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl border border-orange-100 hover:border-orange-200 transition-all h-[420px] flex flex-col justify-between"
                >
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-1">
                      {job.title}
                    </h3>
                    <div className="flex flex-wrap gap-3 text-sm text-slate-600 mb-3">
                      <span className="flex items-center gap-1">
                        <MapPin size={16} className="text-orange-500" />
                        {job.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock size={16} className="text-orange-500" />
                        {job.type}
                      </span>
                      {job.salary && (
                        <span className="flex items-center gap-1">
                          <DollarSign size={16} className="text-orange-500" />
                          {job.salary}
                        </span>
                      )}
                    </div>
                    <p className="text-slate-600 text-sm leading-relaxed line-clamp-4">
                      {job.description}
                    </p>
                  </div>
                  <button
                    onClick={() => openApplication(job)}
                    className="w-full mt-5 bg-gradient-to-r from-orange-500 to-orange-600 text-white py-3 rounded-xl font-semibold hover:from-orange-600 hover:to-orange-700 transition-all"
                  >
                    Apply Now
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* 📄 Application Modal */}
      {showApplicationForm && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4 overflow-y-auto">
          <div className="bg-white rounded-2xl max-w-lg w-full my-8 shadow-2xl">
            {/* Header */}
            <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white p-4 rounded-t-2xl flex justify-between items-center">
              <div>
                <h3 className="text-lg sm:text-xl font-bold">
                  Apply for Position
                </h3>
                <p className="text-orange-100 text-xs sm:text-sm">
                  {selectedJob?.title}
                </p>
              </div>
              <button
                onClick={() => setShowApplicationForm(false)}
                className="p-1 hover:bg-white/20 rounded-md transition"
              >
                <X size={20} />
              </button>
            </div>

            {/* Form or Success Message */}
            {applicationSubmitted ? (
              <div className="p-8 sm:p-10 text-center">
                <CheckCircle size={56} className="mx-auto text-green-500 mb-4" />
                <h4 className="text-xl font-bold text-slate-900">
                  Application Submitted!
                </h4>
                <p className="text-slate-600 mt-1 text-sm">
                  Thank you for applying. We'll reach out soon.
                </p>
              </div>
            ) : (
              <div className="p-4 sm:p-6 space-y-3 sm:space-y-4">
                <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
                  {["fullName", "email", "phone", "location"].map((field) => (
                    <div key={field}>
                      <label className="block text-xs sm:text-sm font-semibold mb-1 capitalize">
                        {field.replace(/([A-Z])/g, " $1")} *
                      </label>
                      <input
                        type={field === "email" ? "email" : "text"}
                        name={field}
                        value={formData[field]}
                        onChange={handleInputChange}
                        disabled={submitting}
                        className="w-full px-3 py-2 sm:py-2.5 rounded-lg border-2 border-slate-200 focus:border-orange-500 focus:outline-none text-sm"
                      />
                    </div>
                  ))}
                </div>

                <div>
                  <label className="block text-xs sm:text-sm font-semibold mb-1">
                    Experience *
                  </label>
                  <select
                    name="experience"
                    value={formData.experience}
                    onChange={handleInputChange}
                    disabled={submitting}
                    className="w-full px-3 py-2 sm:py-2.5 rounded-lg border-2 border-slate-200 focus:border-orange-500 focus:outline-none text-sm"
                  >
                    <option value="">Select experience</option>
                    <option value="0-2">0-2 years</option>
                    <option value="3-5">3-5 years</option>
                    <option value="6-10">6-10 years</option>
                    <option value="10+">10+ years</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs sm:text-sm font-semibold mb-1">
                    Cover Letter *
                  </label>
                  <textarea
                    name="coverLetter"
                    value={formData.coverLetter}
                    onChange={handleInputChange}
                    rows="2"
                    disabled={submitting}
                    className="w-full px-3 py-2 sm:py-2.5 rounded-lg border-2 border-slate-200 focus:border-orange-500 focus:outline-none text-sm resize-none"
                  ></textarea>
                </div>

                <div>
                  <label className="block text-xs sm:text-sm font-semibold mb-1">
                    Upload Resume *
                  </label>
                  <input
                    type="file"
                    onChange={handleFileChange}
                    accept=".pdf,.doc,.docx"
                    disabled={submitting}
                    className="w-full text-xs sm:text-sm text-slate-600"
                  />
                </div>

                <button
                  onClick={handleSubmitApplication}
                  disabled={submitting}
                  className={`w-full py-2.5 sm:py-3 rounded-lg font-semibold text-white transition-all flex justify-center items-center gap-2 ${
                    submitting
                      ? "bg-orange-400 cursor-not-allowed"
                      : "bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700"
                  }`}
                >
                  {submitting ? (
                    <>
                      <Loader2
                        className="animate-spin text-white"
                        size={16}
                      />{" "}
                      Submitting...
                    </>
                  ) : (
                    "Submit Application"
                  )}
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      <ToastContainer position="top-right" autoClose={2500} />
    </div>
  );
}
