export default function ContactPage() {
  return (
    <div
      style={{
        paddingTop: "120px",
        padding: "40px 20px",
        maxWidth: "800px",
        margin: "0 auto",
      }}
    >
      <h1 style={{ fontSize: "28px", marginBottom: "20px" }}>문의</h1>

      <p style={{ fontSize: "18px", lineHeight: "1.6", marginBottom: "10px" }}>
        아래 연락처로 문의하시면 빠르게 답변드리겠습니다.
      </p>

      <div style={{ fontSize: "18px", lineHeight: "1.8" }}>
        <div>공정거래위원회 고시 제2000-1호에 따른 사업자 등록번호 안내 : 217-11-85054</div>
        <div>상호 : 현주꽃방, 대표자 : 이순이 외 1명 정현주</div>
        <div>📞 전화번호: 02-943-3877  FAX: 02-912-3877  이메일: hjhj3877@naver.com</div>
        <div>💬 카카오톡: hjflower</div>
        <div>💳 계좌번호: 국민은행 092102-04-261455</div>
      </div>
    </div>
  );
}