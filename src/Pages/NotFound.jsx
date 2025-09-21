import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="mx-auto w-[92%] max-w-5xl py-24 text-center">
      <h1 className="text-3xl font-bold">404 — Not Found</h1>
      <p className="mt-2 text-neutral-600">The page you’re looking for doesn’t exist.</p>
      <Link to="/" className="mt-6 inline-block underline underline-offset-4">
        Back to Home
      </Link>
    </section>
  );
}