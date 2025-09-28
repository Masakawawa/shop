import React from "react";

export default function Footer() {
  return (
    <footer className="w-full mt-10">
      {/* Top Section */}
      <div className="max-w-6xl mx-auto px-6 py-10 text-left">
        <h2 className="text-xl font-thin mb-2">Masaka<p classname="font-light text-xs">Recomendation</p></h2>
        <p className="text-xs text-gray-600 max-w-md">
          Rekomendasi produk berkualitas untuk kebutuhan Anda. Temukan barang keren, trendi, dan bermanfaat yang bisa kamu order langsung.
        </p>
      </div>

      {/* Bottom Section */}
      <div className="bg-black text-white py-3 text-center text-xs">
        Masakashop Copyright © {new Date().getFullYear()} Allrights Reserved
      </div>
    </footer>
  );
}
