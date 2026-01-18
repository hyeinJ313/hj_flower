import Link from "next/link";

export default function FruitBasketPage() {
  const products = [
    { id: 431, name: "과일바구니 A", price: 100000, image: "/fruit10_1.jpg",
      desc: ""
     },
    { id: 432, name: "과일바구니 B", price: 100000, image: "/fruit10_2.jpg" },
    { id: 433, name: "과일바구니 C", price: 100000, image: "/fruit10_3.jpg" },
    { id: 434, name: "과일바구니 D", price: 150000, image: "/fruit15.jpg" },
    { id: 435, name: "과일바구니 E", price: 200000, image: "/fruit20.jpg" },
];

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {products.map((p) => (
        <Link
          key={p.id}
          href={`/products/${p.id}`}
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <div
            style={{
              border: "1px solid #ddd",
              borderRadius: "8px",
              padding: "10px",
              textAlign: "center",
              cursor: "pointer",
              background: "#fff",
            }}
          >
            <img
              src={p.image}
              alt={p.name}
              style={{
                width: "100%",
                height: "180px",
                objectFit: "cover",
                borderRadius: "6px",
              }}
            />
            <h3 style={{ marginTop: "10px", fontSize: "18px" }}>{p.name}</h3>
            <p style={{ color: "#444", fontSize: "16px" }}>
              {p.price.toLocaleString()}원
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
}
