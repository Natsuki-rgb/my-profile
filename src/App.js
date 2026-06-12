import { useState } from "react";

export default function ProfilePage() {
  const [images, setImages] = useState([]);

  const name = "笠原 菜月";
  const bio = "Copilotで作りました";

  // 画像アップロード（最大2枚）
  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files).slice(0, 2);

    const readers = files.map((file) => {
      return new Promise((resolve) => {
        const reader = new FileReader();
        reader.onloadend = () => resolve(reader.result);
        reader.readAsDataURL(file);
      });
    });

    Promise.all(readers).then((results) => {
      setImages(results);
    });
  };

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

        {/* 画像アップロード */}
        <input
          type="file"
          accept="image/*"
          multiple
          onChange={handleImageUpload}
          style={{ marginBottom: "20px" }}
        />

        {/* 画像表示 */}
        <div style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`プロフィール画像${index + 1}`}
              style={{
                width: "120px",
                height: "120px",
                borderRadius: "50%",
                objectFit: "cover",
              }}
            />
          ))}
        </div>

        {/* 名前 */}
        <h2 style={{ marginTop: "20px" }}>{name}</h2>

        {/* 自己紹介 */}
        <p>{bio}</p>
      </div>
    </div>
  );
}