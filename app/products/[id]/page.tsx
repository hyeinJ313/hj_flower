import OrderButtons from "./OrderButtons";

type Props = {
  params: Promise<{ id: string }>;
};

export default async function ProductDetailPage({ params }: Props) {
  const { id } = await params;

  type Product = {
    id: number;
    name: string;
    price: number;
    image: string;
    height?: string;
    desc?: string;
  };

  const products: Product[] = [
    { id: 1, name: "철골 소심", price: 50000, image: "/east_5.jpg" },
    { id: 2, name: "채홍", price: 80000, image: "/east_8.jpg" },
    { id: 3, name: "황룡금", price: 100000, image: "/east_10.jpg" },
    { id: 4, name: "일향금 A", price: 150000, image: "/east_15.jpg" },
    { id: 5, name: "일향금 B", price: 200000, image: "/east_20.jpg" },

    { id: 7, name: "서양난 A", price: 100000, image: "/west10_1.jpg" },
    { id: 8, name: "서양난 B", price: 100000, image: "/west10_2.jpg" },
    { id: 9, name: "서양난 C", price: 100000, image: "/west10_3.jpg" },
    { id: 10, name: "서양난 D", price: 150000, image: "/west15_1.jpg" },
    { id: 11, name: "서양난 E", price: 150000, image: "/west15_2.jpg" },
    { id: 12, name: "서양난 F", price: 150000, image: "/west20_1.jpg" },
    { id: 13, name: "서양난 G", price: 150000, image: "/west20_2.jpg" },

    { id: 14, name: "분재", price: 150000, image: "/bonsai_15.jpg" },

    { id: 15, name: "금전수", price: 100000, image: "/tree_gum110.jpg" },
    { id: 16, name: "고무나무", price: 100000, image: "/tree_gomu160.jpg" },
    { id: 17, name: "녹보수", price: 100000, image: "/tree_nok160.jpg" },
    { id: 18, name: "황금죽", price: 100000, image: "/tree_hwang160.jpg" },
    { id: 19, name: "스투키", price: 100000, image: "/tree_stu110.jpg" },
    { id: 20, name: "아레카야자", price: 100000, image: "/tree_areka150.jpg" },
    { id: 21, name: "안시리움", price: 70000, image: "/tree_anshi_7.jpg" },
    { id: 22, name: "미니 스투키", price: 70000, image: "/tree_ministu_7.jpg" },
    { id: 23, name: "보석금전수", price: 70000, image: "/tree_bogum_7.jpg" },
    { id: 24, name: "미니 녹보수", price: 70000, image: "/tree_mininok_7.jpg" },

    { id: 25, name: "숯부작", price: 100000, image: "/char_10.jpg" },

    { id: 26, name: "과일바구니 A", price: 100000, image: "/fruit10_1.jpg" },
    { id: 27, name: "과일바구니 B", price: 100000, image: "/fruit10_2.jpg" },
    { id: 28, name: "과일바구니 C", price: 100000, image: "/fruit10_3.jpg" },
    { id: 29, name: "과일바구니 D", price: 150000, image: "/fruit15.jpg" },
    { id: 30, name: "과일바구니 E", price: 200000, image: "/fruit20.jpg" },
  ];

  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return <div style={{ padding: "20px" }}>상품을 찾을 수 없습니다.</div>;
  }

  return (
    <div
      style={{
        padding: "20px",
        maxWidth: "900px",
        margin: "0 auto",
      }}
    >
      {/* 상단 상세 정보 */}
      <div
        style={{
          display: "flex",
          gap: "20px",
          flexWrap: "wrap",
        }}
      >
        {/* 이미지 */}
        <div style={{ flex: "1 1 300px" }}>
          <img
            src={product.image}
            alt={product.name}
            style={{
              width: "100%",
              borderRadius: "10px",
              objectFit: "cover",
            }}
          />
        </div>

        {/* 텍스트 정보 */}
        <div
          style={{
            flex: "1 1 300px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <h1 style={{ fontSize: "26px", marginBottom: "10px" }}>{product.name}</h1>

          <p style={{ fontSize: "20px", color: "#444", marginBottom: "10px" }}>
            가격: {product.price.toLocaleString()}원
          </p>

          {product.height && (
            <p style={{ fontSize: "18px", color: "#555", marginBottom: "10px" }}>
              높이: {product.height}
            </p>
          )}

          {product.desc && (
            <p style={{ fontSize: "17px", lineHeight: "1.6", marginBottom: "20px" }}>
              {product.desc}
            </p>
          )}

          {/* 🔥 여기에서 버튼 컴포넌트 사용 */}
          <OrderButtons />
        </div>
      </div>

      {/* 구매 안내 */}
      <div style={{ marginTop: "40px" }}>
        <h2 style={{ fontSize: "22px", marginBottom: "10px" }}>배송 관련 안내</h2>
        <ul style={{ lineHeight: "1.8", color: "#555", fontSize: "16px" }}>
          <li>* 구입금액과 지역 관계없이 무료배송 (단. 산간지역과 섬지역은 예외)</li>
          <li>(단, 희망한 배송시간 3시간 전까지 연락주시면 주문취소가 가능합니다.)</li>
          <li>* 배송시간 : 09시 ~ 20시 / 배송 소요시간 : 3시간 이내</li>
        </ul>

        <h2 style={{ fontSize: "22px", margin: "30px 0 10px" }}>교환/환불 관련 안내</h2>
        <ul style={{ lineHeight: "1.8", color: "#555", fontSize: "16px" }}>
          <li>아래와 같은 경우에는 교환과 환불이 가능합니다.</li>
          <li>- 배송된 상품이 파손되었거나 오염된 경우</li>
          <li>- 배송된 상품이 주문 내용과 다를 경우</li>
          <li>- 쇼핑몰이 제공한 정보와 다를 경우</li>
          <li>(교환은 위와 같은 경우 3시간 이내 재교환 가능)</li>
          <li>- 환불은 배송시간 3시간 전에 주문 취소된 경우</li>
          <li>- 상품 품절 또는 기타 사유로 배송 불가한 경우</li>
          <li>환불은 12시간 이내 전액 처리되며 추가 비용 없음</li>
        </ul>
      </div>

      {/* 원산지 안내 이미지 */}
      <div style={{ marginTop: "40px" }}>
        <h2 style={{ fontSize: "22px", marginBottom: "10px" }}>★ 원산지 표시 안내 ★</h2>

        <img
          src="/origin_table.png"
          alt="원산지 표시 안내"
          style={{ width: "100%", borderRadius: "8px" }}
        />
      </div>
    </div>
  );
}
