'use client';

import { useRouter } from 'next/navigation';

export default function AdminHeader() {
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem("token");
    router.push("/login");
  };

  return (
    <header className="bg-gray-800 text-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-xl font-bold">XLNC Admin Panel</h1>

        <nav className="flex gap-6">
          <button onClick={() => router.push("/dashboard")} className="hover:underline">
            Dashboard
          </button>
          <button onClick={() => router.push("/uplod-project")} className="hover:underline">
            Upload Project
          </button>
          <button onClick={() => router.push("/upload-blog")} className="hover:underline">
            Upload Blog
          </button>
          <button onClick={handleLogout} className="bg-red-600 px-4 py-1 rounded hover:bg-red-700">
            Logout
          </button>
        </nav>
      </div>
    </header>
  );
}
