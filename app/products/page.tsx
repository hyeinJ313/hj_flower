import Link from "next/link";

export default function ProductsPage() {
  const products = [
    { id: 1, name: "황룡금", price: 55000, image: "/east_hwang_1.jpg" },
    { id: 2, name: "서양난 100cm 샘플1", price: 45000, image: "/west10_1.jpg" },
    { id: 3, name: "서양난 100cm 샘플2", price: 70000, image: "/west10_2.jpg" },
    { id: 3, name: "서양난 100cm 샘플3", price: 70000, image: "/west10_3.jpg" }
  ];

  return (
    <div
      style={{
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
            }}
          >
            <img
              src={p.image}
              alt={p.name}
              style={{ width: "100%", borderRadius: "6px" }}
            />
            <h3 style={{ marginTop: "10px" }}>{p.name}</h3>
            <p style={{ color: "#444" }}>{p.price.toLocaleString()}원</p>
          </div>
        </Link>
      ))}
    </div>
  );
}
