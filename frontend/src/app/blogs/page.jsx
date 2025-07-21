import Link from "next/link";

export default async function BlogList() {
  let blogs = [];

  try {
    const res = await fetch("http://localhost:4000/api/blogs");
    const data = await res.json();
    blogs = Array.isArray(data) ? data : [];
  } catch (error) {
    console.error("Failed to fetch blogs:", error);
  }

  return (
    <main className="max-w-3xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-8 text-center">📝 Our Blog Posts</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {blogs.length > 0 ? (
          blogs.map((b) => (
            <Link key={b._id} href={`/blogs/${b._id}`}>
              <a className="block border border-gray-300 rounded-lg overflow-hidden text-black no-underline hover:shadow-md transition-shadow duration-200">
                {b.imageUrl && (
                  <img
                    src={`http://localhost:4000${b.imageUrl}`}
                    alt={b.title}
                    className="w-full h-48 object-cover"
                  />
                )}
                <div className="p-4">
                  <h2 className="text-xl font-semibold mb-2">{b.title}</h2>
                  <p className="text-gray-700">{b.description.substring(0, 100)}...</p>
                </div>
              </a>
            </Link>
          ))
        ) : (
          <p className="text-center text-gray-500">No blogs available</p>
        )}
      </div>
    </main>
  );
}
