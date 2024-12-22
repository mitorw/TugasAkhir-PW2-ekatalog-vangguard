"use client"
import { useState } from "react";

export default function Dashboard() {
    const [filter, setFilter] = useState("");
    const [sortOrder, setSortOrder] = useState("");
    const [searchQuery, setSearchQuery] = useState("");
  
    const products = [
      { id: 1, name: "Laptop A", category: "Laptop", price: 5000000, image: "/images/laptop.jpg" },
      { id: 2, name: "Handphone A", category: "Handphone", price: 2000000, image: "/images/phone1.jpg" },
      { id: 3, name: "TV A", category: "TV", price: 3000000, image: "/images/tv1.jpg" },
      { id: 4, name: "Laptop B", category: "Laptop", price: 8000000, image: "/images/laptop2.jpg" },
      { id: 5, name: "Handphone B", category: "Handphone", price: 2500000, image: "/images/phone.jpg" },
      { id: 6, name: "TV B", category: "TV", price: 4500000, image: "/images/tv2.jpg" },
      { id: 7, name: "Laptop C", category: "Laptop", price: 6000000, image: "/images/laptop1.jpg" },
      { id: 8, name: "Handphone C", category: "Handphone", price: 3000000, image: "/images/phone2.jpg" },
      { id: 9, name: "TV C", category: "TV", price: 5000000, image: "/images/tv.jpg" },
    ];
  
    const filteredProducts = products
      .filter(
        (product) =>
          (!filter || product.category === filter) &&
          (!searchQuery || product.name.toLowerCase().includes(searchQuery.toLowerCase()))
      )
      .sort((a, b) => (sortOrder === "asc" ? a.price - b.price : b.price - a.price));
  
    return (
      <div className="p-8 bg-gray-100">
        {/* Filter dan Search Bar */}
        <div className="flex justify-between items-center mb-6">
          {/* Filter Kategori */}
          <select
            className="p-2 border rounded bg-blue-500"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          >
            <option value="">All Categories</option>
            <option value="Laptop">Laptop</option>
            <option value="Handphone">Handphone</option>
            <option value="TV">TV</option>
          </select>
  
          {/* Filter Harga */}
          <select
            className="p-2 border rounded bg-blue-500"
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
          >
            <option value="asc">Harga: Terendah ke Tertinggi</option>
            <option value="desc">Harga: Tertinggi ke Terendah</option>
          </select>
  
          {/* Search Bar */}
          <input
            type="text"
            placeholder="Search..."
            className="p-2 border rounded ml-4 w-1/3"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
  
        {/* Daftar Produk */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow p-4">
              <img
                src={product.image}
                alt={product.name}
                className="h-40 w-full object-contain mb-4"
              />
              <h3 className="text-lg font-semibold">{product.name}</h3>
              <p className="text-gray-600">Category: {product.category}</p>
              <p className="text-blue-500 font-bold">Rp {product.price.toLocaleString()}</p>
              <button
                onClick={() => alert(`Detail produk: ${product.name}`)}
                className="mt-4 w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
              >
                Lihat Detail
              </button>
            </div>
          ))}
        </div>
      </div>
    );
  }