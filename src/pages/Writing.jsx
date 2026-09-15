import { useState } from "react";
import {
  PenLine,
  CheckCircle
} from "lucide-react";

function Writing() {
  const [text, setText] = useState("");
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="lesson-page">

      <div className="lesson-header">
        <div>
          <span className="lesson-label">
            ✍️ WRITING
          </span>

          <h1>
            Write About Yourself
          </h1>

          <p>
            Luyện viết một đoạn văn ngắn
            giới thiệu bản thân.
          </p>
        </div>

        <div className="lesson-level">
          Beginner
        </div>
      </div>

      <div className="writing-card">

        <div className="writing-prompt">
          <PenLine size={24} />

          <div>
            <span>
              BÀI TẬP
            </span>

            <h2>
              Write 5–7 sentences about yourself.
            </h2>

            <p>
              Hãy viết từ 5 đến 7 câu giới thiệu
              về bản thân bằng tiếng Anh.
            </p>
          </div>
        </div>

        <textarea
          value={text}
          onChange={(e) =>
            setText(e.target.value)
          }
          placeholder={
            "Example: My name is David. I am a student..."
          }
        />

        <div className="writing-footer">
          <span>
            {text.length} ký tự
          </span>

          <button
            className="check-button"
            onClick={() => setSubmitted(true)}
          >
            Nộp bài
          </button>
        </div>

        {submitted && (
          <div className="writing-result">
            <CheckCircle size={22} />

            <div>
              <strong>
                Bài viết đã được ghi nhận!
              </strong>

              <p>
                Hãy kiểm tra lại ngữ pháp,
                chính tả và cách sử dụng từ.
              </p>
            </div>
          </div>
        )}

      </div>

      <div className="writing-tips">

        <h3>
          💡 Mẹo viết
        </h3>

        <div className="tips-grid">
          <span>
            ✓ Viết câu ngắn và rõ ràng
          </span>

          <span>
            ✓ Kiểm tra động từ
          </span>

          <span>
            ✓ Kiểm tra chính tả
          </span>

          <span>
            ✓ Sử dụng từ vựng đã học
          </span>
        </div>

      </div>
    </div>
  );
}

export default Writing;