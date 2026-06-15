import face1 from "./images/img1.jpg";
import face2 from "./images/img2.jpg";

export default function ProfilePage() {
  const name = "笠原 菜月";

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        fontFamily: "sans-serif",
      }}
    >
      {/* ===== 上段：仕事 ===== */}
      <div
        style={{
          flex: 1,
          background: "linear-gradient(135deg, #1e3c72, #2a5298)",
          color: "white",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "20px",
          textAlign: "center",
        }}
      >
        <img
          src={face1}
          alt="仕事用プロフィール"
          style={{
            width: "110px",
            height: "110px",
            borderRadius: "50%",
            objectFit: "cover",
            border: "3px solid white",
            marginBottom: "10px",
          }}
        />

        <h2>{name}</h2>

        <div style={{ marginTop: "10px", textAlign: "left", fontSize: "14px" }}>
          <b>業務履歴</b>
          <ul style={{ lineHeight: "1.6" }}>
            <li>砂防施設の長寿命化</li>
            <li>流砂観測</li>
            <li>砂防施設の補修設計</li>
            <li>土砂・洪水氾濫業務等</li>
          </ul>
        </div>
      </div>

      {/* ===== 下段：プライベート ===== */}
      <div
        style={{
          flex: 1,
          background: "#f8fafc",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "20px",
          textAlign: "center",
        }}
      >
        <img
          src={face2}
          alt="プライベート"
          style={{
            width: "110px",
            height: "110px",
            borderRadius: "50%",
            objectFit: "cover",
            marginBottom: "10px",
          }}
        />

        <h3>趣味・実績</h3>

        <ul style={{ lineHeight: "1.6", textAlign: "left", fontSize: "14px" }}>
          <li>ブラジリアン柔術</li>
          <li>SJJF World 2025 アダルト女子 優勝</li>
          <li>SJJF アジア 2025 アダルト女子 優勝</li>
        </ul>
      </div>
    </div>
  );
}
