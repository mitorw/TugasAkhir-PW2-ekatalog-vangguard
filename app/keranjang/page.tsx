"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

type Product = {
  id: number;
  name: string;
  category: string;
  price: number;
  image: string;
};

export default function Keranjang() {
  const [cart, setCart] = useState<Product[]>([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart") || "[]");
    setCart(storedCart);
  }, []);

  const removeFromCart = (productId: number) => {
    const updatedCart = cart.filter((product) => product.id !== productId);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    setCart(updatedCart);
  };

  const totalPrice = cart.reduce((total, product) => total + product.price, 0);

  return (
    <div>
      {/* Header */}
      <header className="bg-blue-600 text-white shadow-md">
        <nav className="container mx-auto p-4 flex justify-between items-center">
          <div className="text-lg font-bold">Keranjang Belanja</div>
          <ul className="flex space-x-6">
            <li>
              <a href="/" className="hover:underline">Home</a>
            </li>
            <li>
              <a href="/products" className="hover:underline">Produk</a>
            </li>
            <li>
              <a href="/keranjang" className="hover:underline">Keranjang</a>
            </li>
            <li>
              <a href="/account" className="hover:underline">Akun Saya</a>
            </li>
            <li>
              <a href="/logout" className="hover:underline">Log Out</a>
            </li>
          </ul>
        </nav>
      </header>

      <div className="relative h-72 w-full">
        <Image
          className="absolute inset-0 h-full w-full object-cover opacity-70"
          src={"/images/banner.png"}
          alt={"Banner Barang Second"}
          width={1851}
          height={222}
        />
      </div>

      <div className="p-8 bg-gray-100">
        <h2 className="text-2xl font-bold mb-6">Keranjang Belanja</h2>

        {cart.length === 0 ? (
          <p>Keranjang Anda kosong.</p>
        ) : (
          <div>
            {cart.map((product) => (
              <div key={product.id} className="flex items-center justify-between mb-4 p-4 bg-white rounded-lg shadow">
                <img src={product.image} alt={product.name} className="h-16 w-16 object-contain" />
                <div>
                  <h3 className="font-semibold">{product.name}</h3>
                  <p className="text-blue-500 font-bold">Rp {product.price.toLocaleString()}</p>
                </div>
                <button
                  className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
                  onClick={() => removeFromCart(product.id)}
                >
                  Hapus
                </button>
              </div>
            ))}
            <div className="mt-4 text-right">
              <p className="text-xl font-semibold">Total: Rp {totalPrice.toLocaleString()}</p>
            </div>
            <div className="mt-6 flex justify-between">
              <button className="bg-gray-500 text-white py-2 px-6 rounded hover:bg-gray-600">
                Kembali Belanja
              </button>
              <button className="bg-blue-500 text-white py-2 px-6 rounded hover:bg-blue-600">
                Proses Pembayaran
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
