type Props = {
  params: Promise<{ id: string }>;
};

export default async function ProductDetailPage({ params }: Props) {
  const { id } = await params; // 🔥 핵심 수정

  type Product = {
    id: number;
    name: string;
    price: number;
    image: string;
    desc?: string;
  };

  const products: Product[] = [
    { id: 1, name: "철골 소심", price: 50000, image: "/east_5.jpg" },
    { id: 2, name: "채홍", price: 80000, image: "/east_8.jpg" },
    { id: 3, name: "황룡금", price: 100000, image: "/east_10.jpg" },

    { id: 4, name: "큰호접 다섯 대 A", price: 100000, image: "/west10_1.jpg" },
    { id: 5, name: "큰호접 다섯 대 B", price: 100000, image: "/west10_2.jpg" },
    { id: 6, name: "큰호접 다섯 대 C", price: 100000, image: "/west10_3.jpg" },
  ];

  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return <div style={{ padding: "20px" }}>상품을 찾을 수 없습니다.</div>;
  }

  return (
    <div style={{ padding: "30px", maxWidth: "600px", margin: "0 auto" }}>
      <img
        src={product.image}
        alt={product.name}
        style={{
          width: "100%",
          borderRadius: "10px",
          objectFit: "cover",
        }}
      />

      <h1 style={{ marginTop: "20px", fontSize: "28px" }}>{product.name}</h1>
      <p style={{ fontSize: "22px", color: "#444" }}>
        {product.price.toLocaleString()}원
      </p>

      {product.desc && (
        <p style={{ marginTop: "15px", fontSize: "18px", lineHeight: "1.6" }}>
          {product.desc}
        </p>
      )}
    </div>
  );
}
