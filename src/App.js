import face1 from "./images/face1.jpg";
import face2 from "./images/face2.JPG";
import face3 from "./images/face3.JPG";
import face4 from "./images/face4.JPG";
import face5 from "./images/face5.jpg";
import face6 from "./images/face6.JPG";
import video1 from "./images/video.mp4";

export default function ProfilePage() {
  const name = "笠原 菜月";

  const galleryImages = [
    { src: face2, alt: "プライベート画像1", position: "center center" },
    { src: face3, alt: "プライベート画像2", position: "center top" },
    { src: face4, alt: "プライベート画像3", position: "center center" },
    { src: face5, alt: "プライベート画像4", position: "center top" },
  ];

  return (
    <>
      <style>{`
        * {
          box-sizing: border-box;
        }

        html, body, #root {
          margin: 0;
          padding: 0;
          min-height: 100%;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Hiragino Sans",
            "Hiragino Kaku Gothic ProN", "Noto Sans JP", "Yu Gothic", sans-serif;
          background: #f4f6fb;
        }

        .page {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
        }

        .section {
          width: 100%;
          padding: 24px;
        }

        .work-section {
          background: linear-gradient(135deg, #1e3c72, #2a5298);
          color: white;
        }

        .private-section {
          position: relative;
          background-image: url(${face6});
          background-size: cover;
          background-position: center;
          color: white;
        }

        .private-overlay {
          position: absolute;
          inset: 0;
          background: rgba(0, 0, 0, 0.55);
        }

        .container {
          position: relative;
          z-index: 1;
          max-width: 1000px;
          margin: 0 auto;
        }

        .top-grid {
          display: grid;
          grid-template-columns: 180px 1fr;
          gap: 24px;
          align-items: center;
        }

        .work-photo {
          width: 140px;
          height: 140px;
          border-radius: 50%;
          object-fit: cover;
          object-position: center top;
          display: block;
          margin: 0 auto;
          border: 4px solid white;
          box-shadow: 0 6px 18px rgba(0, 0, 0, 0.3);
        }

        .name {
          font-size: 30px;
          font-weight: 700;
          margin: 0 0 12px 0;
        }

        .intro {
          font-size: 16px;
          line-height: 1.8;
          margin: 0 0 16px 0;
        }

        .card-title {
          font-size: 22px;
          font-weight: 700;
          margin: 0 0 12px 0;
        }

        .list {
          margin: 0;
          padding-left: 22px;
          line-height: 1.8;
          font-size: 16px;
        }

        .private-card {
          background: rgba(255, 255, 255, 0.93);
          color: #222;
          border-radius: 16px;
          padding: 22px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.25);
        }

        .private-title {
          font-size: 24px;
          font-weight: 700;
          margin: 0 0 16px 0;
          text-align: center;
        }

        .video-wrap {
          margin-bottom: 16px;
        }

        .video {
          width: 100%;
          max-height: 220px;
          border-radius: 12px;
          background: black;
          display: block;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.25);
        }

        .media-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
          margin-bottom: 18px;
        }

        .gallery-image {
          width: 100%;
          height: 150px;
          object-fit: cover;
          border-radius: 12px;
          display: block;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.25);
        }

        .next-match {
          margin-top: 20px;
          text-align: center;
        }

        .next-match-label {
          font-size: 14px;
          color: #555;
          margin-bottom: 10px;
        }

        .next-match-link {
          display: inline-block;
          background: #1e3c72;
          color: #ffffff;
          text-decoration: none;
          padding: 14px 18px;
          border-radius: 12px;
          font-weight: 700;
          font-size: 16px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.25);
          transition: transform 0.15s ease, opacity 0.15s ease;
        }

        .next-match-link:hover {
          opacity: 0.92;
          transform: translateY(-1px);
        }

        .next-match-link:active {
          transform: translateY(0);
        }

        @media (max-width: 768px) {
          .section {
            padding: 18px;
          }

          .top-grid {
            grid-template-columns: 1fr;
            text-align: center;
          }

          .work-photo {
            width: 120px;
            height: 120px;
          }

          .name {
            font-size: 26px;
          }

          .intro {
            font-size: 15px;
          }

          .card-title,
          .private-title {
            font-size: 20px;
          }

          .list {
            font-size: 15px;
            line-height: 1.7;
          }

          .gallery-image {
            height: 130px;
          }

          .video {
            max-height: 190px;
          }

          .next-match-link {
            width: 100%;
            font-size: 15px;
          }
        }
      `}</style>

      <div className="page">
        {/* ===== 上：仕事 ===== */}
        <section className="section work-section">
          <div className="container">
            <div className="top-grid">
              <div>
                <img
                  src={face1}
                  alt="仕事用プロフィール写真"
                  className="work-photo"
                />
              </div>

              <div>
                <h1 className="name">{name}</h1>

                <p className="intro">
                  このページをご覧いただきありがとうございます。
                  少しでも私のことを知っていただき、声をかけていただけたら嬉しいです。
                </p>

                <h2 className="card-title">業務履歴</h2>
                <ul className="list">
                  <li>砂防施設の長寿命化</li>
                  <li>流砂観測</li>
                  <li>砂防施設の補修設計</li>
                  <li>土砂・洪水氾濫業務等</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ===== 下：プライベート ===== */}
        <section className="section private-section">
          <div className="private-overlay" />

          <div className="container">
            <div className="private-card">
              <h2 className="private-title">趣味：ブラジリアン柔術</h2>

              <div className="video-wrap">
                <video
                  className="video"
                  controls
                  muted
                  playsInline
                  preload="metadata"
                >
                  <source src={video1} type="video/mp4" />
                  お使いのブラウザは動画再生に対応していません。
                </video>
              </div>

              <div className="media-grid">
                {galleryImages.map((img, i) => (
                  <img
                    key={i}
                    src={img.src}
                    alt={img.alt}
                    className="gallery-image"
                    style={{ objectPosition: img.position }}
                  />
                ))}
              </div>

              <ul className="list">
                <li>SJJIF World 2025 アダルト女子 優勝</li>
                <li>SJJIF アジア 2025 アダルト女子 優勝</li>
              </ul>

              <div className="next-match">
                <div className="next-match-label">次戦：2026年7月8日</div>
                <a
                  className="next-match-link"
                  href="https://ibjjf.com/events/asian-jiu-jitsu-ibjjf-championship-2026"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  IBJJFアジア選手権を見る →
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}