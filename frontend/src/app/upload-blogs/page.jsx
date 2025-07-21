"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function UploadBlog() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [msg, setMsg] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = new FormData();
    form.append("title", title);
    form.append("description", description);

    if (image) {
      form.append("image", image);
    }

    try {
      const res = await fetch("http://localhost:4000/api/blogs", {
        method: "POST",
        body: form,
      });

      if (res.ok) {
        setMsg("✅ Blog uploaded successfully!");
        router.push("/blogs");
      } else {
        const errorText = await res.text();
        setMsg(`❌ Failed to upload blog: ${errorText}`);
      }
    } catch (error) {
      setMsg(`❌ Error: ${error.message}`);
    }
  };

  return (
    <main
      style={{
        backgroundColor: "#fff", // white background
        minHeight: "100vh",
        padding: "3rem 1rem",
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      }}
    >
      <section
        style={{
          backgroundColor: "#e6f0ff", // soft light blue for form background
          padding: "2.5rem 2rem",
          borderRadius: "15px",
          boxShadow: "0 10px 30px rgba(0,0,0,0.12)",
          maxWidth: "600px",
          width: "100%",
          color: "#333",
        }}
      >
        <h2
          style={{
            fontSize: "2rem",
            fontWeight: "700",
            marginBottom: "2rem",
            textAlign: "center",
            color: "#004aad",
            letterSpacing: "1.3px",
            borderBottom: "3px solid #0070f3",
            paddingBottom: "0.5rem",
          }}
        >
          Upload Your Blog Post
        </h2>

        <form
          onSubmit={handleSubmit}
          style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}
        >
          <input
            type="text"
            placeholder="Blog Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            style={{
              padding: "1rem",
              fontSize: "1.1rem",
              borderRadius: "8px",
              border: "2px solid #bdd7ff",
              transition: "border-color 0.3s ease",
              backgroundColor: "#f9fbff",
            }}
            onFocus={(e) => (e.target.style.borderColor = "#0070f3")}
            onBlur={(e) => (e.target.style.borderColor = "#bdd7ff")}
          />

          <textarea
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
            style={{
              padding: "1rem",
              fontSize: "1.1rem",
              borderRadius: "8px",
              border: "2px solid #bdd7ff",
              minHeight: "160px",
              resize: "vertical",
              transition: "border-color 0.3s ease",
              backgroundColor: "#f9fbff",
            }}
            onFocus={(e) => (e.target.style.borderColor = "#0070f3")}
            onBlur={(e) => (e.target.style.borderColor = "#bdd7ff")}
          />

          <input
            type="file"
            accept="image/*"
            onChange={(e) => setImage(e.target.files[0])}
            style={{
              padding: "0.6rem 1rem",
              fontSize: "1rem",
              borderRadius: "8px",
              border: "2px solid #bdd7ff",
              cursor: "pointer",
              transition: "border-color 0.3s ease",
              backgroundColor: "#f9fbff",
            }}
            onFocus={(e) => (e.target.style.borderColor = "#0070f3")}
            onBlur={(e) => (e.target.style.borderColor = "#bdd7ff")}
          />

          <button
            type="submit"
            style={{
              padding: "1rem",
              fontSize: "1.25rem",
              backgroundColor: "#0070f3",
              color: "#fff",
              border: "none",
              borderRadius: "10px",
              cursor: "pointer",
              fontWeight: "600",
              boxShadow: "0 6px 12px rgba(0, 112, 243, 0.4)",
              transition: "background-color 0.3s ease",
            }}
            onMouseEnter={(e) => (e.target.style.backgroundColor = "#005bb5")}
            onMouseLeave={(e) => (e.target.style.backgroundColor = "#0070f3")}
          >
            Upload Blog
          </button>

          {msg && (
            <p
              style={{
                textAlign: "center",
                color: msg.includes("❌") ? "#d93025" : "#188038",
                fontWeight: "700",
                fontSize: "1.1rem",
                marginTop: "0.5rem",
              }}
            >
              {msg}
            </p>
          )}
        </form>
      </section>
    </main>
  );
}
