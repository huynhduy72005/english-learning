import { useState } from "react";
import {
  CheckCircle,
  XCircle,
  Trophy
} from "lucide-react";

import { quizQuestions } from "../data/data";

function Quiz() {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState("");
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const question = quizQuestions[current];

  const chooseAnswer = (answer) => {
    if (selected) return;

    setSelected(answer);

    if (answer === question.answer) {
      setScore((prev) => prev + 1);
    }
  };

  const nextQuestion = () => {
    if (current < quizQuestions.length - 1) {
      setCurrent((prev) => prev + 1);
      setSelected("");
    } else {
      setFinished(true);
    }
  };

  if (finished) {
    return (
      <div className="quiz-result">

        <div className="quiz-trophy">
          <Trophy size={55} />
        </div>

        <span>
          QUIZ COMPLETED
        </span>

        <h1>
          Hoàn thành bài kiểm tra! 🎉
        </h1>

        <p>
          Bạn đã trả lời đúng
        </p>

        <strong className="score">
          {score}/{quizQuestions.length}
        </strong>

        <button
          className="primary-button"
          onClick={() => {
            setCurrent(0);
            setSelected("");
            setScore(0);
            setFinished(false);
          }}
        >
          Làm lại
        </button>

      </div>
    );
  }

  return (
    <div className="lesson-page">

      <div className="quiz-top">
        <div>
          <span className="lesson-label">
            📝 QUIZ
          </span>

          <h1>
            English Grammar Quiz
          </h1>
        </div>

        <div className="quiz-count">
          {current + 1} / {quizQuestions.length}
        </div>
      </div>

      <div className="quiz-progress">
        <div
          style={{
            width: `${
              ((current + 1) /
                quizQuestions.length) *
              100
            }%`
          }}
        ></div>
      </div>

      <div className="quiz-card">

        <span className="question-number">
          QUESTION {current + 1}
        </span>

        <h2>
          {question.question}
        </h2>

        <div className="quiz-options">

          {question.options.map(
            (option, index) => {

              let className = "quiz-option";

              if (selected) {
                if (option === question.answer) {
                  className += " correct-option";
                } else if (
                  option === selected
                ) {
                  className += " wrong-option";
                }
              }

              return (
                <button
                  key={option}
                  className={className}
                  onClick={() =>
                    chooseAnswer(option)
                  }
                >
                  <span>
                    {String.fromCharCode(
                      65 + index
                    )}
                  </span>

                  {option}

                  {selected &&
                    option ===
                      question.answer && (
                      <CheckCircle
                        size={20}
                      />
                    )}

                  {selected &&
                    option === selected &&
                    option !==
                      question.answer && (
                      <XCircle size={20} />
                    )}
                </button>
              );
            }
          )}

        </div>

        {selected && (
          <button
            className="check-button"
            onClick={nextQuestion}
          >
            {current ===
            quizQuestions.length - 1
              ? "Xem kết quả"
              : "Câu tiếp theo →"}
          </button>
        )}

      </div>
    </div>
  );
}

export default Quiz;