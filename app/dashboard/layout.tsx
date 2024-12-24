"use client";
import { faBars, faCartShopping } from "@/node_modules/@fortawesome/free-solid-svg-icons/index";
import { FontAwesomeIcon } from "@/node_modules/@fortawesome/react-fontawesome/index";
import Link from "@/node_modules/next/link";
import Image from "next/image";
import { useState } from "react";

type Product = {
  id: number;
  name: string;
  category: string;
  price: number;
  image: string;
};

export default function Dashboard() {
  const [filter, setFilter] = useState<string>("");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc" | "">("");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const products: Product[] = [
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
    .sort((a, b) =>
      sortOrder === "asc" ? a.price - b.price : sortOrder === "desc" ? b.price - a.price : 0
    );

  const addToCart = (product: Product) => {
    const currentCart = JSON.parse(localStorage.getItem("cart") || "[]");
    const updatedCart = [...currentCart, product];
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    alert(`${product.name} berhasil ditambahkan ke keranjang!`);
    
  };

  return (
    <div>
      {/* Header */}
      <header className="mb-10">
        {/* Navbar */}
          <nav>
            <div className="navbar bg-blue-500 fixed top-0 left-0 w-full z-50 shadow-xl">
              <div className="navbar-start">
                <div className="dropdown">
                  <div tabIndex={0} role="button" className="btn btn-ghost btn-circle text-xl">
                    <FontAwesomeIcon icon={faBars} />
                  </div>
                  <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
                  >
                    <li>
                      <Link href={"/dashboard"}>Dashboard</Link>
                    </li>
                    <li>
                      <Link href={"/profil"}>Profil</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <Link href={"/dashboard"} className="navbar-center btn btn-ghost text-xl">
                Barang Second
              </Link>
              
              
              <div className="navbar-end">
                <Link href={'/keranjang'} className="mr-4 btn btn-ghost btn-circle text-xl" title={"Keranjang"}>
                  <FontAwesomeIcon icon={faCartShopping} />
                </Link>
                <Link href="login">
                  <button className="bg-white text-blue-500 px-4 py-2 rounded-md hover:bg-gray-200">
                    Login
                  </button>
                </Link>
              </div>
            </div>
          </nav>  
        </header>
      <header>
        
        <div className="relative h-72 w-full">
          <Image
            className="absolute inset-0 h-full w-full object-cover opacity-70"
            src={"/images/banner.png"}
            alt={"Banner Barang Second"}
            width={1851}
            height={222}
          />
        </div>
      </header>

      <div className="p-8 bg-gray-100">
        {/* Filter dan Search Bar */}
        <div className="flex justify-between items-center mb-6">
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

          <select
            className="p-2 border rounded bg-blue-500"
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value as "asc" | "desc")}
          >
            <option value="asc">Harga: Terendah ke Tertinggi</option>
            <option value="desc">Harga: Tertinggi ke Terendah</option>
          </select>

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
              <h3 className="text-lg font-semibold text-black">{product.name}</h3>
              <p className="text-gray-600">Category: {product.category}</p>
              <p className="text-blue-500 font-bold">Rp {product.price.toLocaleString()}</p>
              <button
                className="btn mt-4 w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
                onClick={() => setSelectedProduct(product)}
              >
                Lihat Produk
              </button>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedProduct && (
          <dialog
            open
            className="modal modal-bottom sm:modal-middle backdrop-blur rounded-lg shadow-lg p-6"
          >
            <div className="modal-box">
              <h3 className="font-bold text-lg">{selectedProduct.name}</h3>
              <img
                src={selectedProduct.image}
                alt={selectedProduct.name}
                className="h-40 w-full object-contain my-4"
              />
              <p className="text-gray-600">Category: {selectedProduct.category}</p>
              <p className="text-blue-500 font-bold">Rp {selectedProduct.price.toLocaleString()}</p>
              <p className="py-4">Produk terbaik dengan kualitas unggulan.</p>
              <div className="modal-action">
                <button
                  className="btn bg-green-500 text-white py-2 rounded hover:bg-green-600"
                  onClick={() => addToCart(selectedProduct)}
                >
                  Masukkan ke Keranjang
                </button>
                <button
                  className="btn bg-red-500 text-white py-2 rounded hover:bg-red-600"
                  onClick={() => setSelectedProduct(null)}
                >
                  Close
                </button>
              </div>
            </div>
          </dialog>
        )}
      </div>
    </div>
  );
}
