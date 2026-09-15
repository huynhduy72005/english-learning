import { Link } from "react-router-dom";
import {
  Flame,
  Clock,
  Trophy,
  ArrowRight
} from "lucide-react";

import SkillCard from "../components/SkillCard";
import ProgressCard from "../components/ProgressCard";
import { skills } from "../data/data";

function Dashboard() {
  return (
    <div className="dashboard">

      <div className="page-header">
        <div>
          <span className="welcome">
            Chào buổi tối 👋
          </span>

          <h1>
            Sẵn sàng học tiếng Anh chưa?
          </h1>

          <p>
            Hãy dành 15 phút hôm nay để
            cải thiện khả năng tiếng Anh.
          </p>
        </div>

        <Link
          to="/quiz"
          className="primary-button"
        >
          Làm Quiz
          <ArrowRight size={18} />
        </Link>
      </div>

      <div className="stats-grid">

        <div className="stat-card">
          <div className="stat-icon orange">
            <Flame size={22} />
          </div>

          <div>
            <span>Chuỗi ngày học</span>
            <strong>7 ngày</strong>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon blue">
            <Clock size={22} />
          </div>

          <div>
            <span>Thời gian học</span>
            <strong>12 giờ</strong>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon green">
            <Trophy size={22} />
          </div>

          <div>
            <span>Bài đã hoàn thành</span>
            <strong>38 bài</strong>
          </div>
        </div>

      </div>

      <section className="dashboard-section">
        <div className="section-heading">
          <div>
            <span className="section-label">
              YOUR SKILLS
            </span>

            <h2>
              4 kỹ năng của bạn
            </h2>
          </div>
        </div>

        <div className="skills-grid">
          {skills.map((skill) => (
            <SkillCard
              key={skill.id}
              {...skill}
              path={`/${skill.title.toLowerCase()}`}
            />
          ))}
        </div>
      </section>

      <section className="dashboard-bottom">

        <div className="recent-card">
          <div className="card-header">
            <div>
              <h3>Tiến độ học tập</h3>
              <span>
                Cập nhật hôm nay
              </span>
            </div>

            <strong className="total-progress">
              73%
            </strong>
          </div>

          <ProgressCard
            icon="🎧"
            title="Listening"
            progress={75}
          />

          <ProgressCard
            icon="🗣️"
            title="Speaking"
            progress={60}
          />

          <ProgressCard
            icon="📖"
            title="Reading"
            progress={85}
          />

          <ProgressCard
            icon="✍️"
            title="Writing"
            progress={70}
          />
        </div>

        <div className="daily-card">
          <span className="daily-label">
            BÀI HỌC HÔM NAY
          </span>

          <div className="daily-icon">
            🎯
          </div>

          <h3>
            Daily Conversation
          </h3>

          <p>
            Học cách giao tiếp trong những
            tình huống hàng ngày.
          </p>

          <Link
            to="/speaking"
            className="dark-button"
          >
            Bắt đầu học
            <ArrowRight size={17} />
          </Link>
        </div>

      </section>
    </div>
  );
}

export default Dashboard;