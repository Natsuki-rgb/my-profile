import face1 from "./images/img1.jpg";
import face2 from "./images/img2.jpg";

export default function ProfilePage() {
  const name = "笠原 菜月";

  return (
    <div style={{ fontFamily: "sans-serif" }}>

      {/* ===== 上部：仕事プロフィール ===== */}
      <div
        style={{
          height: "100vh",
          background: "linear-gradient(135deg, #1e3c72, #2a5298)",
          color: "#fff",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          padding: "20px",
        }}
      >
        <img
          src={face1}
          alt="仕事用プロフィール"
          style={{
            width: "140px",
            height: "140px",
            borderRadius: "50%",
            objectFit: "cover",
            marginBottom: "15px",
            border: "4px solid white",
          }}
        />

        <h1>{name}</h1>

        <p style={{ maxWidth: "500px", lineHeight: "1.8" }}>
          このページをご覧いただきありがとうございます。
          少しでも私のことを知っていただき、声をかけていただけたら嬉しいです。
        </p>

        <div style={{ marginTop: "30px", textAlign: "left" }}>
          <h3 style={{ borderBottom: "1px solid white" }}>業務履歴</h3>
          <ul style={{ lineHeight: "1.8" }}>
            <li>砂防施設の長寿命化</li>
            <li>流砂観測</li>
            <li>砂防施設の補修設計</li>
            <li>土砂・洪水氾濫業務等</li>
          </ul>
        </div>

        {/* スクロール誘導 */}
        <div style={{ marginTop: "40px", fontSize: "14px", opacity: 0.8 }}>
          ↓ スクロールするとプライベートが見れます
        </div>
      </div>

      {/* ===== 下部：プライベート ===== */}
      <div
        style={{
          minHeight: "100vh",
          background: "#f8fafc",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          padding: "40px 20px",
        }}
      >
        <img
          src={face2}
          alt="プライベート"
          style={{
            width: "140px",
            height: "140px",
            borderRadius: "50%",
            objectFit: "cover",
            marginBottom: "20px",
          }}
        />

        <h2>趣味・プライベート</h2>

        <ul style={{ lineHeight: "1.8", textAlign: "left" }}>
          <li>ブラジリアン柔術</li>
          <li>SJJF World 2025 アダルト女子 優勝</li>
          <li>SJJF アジア 2025 アダルト女子 優勝</li>
        </ul>
      </div>

    </div>
  );
}