import face1 from "./images/face1.jpg";
import face2 from "./images/face2.JPG";
import face3 from "./images/face3.JPG";
import face4 from "./images/face4.JPG";
import face5 from "./images/face5.jpg";


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
            <img
              src={face1}
              alt="仕事用プロフィール"
              style={{
                width: "130px",
                height: "130px",
                borderRadius: "50%",
                objectFit: "cover",
                border: "4px solid white",
                marginBottom: "15px",
              }}
            />
            <h2 style={{ fontSize: "28px" }}>{name}</h2>
          </div>

          <p style={{ lineHeight: "1.8", fontSize: "16px" }}>
            このページをご覧いただきありがとうございます。
            少しでも私のことを知っていただき、声をかけていただけたら嬉しいです。
          </p>

          <div style={{ marginTop: "20px" }}>
            <h3 style={{ fontSize: "20px", marginBottom: "10px" }}>
              業務履歴
            </h3>
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
          backgroundImage: `url(${face3})`, // ←ここ変更
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "30px",
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
            maxWidth: "500px",
            width: "100%",
            background: "rgba(255,255,255,0.92)",
            padding: "25px",
            borderRadius: "12px",
            textAlign: "center",
          }}
        >
          <h3 style={{ fontSize: "22px", marginBottom: "20px" }}>
            趣味：ブラジリアン柔術
          </h3>

          {/* ✅ 写真：2×2レイアウト */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "10px",
              marginBottom: "20px",
            }}
          >
            {[face2, face3, face4, face5].map((img, i) => (
              <img
                key={i}
                src={img}
                alt={`プライベート画像${i}`}
                style={{
                  width: "100%",
                  height: "120px",
                  objectFit: "cover",
                  borderRadius: "10px",
                }}
              />
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
