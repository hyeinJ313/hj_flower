import Link from "next/link";

export default function OrchidEastPage() {
  const products = [
    { id: 1, name: "철골 소심", price: 50000, image: "/east_5.jpg" },
    { id: 2, name: "채홍", price: 80000, image: "/east_8.jpg" },
    { id: 3, name: "황룡금", price: 100000, image: "/east_10.jpg" },
    { id: 4, name: "일향금 A", price: 150000, image: "/east_15.jpg" },
    { id: 5, name: "일향금 B", price: 200000, image: "/east_20.jpg" },
  ];

  return (
    <div
      style={{
        padding: "20px",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
        gap: "30px",
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
                height: "260px",
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
