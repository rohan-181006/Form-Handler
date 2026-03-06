import { useState} from "react";
import axios from "axios";


export default function Submission() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("idle");;



  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (status === "submitting") return;
    setStatus("submitting");

    try {
      const response = await axios.post("http://localhost:4000/api/v1/post/create", formData);
      console.log("Form submitted successfully:", response.data);

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });

    } catch (error) {
      console.error("Error submitting form:", error);
      setStatus("error");
    }

  };

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-100 to-slate-300 flex items-center justify-center p-6">
      <div className="w-full max-w-2xl bg-white shadow-xl rounded-2xl p-8">
        <h2 className="text-3xl font-bold mb-6 text-center">Form Submission</h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block mb-2 font-medium">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">Subject</label>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              required
              className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
            ></textarea>
          </div>

          {status === "submitted" && (
            <p className="text-green-600 text-center">Form submitted successfully!</p>
          )}

          {status === "error" && (
            <p className="text-red-600 text-center">Error submitting form.</p>
          )}

          <button
            type="submit"
            className="w-full bg-black text-white py-3 rounded-xl transition
           hover:opacity-90
           disabled:bg-gray-400 disabled:opacity-60 disabled:cursor-not-allowed"
            disabled=
            {status === "submitting" ||
              !formData.name ||
              !formData.email ||
              !formData.subject ||
              !formData.message}
          >
            {status === "submitting" ? "Submitting..." : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
}
