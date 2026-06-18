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
    <>
      <style>{`
        * {
          box-sizing: border-box;
        }

        body {
          margin: 0;
          font-family: sans-serif;
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

        .profile-image {
          width: 140px;
          height: 140px;
          border-radius: 50%;
          object-fit: cover;
          display: block;
          margin: 0 auto;
          border: 4px solid white;
          box-shadow: 0 6px 18px rgba(0,0,0,0.3);
        }

        .name {
          font-size: 30px;
          font-weight: bold;
          margin: 0 0 12px 0;
        }

        .intro {
          font-size: 16px;
          line-height: 1.8;
          margin: 0 0 16px 0;
        }

        .card-title {
          font-size: 22px;
          font-weight: bold;
          margin: 0 0 12px 0;
        }

        .list {
          margin: 0;
          padding-left: 22px;
          line-height: 1.8;
          font-size: 16px;
        }

        .private-card {
          background: rgba(255, 255, 255, 0.92);
          color: #222;
          border-radius: 16px;
          padding: 22px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.25);
        }

        .private-header {
          margin-bottom: 16px;
        }

        .private-title {
          font-size: 24px;
          font-weight: bold;
          margin: 0;
          text-align: center;
        }

        .media-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
          margin-top: 16px;
          margin-bottom: 18px;
        }

        .gallery-image {
          width: 100%;
          height: 150px;
          object-fit: cover;
          border-radius: 12px;
          display: block;
          box-shadow: 0 4px 12px rgba(0,0,0,0.25);
        }

        .video-wrap {
          margin-top: 12px;
          margin-bottom: 16px;
        }

        .video {
          width: 100%;
          max-height: 220px;
          border-radius: 12px;
          background: black;
          display: block;
          box-shadow: 0 4px 12px rgba(0,0,0,0.25);
        }

        @media (max-width: 768px) {
          .section {
            padding: 18px;
          }

          .top-grid {
            grid-template-columns: 1fr;
            text-align: center;
          }

          .profile-image {
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
            height: 120px;
          }

          .video {
            max-height: 180px;
          }
        }
      `}</style>

      <div className="page">
        {/* ===== 仕事 ===== */}
        <section className="section work-section">
          <div className="container">
            <div className="top-grid">
              <div>
                <img
                  src={face1}
                  alt="仕事用プロフィール写真"
                  className="profile-image"
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

        {/* ===== プライベート ===== */}
        <section className="section private-section">
          <div className="private-overlay" />

          <div className="container">
            <div className="private-card">
              <div className="private-header">
                <h2 className="private-title">趣味：ブラジリアン柔術</h2>
              </div>

              <div className="video-wrap">
                <video
                  className="video"
                  src={video1}
                  controls
                  playsInline
                  preload="metadata"
                >
                  お使いのブラウザは動画再生に対応していません。
                </video>
              </div>

              <div className="media-grid">
                <img
                  src={face2}
                  alt="ブラジリアン柔術の写真1"
                  className="gallery-image"
                />
                <img
                  src={face3}
                  alt="ブラジリアン柔術の写真2"
                  className="gallery-image"
                />
                <img
                  src={face4}
                  alt="ブラジリアン柔術の写真3"
                  className="gallery-image"
                />
                <img
                  src={face5}
                  alt="ブラジリアン柔術の写真4"
                  className="gallery-image"
                />
              </div>

              <ul className="list">
                <li>SJJF World 2025 アダルト女子 優勝</li>
                <li>SJJF アジア 2025 アダルト女子 優勝</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}