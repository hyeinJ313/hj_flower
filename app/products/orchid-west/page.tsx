import Link from "next/link";

export default function OrchidWestPage() {
  const products = [
    { id: 7, name: "서양난 A", price: 100000, image: "/west10_1.jpg" },
    { id: 8, name: "서양난 B", price: 100000, image: "/west10_2.jpg" },
    { id: 9, name: "서양난 C", price: 100000, image: "/west10_3.jpg" },
    { id: 10, name: "서양난 D", price: 150000, image: "/west15_1.jpg" },
    { id: 11, name: "서양난 E", price: 150000, image: "/west15_2.jpg" },
    { id: 12, name: "서양난 F", price: 150000, image: "/west20_1.jpg" },
    { id: 13, name: "서양난 G", price: 150000, image: "/west20_2.jpg" },
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
