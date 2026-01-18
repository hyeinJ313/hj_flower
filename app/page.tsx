"use client";

import Link from "next/link";

export default function Home() {
  return (
    <div style={{ width: "100%", padding: "40px 20px" }}>
      {/* 히어로 섹션 */}
      <section
        style={{
          width: "100%",
          height: "300px",
          borderRadius: "12px",
          backgroundImage: "url('/main_banner.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          fontSize: "32px",
          fontWeight: "bold",
          textShadow: "0 2px 8px rgba(0,0,0,0.4)",
          marginBottom: "40px",
        }}
      >
        현주꽃방
      </section>

      {/* 소개 문구 */}
      <section style={{ textAlign: "center", marginBottom: "40px" }}>
        <h2 style={{ fontSize: "24px", marginBottom: "10px" }}>
          신선한 꽃과 정성 가득한 디자인
        </h2>
        <p style={{ fontSize: "16px", color: "#555", lineHeight: "1.6" }}>
          전국 어디든 빠르고 안전하게 배송해드려요.  
          <br />
          축하, 근조, 기념일, 개업 등 모든 상황에 맞는 꽃을 준비해드립니다.
        </p>
      </section>

      {/* 주요 카테고리 바로가기 */}
      <section style={{ marginTop: "40px" }}>
        <h3 style={{ fontSize: "20px", marginBottom: "20px", textAlign: "center" }}>
          인기 카테고리
        </h3>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))",
            gap: "20px",
          }}
        >
          {[
            { name: "동양난", link: "/products/orchid-east", img: "/east10_1.jpg" },
            { name: "서양난", link: "/products/orchid-west", img: "/west10_1.jpg" },
            { name: "꽃다발", link: "/products/bouquet", img: "/bouquet1.jpg" },
            { name: "꽃바구니", link: "/products/flower-basket", img: "/flower1.jpg" },
            { name: "과일바구니", link: "/products/fruit-basket", img: "/fruit1.jpg" },
            { name: "근조화환", link: "/products/wreath-funeral", img: "/funeral1.jpg" },
          ].map((item) => (
            <Link
              key={item.name}
              href={item.link}
              style={{
                textDecoration: "none",
                color: "inherit",
              }}
            >
              <div
                style={{
                  border: "1px solid #ddd",
                  borderRadius: "10px",
                  overflow: "hidden",
                  background: "white",
                  cursor: "pointer",
                  transition: "0.2s",
                }}
              >
                <img
                  src={item.img}
                  alt={item.name}
                  style={{
                    width: "100%",
                    height: "120px",
                    objectFit: "cover",
                  }}
                />
                <div
                  style={{
                    padding: "10px",
                    textAlign: "center",
                    fontSize: "16px",
                    fontWeight: "500",
                  }}
                >
                  {item.name}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
