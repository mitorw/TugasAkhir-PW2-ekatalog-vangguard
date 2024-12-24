"use client";
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
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  const removeFromCart = (productId: number) => {
    const updatedCart = cart.filter((product) => product.id !== productId);
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  return (
    <div className="p-8 bg-gray-100">
      <h2 className="text-2xl font-bold mb-4">Keranjang</h2>

      {cart.length === 0 ? (
        <p>Keranjang Anda kosong.</p>
      ) : (
        <div>
          {cart.map((product) => (
            <div
              key={product.id}
              className="flex items-center justify-between bg-white rounded-lg shadow p-4 mb-4"
            >
              <img
                src={product.image}
                alt={product.name}
                className="h-20 w-20 object-contain"
              />
              <div>
                <h3 className="text-lg font-semibold">{product.name}</h3>
                <p className="text-gray-600">Category: {product.category}</p>
                <p className="text-blue-500 font-bold">Rp {product.price.toLocaleString()}</p>
              </div>
              <button
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                onClick={() => removeFromCart(product.id)}
              >
                Hapus
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
