import { Link, NavLink } from "react-router-dom";

export default function Root() {
  return (
    <div className="min-h-screen bg-linear-to-br from-slate-100 to-slate-300 flex items-center justify-center p-6">
      <div className="w-full max-w-4xl">

        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-3">Welcome</h1>
          <p className="text-gray-600 text-lg">
            Choose how you want to continue
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">

          {/* Submission Card */}
          <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 p-8 text-center flex flex-col justify-between">
            <div>
              <div className="text-5xl mb-4">📝</div>
              <h2 className="text-2xl font-semibold mb-2">Submission</h2>
              <p className="text-gray-600">
                Submit your information quickly and easily.
              </p>
            </div>

            <Link
              to="/submission"
              className="mt-8 bg-black text-white py-3 rounded-xl hover:opacity-90 transition block"
            >
              Go to Submission
            </Link>
          </div>

          {/* Admin Card */}
          <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 p-8 text-center flex flex-col justify-between">
            <div>
              <div className="text-5xl mb-4">🔐</div>
              <h2 className="text-2xl font-semibold mb-2">Admin</h2>
              <p className="text-gray-600">
                Access administrative tools and manage submissions.
              </p>
            </div>

            <Link
              to="/login"
              className="mt-8 bg-black text-white py-3 rounded-xl hover:opacity-90 transition block"
            >
              Go to Admin
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
}
