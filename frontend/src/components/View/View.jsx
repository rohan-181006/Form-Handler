import { useEffect, useState } from "react";
import axios from "axios";

export default function View() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          console.error("No token found. Please log in.");
          return;
        }

        const response = await axios.get(
          "http://localhost:4000/api/v1/post/read",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setPosts(response.data.submissions || []);
      } catch (error) {
        console.error("Failed to fetch posts:", error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className="min-h-screen bg-slate-100 p-6">
      <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-2xl p-6">
        <h2 className="text-3xl font-bold mb-6 text-center">
          Admin Dashboard
        </h2>

        {posts.length === 0 ? (
          <p className="text-center text-gray-500">No submissions found.</p>
        ) : (
          <div className="space-y-4">
            {posts.map((post) => (
              <div
                key={post._id}
                className="border rounded-xl p-4 shadow-sm"
              >
                <p><strong>Name:</strong> {post.name}</p>
                <p><strong>Email:</strong> {post.email}</p>
                <p><strong>Subject:</strong> {post.subject}</p>
                <p><strong>Message:</strong> {post.message}</p>

                
                <div className="flex gap-3 mt-4 justify-end ">
                  <button
                    className="px-4 py-2 rounded-lg bg-blue-500 text-white font-medium hover:bg-blue-600 transition hover:cursor-pointer"
                    
                  >
                    Reviewed
                  </button>

                  <button
                    className="px-4 py-2 rounded-lg bg-green-600 text-white font-medium hover:bg-green-700 transition hover:cursor-pointer"
                  >
                    Resolved
                  </button>
                </div>

              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

