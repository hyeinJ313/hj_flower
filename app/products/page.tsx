export default function ProductsPage() {
  const products = [
    { id: 1, name: "동양난 1호", price: 55000, image: "/sample1.jpg" },
    { id: 2, name: "꽃바구니 A", price: 45000, image: "/sample2.jpg" },
    { id: 3, name: "축하화환 기본형", price: 70000, image: "/sample3.jpg" },
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
        <div
          key={p.id}
          style={{
            border: "1px solid #ddd",
            borderRadius: "8px",
            padding: "10px",
            textAlign: "center",
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
      ))}
    </div>
  );
}