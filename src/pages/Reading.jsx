import { useState } from "react";
import { CheckCircle } from "lucide-react";

function Reading() {
  const [selected, setSelected] = useState("");

  return (
    <div className="lesson-page">

      <div className="lesson-header">
        <div>
          <span className="lesson-label">
            📖 READING
          </span>

          <h1>
            My Daily Routine
          </h1>

          <p>
            Đọc đoạn văn và trả lời câu hỏi.
          </p>
        </div>

        <div className="lesson-level">
          Beginner
        </div>
      </div>

      <div className="reading-layout">

        <article className="reading-text">
          <h2>
            My Daily Routine
          </h2>

          <p>
            My name is David. I am a student.
            I usually wake up at six o'clock
            in the morning.
          </p>

          <p>
            I have breakfast with my family
            and go to school at seven o'clock.
            I study English, mathematics and
            science at school.
          </p>

          <p>
            In the afternoon, I usually play
            football with my friends. In the
            evening, I do my homework and
            read a book before going to bed.
          </p>

          <div className="reading-vocabulary">
            <h3>Từ vựng</h3>

            <div>
              <span>
                <strong>wake up</strong>
                {" "}– thức dậy
              </span>

              <span>
                <strong>breakfast</strong>
                {" "}– bữa sáng
              </span>

              <span>
                <strong>homework</strong>
                {" "}– bài tập về nhà
              </span>
            </div>
          </div>
        </article>

        <div className="reading-question">

          <span className="question-number">
            QUESTION 01
          </span>

          <h2>
            What does David do in the afternoon?
          </h2>

          {[
            "He studies English.",
            "He plays football.",
            "He reads a book.",
            "He has breakfast."
          ].map((answer, index) => (
            <button
              key={answer}
              className={
                selected === answer
                  ? "answer selected"
                  : "answer"
              }
              onClick={() =>
                setSelected(answer)
              }
            >
              <span className="answer-letter">
                {String.fromCharCode(65 + index)}
              </span>

              {answer}
            </button>
          ))}

          {selected === "He plays football." && (
            <div className="result correct">
              <CheckCircle size={20} />
              Chính xác! 🎉
            </div>
          )}

        </div>

      </div>
    </div>
  );
}

export default Reading;