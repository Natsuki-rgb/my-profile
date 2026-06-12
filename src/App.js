import { useEffect, useMemo, useState } from "react";

export default function ProfilePage() {
  // 初期データ
  const defaultProfile = useMemo(() => ({
    name: "笠原 菜月",
    bio: "ここに自己紹介を書きます。",
    image: null,
  }), []);

  // ここを自分のパスワードに変更！
  const ADMIN_PASSWORD = "Natsuki2026!";

  const [profile, setProfile] = useState(defaultProfile);
  const [draft, setDraft] = useState(defaultProfile);
  const [isAdmin, setIsAdmin] = useState(false);
  const [message, setMessage] = useState("");

  // ローカル保存の読み込み
  useEffect(() => {
    const saved = localStorage.getItem("profileDraft");
    if (!saved) return;

    try {
      const parsed = JSON.parse(saved);
      setProfile(parsed);
      setDraft(parsed);
    } catch (error) {
      console.error("読み込み失敗", error);
    }
  }, [defaultProfile]);

  // 画像アップロード
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      setDraft((prev) => ({ ...prev, image: reader.result }));
    };
    reader.readAsDataURL(file);
  };

  // ログイン
  const handleAdminLogin = () => {
    const input = window.prompt("パスワードを入力");

    if (input === ADMIN_PASSWORD) {
      setIsAdmin(true);
      setMessage("管理者モードON");
    } else if (input !== null) {
      setMessage("パスワード違います");
    }
  };

  // 保存
  const handleSave = () => {
    setProfile(draft);
    localStorage.setItem("profileDraft", JSON.stringify(draft));
    setMessage("この端末に保存しました");
  };

  // リセット
  const handleReset = () => {
    setProfile(defaultProfile);
    setDraft(defaultProfile);
    localStorage.removeItem("profileDraft");
    setMessage("リセットしました");
  };

  return (
    <div style={{
      minHeight: "100vh",
      background: "linear-gradient(135deg, #eef2ff, #f8fafc)",
      fontFamily: "sans-serif",
      padding: "20px"
    }}>
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>

        {/* ログインボタン */}
        <div style={{ textAlign: "right" }}>
          {!isAdmin ? (
            <button onClick={handleAdminLogin}>管理者ログイン</button>
          ) : (
            <button onClick={() => setIsAdmin(false)}>閉じる</button>
          )}
        </div>

        {/* メッセージ */}
        {message && <p>{message}</p>}

        <div style={{
          display: "grid",
          gridTemplateColumns: isAdmin ? "1fr 1fr" : "1fr",
          gap: "20px"
        }}>

          {/* 編集エリア（自分だけ） */}
          {isAdmin && (
            <div style={{
              background: "#fff",
              padding: "20px",
              borderRadius: "10px"
            }}>
              <h2>編集</h2>

              <input
                value={draft.name}
                onChange={(e) => setDraft({ ...draft, name: e.target.value })}
                placeholder="名前"
              />

              <br />

              <textarea
                value={draft.bio}
                onChange={(e) => setDraft({ ...draft, bio: e.target.value })}
              />

              <br />

              <input type="file" onChange={handleImageUpload} />

              <br />

              <button onClick={handleSave}>保存</button>
              <button onClick={handleReset}>リセット</button>
            </div>
          )}

          {/* 公開ビュー */}
          <div style={{
            background: "#fff",
            padding: "30px",
            borderRadius: "10px",
            textAlign: "center"
          }}>
            {profile.image && (
              <img
                src={profile.image}
                style={{
                  width: "120px",
                  height: "120px",
                  borderRadius: "50%"
                }}
              />
            )}

            <h2>{profile.name}</h2>
            <p style={{ whiteSpace: "pre-wrap" }}>{profile.bio}</p>
          </div>

        </div>
      </div>
    </div>
  );
}