import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState("idle");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("submitting");

    try {
      const response = await axios.post(
        "http://localhost:4000/api/v1/user/login",
        { email, password }
      );

      localStorage.setItem("token", response.data.token);

      setStatus("success");
      await new Promise((resolve) => setTimeout(resolve, 3000)); 

      // alert("Login successful!");
      navigate("/read"); 


      setEmail("");
      setPassword("");
      

    } catch (error) {
      // console.error("Login failed:", error.response?.data || error.message);
      // alert("Login failed: " + (error.response?.data?.message || error.message));
      setStatus("error",error.response?.data?.message || error.message); 
      setEmail("");
      setPassword("");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100">
      <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-6 text-center">Admin Login</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-1">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full border rounded-lg px-3 py-2"
            />
          </div>

          <div>
            <label className="block mb-1">Password</label>
            <input
              type="password"
              view={password}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full border rounded-lg px-3 py-2"
            />
          </div>

          {status === "error" && (
            <p className="text-red-500 text-sm">
              Login failed: {status.errorMessage || "Please try again."}
            </p>
          )}

          {status === "success" && (
            <p className="text-green-500 text-sm ">
              Login successful!
            </p>
          )}

          <button
            type="submit"
            className="w-full bg-black text-white py-2 rounded-lg"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
