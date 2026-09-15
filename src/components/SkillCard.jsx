import { Link } from "react-router-dom";

function SkillCard({
  icon,
  title,
  vietnamese,
  description,
  progress,
  color,
  path
}) {
  return (
    <Link
      to={path}
      className={`skill-card ${color}`}
    >
      <div className="skill-icon">
        {icon}
      </div>

      <div className="skill-content">
        <div className="skill-title">
          <div>
            <h3>{title}</h3>
            <span>{vietnamese}</span>
          </div>

          <strong>{progress}%</strong>
        </div>

        <p>{description}</p>

        <div className="progress">
          <div
            className="progress-bar"
            style={{ width: `${progress}%` }}
          ></div>
        </div>

        <span className="continue">
          Tiếp tục học →
        </span>
      </div>
    </Link>
  );
}

export default SkillCard;