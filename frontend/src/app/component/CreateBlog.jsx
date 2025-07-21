import Link from "next/link";

export default function BlogCard({ blog }) {
  return (
    <Link href={`/blogs/${blog._id}`}>
      <a className="block border border-gray-300 rounded-lg overflow-hidden shadow hover:shadow-lg transition-shadow duration-300">
        {blog.imageUrl && (
          <img
            src={`http://localhost:4000${blog.imageUrl}`}
            alt={blog.title}
            className="w-full h-48 object-cover"
          />
        )}
        <div className="p-4">
          <h2 className="text-xl font-semibold mb-2">{blog.title}</h2>
          <p className="text-gray-600">{blog.description.substring(0, 100)}...</p>
        </div>
      </a>
    </Link>
  );
}
