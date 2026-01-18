"use client";

import { useParams } from "next/navigation";
import { products } from "../../data/products";
import OrderButtons from "./OrderButtons";

export default function ProductDetailPage() {
  // Next.js App Router에서 params는 useParams()로 받아야 함
  const params = useParams();
  const productId = params?.id ? Number(params.id) : null;
  
  const product = products.find((p) => p.id === productId);
  
  if (!productId || !product) {
   return <div style={{ padding: "20px" }}>상품을 찾을 수 없습니다.</div>;
}

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
          <h1 style={{ fontSize: "26px", marginBottom: "10px" }}>
            {product.name}
          </h1>

          <p style={{ fontSize: "20px", color: "#444", marginBottom: "10px" }}>
            가격: {product.price.toLocaleString()}원
          </p>

          {product.height && (
            <p style={{ fontSize: "18px", color: "#555", marginBottom: "10px" }}>
              높이: {product.height}
            </p>
          )}

          {product.desc && (
            <p
              style={{
                fontSize: "17px",
                lineHeight: "1.6",
                marginBottom: "20px",
                whiteSpace: "pre-line",
              }}
            >
              {product.desc}
            </p>
          )}

          <OrderButtons />
        </div>
      </div>

      {/* 구매 안내 */}
      <div style={{ marginTop: "40px" }}>
        <h2 style={{ fontSize: "22px", marginBottom: "10px" }}>
          배송 관련 안내
        </h2>
        <ul style={{ lineHeight: "1.8", color: "#555", fontSize: "16px" }}>
          <li>* 구입금액과 지역 관계없이 무료배송 (단. 산간지역과 섬지역은 예외)</li>
          <li>(단, 희망한 배송시간 3시간 전까지 연락주시면 주문취소가 가능합니다.)</li>
          <li>* 배송시간 : 09시 ~ 20시 / 배송 소요시간 : 3시간 이내</li>
        </ul>

        <h2 style={{ fontSize: "22px", margin: "30px 0 10px" }}>
          교환/환불 관련 안내
        </h2>
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
        <h2 style={{ fontSize: "22px", marginBottom: "10px" }}>
          ★ 원산지 표시 안내 ★
        </h2>

        <img
          src="/origin_table.png"
          alt="원산지 표시 안내"
          style={{ width: "100%", borderRadius: "8px" }}
        />
      </div>
    </div>
  );
}