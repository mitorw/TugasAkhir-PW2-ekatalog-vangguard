"use client";
import { useState, useEffect } from "react";
import Link from "next/link"; // Pastikan ini digunakan sesuai framework
import { FontAwesomeIcon } from "@/node_modules/@fortawesome/react-fontawesome/index";
import { faBars, faCartShopping } from "@/node_modules/@fortawesome/free-solid-svg-icons/index";

  type Product = {
    id: number;
    name: string;
    category: string;
    price: number;
    image: string;
    quantity: number;
  };

  export default function Keranjang() {
    const [cart, setCart] = useState<Product[]>([]);
    const [total, setTotal] = useState<number>(0);

    useEffect(() => {
      const savedCart = localStorage.getItem("cart");
      if (savedCart) {
        setCart(
          JSON.parse(savedCart).map((item: Product) => ({
            ...item,
            quantity: item.quantity || 1,
          }))
        );
      }
    }, []);

    useEffect(() => {
      const calculatedTotal = cart.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
      );
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

    const handleCheckout = () => {
      alert(
        "Terima kasih telah berbelanja! Total Anda: Rp " + total.toLocaleString()
      );
      setCart([]);
      localStorage.removeItem("cart");
    };

    return (
      <div>
        {/* Header Navbar */}
        <header className="mb-10">
          <nav>
            <div className="navbar bg-blue-500 fixed top-0 left-0 w-full z-50 shadow-xl">
              <div className="navbar-start">
                <div className="dropdown">
                  <div
                    tabIndex={0}
                    role="button"
                    className="btn btn-ghost btn-circle text-xl"
                  >
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
              <Link
                href={"/dashboard"}
                className="navbar-center btn btn-ghost text-xl"
              >
                Barang Second
              </Link>
              <div className="navbar-end">
                <Link
                  href={"/keranjang"}
                  className="mr-4 btn btn-ghost btn-circle text-xl"
                  title={"Keranjang"}
                >
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

        {/* Keranjang Content */}
        <div className="p-8 bg-blue-300 text-black">
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
                        onClick={() =>
                          updateQuantity(product.id, product.quantity - 1)
                        }
                      >
                        -
                      </button>
                      <input
                        type="number"
                        className="w-12 text-center border text-white"
                        value={product.quantity}
                        onChange={(e) =>
                          updateQuantity(
                            product.id,
                            parseInt(e.target.value) || 1
                          )
                        }
                      />
                      <button
                        className="px-2 py-1 bg-gray-300 text-gray-700 rounded-r"
                        onClick={() =>
                          updateQuantity(product.id, product.quantity + 1)
                        }
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <button
                    className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                    onClick={() => removeFromCart(product.id)}
                  >
                    Hapus
                  </button>
                </div>
              ))}

              <div className="bg-white rounded-lg shadow p-4 mt-4">
                <h3 className="text-lg font-bold">
                  Total: Rp {total.toLocaleString()}
                </h3>
                <button
                  className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 mt-4"
                  onClick={handleCheckout}
                >
                  Check Out
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
