import React, { useState } from "react";

export default function About() {
  const [activeCategory, setActiveCategory] = useState("All");

  const features = [
    {
      id: 1,
      title: "Fashion",
      desc: "Get the best recommendations that are trending",
    },
    {
      id: 2,
      title: "Books",
      desc: "Udate your knowledge with a simple books",
    },
    { id: 3, 
      title: "Tools and Items", 
      desc: "Get Ready" },
  ];

  return (
    <main className="min-h-screen bg-white px-6 md:px-16 py-12">
      {/* --- Features Section --- */}
      <section className="mx-auto w-[92%] max-w-5xl py-12">
        <header>
          <h2 className="text-2xl md:text-3xl font-semibold">About the Product</h2>
          <p className="mt-3 text-neutral-600">
            This page is for product information, about the product, and what
            services are provided.
          </p>
        </header>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((f) => (
            <article
              key={f.id}
              className="rounded-2xl border border-neutral-200 p-5 shadow-sm hover:shadow-md transition"
            >
              <h3 className="font-medium">{f.title}</h3>
              <p className="mt-2 text-sm text-neutral-600">{f.desc}</p>
            </article>
          ))}
        </div>
      </section>

     <div className="w-full flex flex-col items-start justify-center py-10 px-2 md:px-18">
      {/* Tiga kata sejajar */}
      <div className="flex flex-row gap-9 scale-90 md:scale-100 mb-6">
        <span className="text-gray-700">trusted</span>
        <span className="text-gray-700">Mudah</span>
        <span className="text-gray-700">Aman</span>
      </div>

      {/* Paragraf */}
      <div className="space-y-4 max-w-3xl text-left">
        <p className="text-gray-800 leading-relaxed">
          Kami sangat menjunjung kenyamanan anda dalam mengunjungi web kami. Link pada
          product sudah melalui filter oleh tim kami sehingga product aman dan pastinya
          terpercaya.
        </p>
        <p className="text-gray-800 leading-relaxed">
          Product yang ditawarkan merupakan kerja sama pada produsen melalui program
          affiliate <span className="font-semibold">TikTok x TokoPedia</span>.
        </p>
        <p>Note : Harga barang bisa berubah Tergantung Diskon harian | Prices may change lower due to discounts</p>
      </div>
    </div>

<div className="w-full flex flex-col items-center justify py-10">
      {/* Heading */}
      <p className="text-gray-600 text-sm mb-9">follow us on.</p>

      {/* 3 Kolom */}
      <div className="flex flex-row gap-16 scale-80 md:scale-100">
        {/* TikTok */}
        <div className="flex flex-col items-center">
          <h3 className="font-semibold">Tiktok</h3>
          <p className="text-gray-700">@masaka.id</p>
        </div>

        {/* Instagram */}
        <div className="flex flex-col items-center">
          <h3 className="font-semibold">Instagram</h3>
          <p className="text-gray-700">@masaka.main</p>
        </div>

        {/* Github */}
        <div className="flex flex-col items-center">
          <h3 className="font-semibold">Github</h3>
          <p className="text-gray-700">Masakawawa</p>
        </div>
      </div>
    </div>

    </main>
  );
}
