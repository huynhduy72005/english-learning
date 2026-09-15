import { useState } from "react";
import {
  Play,
  Pause,
  Volume2,
  CheckCircle
} from "lucide-react";

function Listening() {
  const [playing, setPlaying] = useState(false);
  const [selected, setSelected] = useState("");
  const [checked, setChecked] = useState(false);

  const answers = [
    "She went shopping.",
    "She went to school.",
    "She played football.",
    "She stayed at home."
  ];

  return (
    <div className="lesson-page">

      <div className="lesson-header">
        <div>
          <span className="lesson-label">
            🎧 LISTENING
          </span>

          <h1>
            Daily Activities
          </h1>

          <p>
            Nghe đoạn hội thoại và chọn
            câu trả lời đúng.
          </p>
        </div>

        <div className="lesson-level">
          Beginner
        </div>
      </div>

      <div className="lesson-layout">

        <div className="lesson-main">

          <div className="audio-player">
            <button
              className="play-button"
              onClick={() => setPlaying(!playing)}
            >
              {playing ? (
                <Pause size={25} />
              ) : (
                <Play size={25} />
              )}
            </button>

            <div className="audio-info">
              <strong>
                Daily Activities
              </strong>

              <span>
                01:24 / 02:30
              </span>

              <div className="audio-progress">
                <div></div>
              </div>
            </div>

            <Volume2 size={21} />
          </div>

          <div className="question-card">

            <span className="question-number">
              QUESTION 01
            </span>

            <h2>
              What did Sarah do yesterday?
            </h2>

            <div className="answer-list">
              {answers.map((answer, index) => (
                <button
                  key={answer}
                  className={
                    selected === answer
                      ? "answer selected"
                      : "answer"
                  }
                  onClick={() => {
                    setSelected(answer);
                    setChecked(false);
                  }}
                >
                  <span className="answer-letter">
                    {String.fromCharCode(65 + index)}
                  </span>

                  {answer}
                </button>
              ))}
            </div>

            <button
              className="check-button"
              onClick={() => setChecked(true)}
            >
              Kiểm tra đáp án
            </button>

            {checked && (
              <div
                className={
                  selected === answers[0]
                    ? "result correct"
                    : "result wrong"
                }
              >
                {selected === answers[0] ? (
                  <>
                    <CheckCircle size={20} />
                    Chính xác! 🎉
                  </>
                ) : (
                  <>
                    Đáp án chưa đúng. Hãy nghe
                    lại đoạn hội thoại.
                  </>
                )}
              </div>
            )}

          </div>

        </div>

        <aside className="lesson-sidebar">

          <h3>
            Nội dung bài học
          </h3>

          <div className="lesson-step active">
            <span>01</span>
            <div>
              <strong>
                Daily Activities
              </strong>
              <small>
                2:30
              </small>
            </div>
          </div>

          <div className="lesson-step">
            <span>02</span>
            <div>
              <strong>
                At School
              </strong>
              <small>
                3:10
              </small>
            </div>
          </div>

          <div className="lesson-step">
            <span>03</span>
            <div>
              <strong>
                At Home
              </strong>
              <small>
                2:45
              </small>
            </div>
          </div>

        </aside>
      </div>
    </div>
  );
}

export default Listening;