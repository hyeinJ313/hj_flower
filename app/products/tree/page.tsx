import Link from "next/link";

export default function TreePage() {
  const products = [
    { id: 15, name: "금전수", price: 100000, image: "/tree_gum110.jpg" },
    { id: 16, name: "고무나무", price: 100000, image: "/tree_gomu160.jpg" },
    { id: 17, name: "녹보수(신종 해피트리)", price: 100000, image: "/tree_nok160.jpg" },
    { id: 18, name: "황금죽", price: 100000, image: "/tree_hwang160.jpg" },
    { id: 19, name: "스투키", price: 100000, image: "/tree_stu110.jpg" },
    { id: 20, name: "아레카야자", price: 100000, image: "/tree_areka150.jpg" },
    { id: 20, name: "안시리움", price: 70000, image: "/tree_anshi_7.jpg" },
    { id: 20, name: "미니 스투키", price: 70000, image: "/tree_ministu_7.jpg" },
    { id: 20, name: "보석금전수", price: 70000, image: "/tree_bogum_7.jpg" },
    { id: 20, name: "미니 녹보수", price: 70000, image: "/tree_mininok_7.jpg" },

    
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
