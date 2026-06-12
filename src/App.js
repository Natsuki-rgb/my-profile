import face1 from "./images/img1.jpg";
import face2 from "./images/img2.jpg";

export default function ProfilePage() {
  const name = "笠原 菜月";
  const bio = "Copilotで作りました";

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #eef2ff, #f8fafc)",
        fontFamily: "sans-serif",
        padding: "20px",
      }}
    >
      <div
        style={{
          maxWidth: "600px",
          margin: "0 auto",
          background: "#fff",
          borderRadius: "12px",
          padding: "30px",
          textAlign: "center",
          boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
        }}
      >
        <h1>プロフィール</h1>

        {/* 画像表示 */}
        <div style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
          <img
            src={face1}
            alt="プロフィール画像1"
            style={{
              width: "120px",
              height: "120px",
              borderRadius: "50%",
              objectFit: "cover",
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
            }}
          />
        </div>

        <h2 style={{ marginTop: "20px" }}>{name}</h2>
        <p>{bio}</p>
      </div>
    </div>
  );
}