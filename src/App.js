import face1 from "./images/img1.jpg";
import face2 from "./images/img2.jpg";

export default function ProfilePage() {
  const name = "笠原 菜月";

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #667eea, #764ba2)",
        fontFamily: "sans-serif",
        padding: "20px",
        color: "#333",
      }}
    >
      <div
        style={{
          maxWidth: "700px",
          margin: "0 auto",
          background: "#fff",
          borderRadius: "16px",
          padding: "30px",
          boxShadow: "0 15px 40px rgba(0,0,0,0.2)",
        }}
      >
        {/* タイトル */}
        <h1 style={{ textAlign: "center", marginBottom: "20px" }}>
          プロフィール
        </h1>

        {/* 画像 */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "15px",
            marginBottom: "20px",
          }}
        >
          <img
            src={face1}
            alt="プロフィール画像1"
            style={{
              width: "120px",
              height: "120px",
              borderRadius: "50%",
              objectFit: "cover",
              border: "3px solid #eee",
            }}
          />
          <img
            src={face2}
            alt="プロフィール画像2"
            style={{
              width: "120px",
              height: "120px",
              borderRadius: "50%",
              objectFit: "cover",
              border: "3px solid #eee",
            }}
          />
        </div>

        {/* 名前 */}
        <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
          {name}
        </h2>

        {/* 自己紹介 */}
        <div style={{ marginBottom: "30px" }}>
          <h3
            style={{
              borderBottom: "2px solid #667eea",
              paddingBottom: "5px",
              marginBottom: "10px",
            }}
          >
            自己紹介
          </h3>
          <p style={{ lineHeight: "1.8" }}>
            このページをご覧いただきありがとうございます。
            少しでも私のことを知っていただき、声をかけていただけたら嬉しいです。
          </p>
        </div>

        {/* 業務履歴 */}
        <div style={{ marginBottom: "30px" }}>
          <h3
            style={{
              borderBottom: "2px solid #764ba2",
              paddingBottom: "5px",
              marginBottom: "10px",
            }}
          >
            業務履歴
          </h3>

          <ul style={{ paddingLeft: "20px", lineHeight: "1.8" }}>
            <li>砂防施設の長寿命化</li>
            <li>流砂観測</li>
            <li>砂防施設の補修設計</li>
            <li>土砂・洪水氾濫業務等</li>
          </ul>
        </div>

        {/* 趣味 */}
        <div>
          <h3
            style={{
              borderBottom: "2px solid #667eea",
              paddingBottom: "5px",
              marginBottom: "10px",
            }}
          >
            趣味
          </h3>

          <ul style={{ paddingLeft: "20px", lineHeight: "1.8" }}>
            <li>ブラジリアン柔術</li>
            <li>SJJF World 2025 アダルト女子　優勝</li>
            <li>SJJF アジア 2025 アダルト女子　優勝</li>
          </ul>
        </div>
      </div>
    </div>
  );
}