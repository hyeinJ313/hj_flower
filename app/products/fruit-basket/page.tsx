import Link from "next/link";

export default function FruitBasketPage() {
  const products = [
    { id: 26, name: "과일바구니 A", price: 100000, image: "/fruit10_1.jpg" },
    { id: 29, name: "과일바구니 C", price: 150000, image: "/fruit15.jpg" },
    { id: 30, name: "과일바구니 D", price: 200000, image: "/fruit20.jpg" },
  ];

  return (
    <div
      style={{
        padding: "20px",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
        gap: "20px",
      }}
    >
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
