"use client";
import { useState, useEffect } from "react";

type Product = {
  id: number;
  name: string;
  category: string;
  price: number;
  image: string;
  quantity: number; // Tambahkan properti quantity untuk setiap produk
};

export default function Keranjang() {
  const [cart, setCart] = useState<Product[]>([]);
  const [wishlist, setWishlist] = useState<Product[]>([]);
  const [total, setTotal] = useState<number>(0);

  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    const savedWishlist = localStorage.getItem("wishlist");
    if (savedCart) {
      setCart(JSON.parse(savedCart).map((item: Product) => ({ ...item, quantity: item.quantity || 1 })));
    }
    if (savedWishlist) {
      setWishlist(JSON.parse(savedWishlist));
    }
  }, []);

  useEffect(() => {
    const calculatedTotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
    setTotal(calculatedTotal);
  }, [cart]);

  const updateQuantity = (productId: number, quantity: number) => {
    if (quantity < 1) return;
    const updatedCart = cart.map((item) =>
      item.id === productId ? { ...item, quantity } : item
    );
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const removeFromCart = (productId: number) => {
    const updatedCart = cart.filter((product) => product.id !== productId);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const moveToWishlist = (productId: number) => {
    const product = cart.find((item) => item.id === productId);
    if (product) {
      setWishlist([...wishlist, product]);
      removeFromCart(productId);
      localStorage.setItem("wishlist", JSON.stringify([...wishlist, product]));
    }
  };

  const handleCheckout = () => {
    alert("Terima kasih telah berbelanja! Total Anda: Rp " + total.toLocaleString());
    setCart([]);
    localStorage.removeItem("cart");
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
                <p className="text-blue-500 font-bold">
                  Rp {product.price.toLocaleString()}
                </p>
                <div className="flex items-center mt-2">
                  <button
                    className="px-2 py-1 bg-gray-300 text-gray-700 rounded-l"
                    onClick={() => updateQuantity(product.id, product.quantity - 1)}
                  >
                    -
                  </button>
                  <input
                    type="number"
                    className="w-12 text-center border"
                    value={product.quantity}
                    onChange={(e) =>
                      updateQuantity(product.id, parseInt(e.target.value) || 1)
                    }
                  />
                  <button
                    className="px-2 py-1 bg-gray-300 text-gray-700 rounded-r"
                    onClick={() => updateQuantity(product.id, product.quantity + 1)}
                  >
                    +
                  </button>
                </div>
              </div>
              <div>
                <button
                  className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600 mr-2"
                  onClick={() => moveToWishlist(product.id)}
                >
                  Simpan
                </button>
                <button
                  className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                  onClick={() => removeFromCart(product.id)}
                >
                  Hapus
                </button>
              </div>
            </div>
          ))}

          <div className="bg-white rounded-lg shadow p-4 mt-4">
            <h3 className="text-lg font-bold">Total: Rp {total.toLocaleString()}</h3>
            <button
              className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 mt-4"
              onClick={handleCheckout}
            >
              Check Out
            </button>
          </div>
        </div>
      )}

      <h2 className="text-2xl font-bold mt-8 mb-4">Wishlist</h2>
      {wishlist.length === 0 ? (
        <p>Wishlist Anda kosong.</p>
      ) : (
        wishlist.map((product) => (
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
              <p className="text-blue-500 font-bold">
                Rp {product.price.toLocaleString()}
              </p>
            </div>
          </div>
        ))
      )}
    </div>
  );
}
