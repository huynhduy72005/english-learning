function ProgressCard({
  icon,
  title,
  progress
}) {
  return (
    <div className="progress-card">
      <div className="progress-card-icon">
        {icon}
      </div>

      <div className="progress-info">
        <div className="progress-info-title">
          <span>{title}</span>
          <strong>{progress}%</strong>
        </div>

        <div className="progress">
          <div
            className="progress-bar"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default ProgressCard;
