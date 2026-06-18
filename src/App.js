import face1 from "./images/face1.jpg";
import face2 from "./images/face2.JPG";
import face3 from "./images/face3.JPG";
import face4 from "./images/face4.JPG";
import face5 from "./images/face5.jpg";
import face6 from "./images/face6.JPG";
import video1 from "./images/video.mp4";

export default function ProfilePage() {
  const name = "笠原 菜月";

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        fontFamily: "sans-serif",
        overflow: "hidden",
      }}
    >
      {/* ===== 上：仕事 ===== */}
      <div
        style={{
          flex: 1,
          background: "linear-gradient(135deg, #1e3c72, #2a5298)",
          color: "white",
          display: "flex",
          justifyContent: "center",
          padding: "30px",
        }}
      >
        <div style={{ maxWidth: "500px", width: "100%" }}>
          <div style={{ textAlign: "center" }}>
            {face1}
            <h2 style={{ fontSize: "28px" }}>{name}</h2>
          </div>

          <p style={{ lineHeight: "1.8", fontSize: "16px" }}>
            このページをご覧いただきありがとうございます。
            少しでも私のことを知っていただき、声をかけていただけたら嬉しいです。
          </p>

          <div style={{ marginTop: "20px" }}>
            <h3 style={{ fontSize: "20px" }}>業務履歴</h3>
            <ul style={{ lineHeight: "1.8", fontSize: "16px" }}>
              <li>砂防施設の長寿命化</li>
              <li>流砂観測</li>
              <li>砂防施設の補修設計</li>
              <li>土砂・洪水氾濫業務等</li>
            </ul>
          </div>
        </div>
      </div>

      {/* ===== 下：プライベート ===== */}
      <div
        style={{
          flex: 1,
          backgroundImage: `url(${face6})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "25px",
        }}
      >
        {/* 暗フィルター */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "rgba(0,0,0,0.55)",
          }}
        />

        {/* コンテンツ */}
        <div
          style={{
            position: "relative",
            maxWidth: "520px",
            width: "100%",
            background: "rgba(255,255,255,0.92)",
            padding: "20px",
            borderRadius: "12px",
            textAlign: "center",
          }}
        >
          <h3 style={{ fontSize: "22px", marginBottom: "15px" }}>
            趣味：ブラジリアン柔術
          </h3>

          {/* ✅ 動画（メイン） */}
          {video1}

          {/* ✅ 写真（2×2） */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "10px",
              marginBottom: "15px",
            }}
          >
            {[face2, face3, face4, face5].map((img, i) => (
              {img}
            ))}
          </div>

          <ul style={{ lineHeight: "1.8", fontSize: "15px", textAlign: "left" }}>
            <li>SJJF World 2025 アダルト女子 優勝</li>
            <li>SJJF アジア 2025 アダルト女子 優勝</li>
          </ul>
        </div>
      </div>
    </div>
  );
}