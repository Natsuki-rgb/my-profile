import { useState } from "react";

export default function ProfilePage() {
  const [name, setName] = useState("あなたの名前");
  const [bio, setBio] = useState("ここに自己紹介を書きます。");
  const [image, setImage] = useState(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div style={{ fontFamily: "sans-serif", padding: "20px" }}>
      <h1>プロフィールページ作成</h1>

      <div style={{ marginBottom: "20px" }}>
        <h2>編集エリア</h2>

        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="名前"
          style={{ padding: "8px", width: "100%", marginBottom: "10px" }}
        />

        <textarea
          value={bio}
          onChange={(e) => setBio(e.target.value)}
          placeholder="自己紹介"
          rows={5}
          style={{ padding: "8px", width: "100%", marginBottom: "10px" }}
        />

        <input type="file" accept="image/*" onChange={handleImageUpload} />
      </div>

      <hr />

      <div style={{ marginTop: "20px", textAlign: "center" }}>
        <h2>プレビュー（公開画面）</h2>

        {image && (
          <img
            src={image}
            alt="profile"
            style={{ width: "150px", height: "150px", borderRadius: "50%", objectFit: "cover" }}
          />
        )}


        <h3>{name}</h3>
        <p style={{ whiteSpace: "pre-wrap" }}>{bio}</p>
      </div>
    </div>
  );
}