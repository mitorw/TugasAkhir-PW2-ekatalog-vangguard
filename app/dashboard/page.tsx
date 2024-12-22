import Image from "next/image";

const dummyItems = [
  {
    id: 1,
    name: "Laptop Bekas",
    price: "Rp 2.500.000",
    image: "/images/laptop.jpg",
    description: "Laptop bekas dengan spesifikasi Core i5, RAM 8GB, SSD 256GB.",
  },
  {
    id: 2,
    name: "Handphone Second",
    price: "Rp 1.200.000",
    image: "/images/phone.jpg",
    description: "Handphone second dengan kondisi 90% seperti baru.",
  },
  {
    id: 3,
    name: "TV LED Bekas",
    price: "Rp 1.800.000",
    image: "/images/tv.jpg",
    description: "TV LED 32 inci bekas dengan kualitas gambar HD.",
  },
];

export default function Dashboard() {
  return (
    <div className="p-5 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-5 text-center">E-Katalog Barang Second</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {dummyItems.map((item) => (
          <div
            key={item.id}
            className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            <div className="relative h-48 w-full flex justify-center items-center bg-gray-200">
              <Image
                src={item.image}
                alt={item.name}
                layout="fill"
                className="object-contain"
              />
            </div>
            <div className="p-4">
              <h2 className="text-xl font-semibold">{item.name}</h2>
              <p className="text-gray-600">{item.description}</p>
              <p className="text-blue-500 font-bold mt-2">{item.price}</p>
              <button className="mt-4 w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-700">
                Lihat Detail
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
