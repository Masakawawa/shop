import React, { useState } from "react";
import { ShoppingBag } from "lucide-react";

// data category
const categories = ["All", "Buku", "Baju", "Celana", "Alat"];

// data product
const products = [
  {
    id: 1,
    title: "Psychology Of Money",
    author: "Morgan Housel",
    price: 51000,
    category: "Buku",
    link: "https://vt.tokopedia.com/t/ZSHndNYTkfaxD-NzVzD/",
    image: "/images/Bukutop.jpeg",
  },
  {
    id: 2,
    title: "The Principle of Power",
    author: "Dion Yulianto",
    price: 41500,
    category: "Buku",
    link: "https://vt.tokopedia.com/t/ZSHnAbysq4DMF-KdwsH/",
    image: "/images/buku2.jpeg",
  },
  {
    id: 3,
    title: "Buku Putih Tiktok Affiliate",
    author: "Suwandi Baskara",
    price: "15.000 - 30.000",
    category: "Buku",
    link: "https://vt.tokopedia.com/t/ZSHnApfRYtByK-j4snx/",
    image: "/images/buku3.jpg",
  },
  {
    id: 4,
    title: "Seporsi Mie Ayam sebelum Mati",
    author: "Brian Krisna",
    price: 20000,
    category: "Buku",
    link: "https://vt.tokopedia.com/t/ZSHnwQmCt8JvX-v8BQ3/",
    image: "/images/buku4.png",
  },
  {
    id: 5,
    title: "Is it bad or good Habits",
    author: "Sabrina Ara",
    price: 22960,
    category: "Buku",
    link: "https://vt.tokopedia.com/t/ZSHnteySnQWDC-VufiC/",
    image: "/images/buku5.jpg",
  },
  {
    id: 6,
    title: "Kaos Oversize",
    author: "eazy",
    price: 99900,
    category: "Baju",
    link: "https://vt.tokopedia.com/t/ZSHnd6eK5uqcp-SjnaZ/",
    image: "/images/kaos2.jpg",
  },
  {
    id: 7,
    title: "Kaos Oversize",
    author: "aezy",
    price: 99900,
    category: "Baju",
    link: "https://vt.tokopedia.com/t/ZSHndM1vGfNhU-DbAAd/",
    image: "/images/kaos1.jpg",
  },
  {
    id: 8,
    title: "Kaos Oversize",
    author: "KREMLIN T-shirt",
    price: 129900,
    category: "Baju",
    link: "https://vt.tokopedia.com/t/ZSHnDgMYPYv2a-N53aq/",
    image: "/images/baju1.jpg",
  },
  {
    id: 9,
    title: "Hoodie",
    author: "KREMLIN",
    price: 222400,
    category: "Baju",
    link: "https://vt.tokopedia.com/t/ZSHnTUJekuhJq-u7Oau/",
    image: "/images/baju3.jpg",
  },
  {
    id: 10,
    title: "Kaos Oversize",
    author: "aezy",
    price: 99900,
    category: "Baju",
    link: "https://vt.tokopedia.com/t/ZSHnTPrhx23wN-6JijR/",
    image: "/images/baju4.jpg",
  },
  {
    id: 11,
    title: "Jacket Waterproof",
    author: "Disai",
    price: 147500,
    category: "Baju",
    link: "https://vt.tokopedia.com/t/ZSHnTfr1tPtdx-MpmXI/",
    image: "/images/jaket1.jpg",
  },
  {
    id: 12,
    title: "Kaos Oversize",
    author: "Accent Ambios",
    price: 67500,
    category: "Baju",
    link: "https://vt.tokopedia.com/t/ZSHnw5yDm5UAm-O6dRk/",
    image: "/images/baju5.jpg",
  },
  {
    id: 13,
    title: "Celana Panjang Cargo",
    author: "KREMLIN",
    price: 222400,
    category: "Celana",
    link: "https://vt.tokopedia.com/t/ZSHnwHq9QEF7C-foJDn/",
    image: "/images/celana1.jpg",
  },
  {
    id: 14,
    title: "Celana Pendek Cargo",
    author: "n-nine.co",
    price: 48250,
    category: "Celana",
    link: "https://vt.tokopedia.com/t/ZSHnw9wc8TpT7-LJu7x/",
    image: "/images/celana2.jpg",
  },
];

const Home = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProducts =
    activeCategory === "All"
      ? products
      : products.filter((p) => p.category === activeCategory);

  return (
    <div className="min-h-screen flex flex-col items-center justify-start bg-white text-black px-5 md:px-16 md:mt-16">

      {/* Hero Section */}
      <section className="mt-20 max-w-6xl w-full">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-10">
          {/* Left Content */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-2 text-lg font-semibold">
              <ShoppingBag />
              Masakashop
            </div>
            <h1 className="text-xl md:text-4xl font-bold leading-tight">
              Explore Our Recomendation Product <br /> Up Your Personality and Experience
            </h1>
            <p className="text-xs md:text-sm text-gray-600 max-w-lg">
              Tempat Belanja yang menyediakan berbagai kebutuhan Anda.
              Temukan barang dan jasa keren, trendi, dan bermanfaat yang bisa kamu order langsung.
            </p>
          </div>
        </div>
      </section>

      {/* Product Section */}
      <section className="mx-auto w-[92%] max-w-6xl py-12">
        <h2 className="text-xl md:text-xl font-bold mb-6">Product Trending</h2>

        {/* Filter */}
        <div className="sticky top-0 z-10 bg-white py-3 border-b border-gray-200 mb-8">
          <div className="flex flex-wrap gap-4 text-gray-600 text-sm md:text-base">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`hover:text-black transition ${
                  activeCategory === cat ? "text-black font-semibold" : ""
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Mobile Horizontal Scroll */}
        <div className="md:hidden space-y-6">
          {Array.from({ length: Math.ceil(filteredProducts.length / 6) }).map(
            (_, rowIndex) => {
              const rowProducts = filteredProducts.slice(
                rowIndex * 6,
                rowIndex * 6 + 6
              );
              return (
                <div
                  key={rowIndex}
                  className="flex overflow-x-auto gap-4 pb-4"
                >
                  {rowProducts.map((product) => (
                    <div
                      key={product.id}
                      className="w-[150px] flex-shrink-0 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition"
                    >
                      {/* Image */}
                      <div className="w-full h-40 bg-gray-200 flex items-center justify-center overflow-hidden">
                        <img
                          src={product.image}
                          alt={product.title}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      {/* Info */}
                      <div className="p-3 flex flex-col gap-1">
                        <h3 className="text-sm font-medium">{product.title}</h3>
                        <p className="text-xs text-gray-500">{product.author}</p>
                        <p className="text-sm font-semibold">
                          Rp {product.price.toLocaleString("id-ID")}
                        </p>
                        <a
                          href={product.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-2 bg-black text-white py-1.5 rounded-md text-sm text-center hover:opacity-90 transition"
                        >
                          Beli
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              );
            }
          )}
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="rounded-lg overflow-hidden shadow-sm hover:shadow-md transition"
            >
              {/* Image */}
              <div className="w-full h-48 bg-gray-200 flex items-center justify-center overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Info */}
              <div className="p-4 flex flex-col gap-2">
                <h3 className="text-sm font-medium">{product.title}</h3>
                <p className="text-xs text-gray-500">{product.author}</p>
                <p className="text-sm font-semibold">
                  Rp {product.price.toLocaleString("id-ID")}
                </p>
                <a
                  href={product.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 bg-black text-white py-2 rounded-md text-sm text-center hover:opacity-90 transition"
                >
                  Beli
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
