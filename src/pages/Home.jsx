import { Link } from "react-router-dom";
import {
  ArrowRight,
  Play,
  CheckCircle
} from "lucide-react";

function Home() {
  return (
    <div className="home-page">

      <section className="hero">
        <div className="hero-content">
          <span className="hero-badge">
            🚀 Học tiếng Anh mỗi ngày
          </span>

          <h1>
            Chinh phục tiếng Anh
            <br />
            <span>theo cách của bạn</span>
          </h1>

          <p>
            Luyện tập 4 kỹ năng Nghe, Nói, Đọc,
            Viết với những bài học đơn giản,
            dễ hiểu và thú vị.
          </p>

          <div className="hero-buttons">
            <Link
              to="/dashboard"
              className="primary-button"
            >
              Bắt đầu học
              <ArrowRight size={18} />
            </Link>

            <Link
              to="/listening"
              className="secondary-button"
            >
              <Play size={18} />
              Học thử
            </Link>
          </div>

          <div className="hero-features">
            <span>
              <CheckCircle size={17} />
              4 kỹ năng
            </span>

            <span>
              <CheckCircle size={17} />
              Bài học miễn phí
            </span>

            <span>
              <CheckCircle size={17} />
              Học mọi lúc
            </span>
          </div>
        </div>

        <div className="hero-illustration">
          <div className="hero-circle">
            <div className="book-emoji">
              📚
            </div>

            <div className="floating-card card-one">
              🎧 Listening
            </div>

            <div className="floating-card card-two">
              🗣️ Speaking
            </div>

            <div className="floating-card card-three">
              📖 Reading
            </div>

            <div className="floating-card card-four">
              ✍️ Writing
            </div>
          </div>
        </div>
      </section>

      <section className="home-section">
        <div className="section-heading">
          <div>
            <span className="section-label">
              LEARNING SKILLS
            </span>

            <h2>
              Phát triển toàn diện 4 kỹ năng
            </h2>
          </div>
        </div>

        <div className="four-skills">
          <div className="home-skill">
            <div>🎧</div>
            <h3>Listening</h3>
            <p>
              Nghe và hiểu tiếng Anh trong
              các tình huống thực tế.
            </p>
          </div>

          <div className="home-skill">
            <div>🗣️</div>
            <h3>Speaking</h3>
            <p>
              Tự tin giao tiếp và cải thiện
              khả năng phát âm.
            </p>
          </div>

          <div className="home-skill">
            <div>📖</div>
            <h3>Reading</h3>
            <p>
              Đọc hiểu nhanh và mở rộng
              vốn từ vựng.
            </p>
          </div>

          <div className="home-skill">
            <div>✍️</div>
            <h3>Writing</h3>
            <p>
              Luyện viết câu và đoạn văn
              chính xác.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;