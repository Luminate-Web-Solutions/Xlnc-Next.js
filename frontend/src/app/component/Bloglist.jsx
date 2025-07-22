'use client';
import { useRouter } from 'next/navigation';

export default function BlogList({ blogs }) {
  const router = useRouter();

  if (!blogs.length) return <p className="text-gray-500">No blogs available</p>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {blogs.map((b) => (
        <div
          key={b.id}
          className="cursor-pointer border rounded-lg overflow-hidden shadow hover:shadow-lg bg-white text-black flex flex-col"
          onClick={() => router.push(`/blogs/${b.id}`)}
        >
          <img
            src={`http://localhost:4000/uploads/blogs/${b.image}`}
            alt={b.title}
            className="w-full h-48 object-cover"
          />
          <div className="p-4 flex flex-col justify-between flex-grow">
            <div>
              <h2 className="text-xl font-bold mb-2">{b.title}</h2>
              <p className="text-gray-600 text-sm">
                {b.content.slice(0, 100)}...
              </p>
            </div>
            <button
              className="mt-4 self-start bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
              onClick={(e) => {
                e.stopPropagation();
                router.push(`/blogs/${b.id}`);
              }}
            >
              Read More
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
