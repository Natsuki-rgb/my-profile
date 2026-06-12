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
