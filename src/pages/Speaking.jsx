import { useState } from "react";
import {
  Mic,
  Volume2,
  RotateCcw
} from "lucide-react";

function Speaking() {
  const [recording, setRecording] = useState(false);

  return (
    <div className="lesson-page">

      <div className="lesson-header">
        <div>
          <span className="lesson-label">
            🗣️ SPEAKING
          </span>

          <h1>
            Daily Conversation
          </h1>

          <p>
            Luyện nói những câu giao tiếp
            thông dụng hàng ngày.
          </p>
        </div>

        <div className="lesson-level">
          Beginner
        </div>
      </div>

      <div className="speaking-card">

        <span className="question-number">
          SPEAKING PRACTICE
        </span>

        <h2>
          What do you usually do in the morning?
        </h2>

        <div className="translation">
          Bạn thường làm gì vào buổi sáng?
        </div>

        <button className="listen-word">
          <Volume2 size={21} />
          Nghe mẫu
        </button>

        <div className="mic-area">

          <div
            className={
              recording
                ? "mic-circle recording"
                : "mic-circle"
            }
          >
            <Mic size={38} />
          </div>

          <p>
            {recording
              ? "Đang ghi âm..."
              : "Nhấn vào microphone để luyện nói"}
          </p>

          <button
            className="record-button"
            onClick={() =>
              setRecording(!recording)
            }
          >
            {recording
              ? "Dừng ghi âm"
              : "Bắt đầu ghi âm"}
          </button>
        </div>

        <div className="speaking-tools">
          <button>
            <RotateCcw size={17} />
            Thử lại
          </button>

          <button>
            Xem câu trả lời mẫu
          </button>
        </div>

      </div>
    </div>
  );
}

export default Speaking;