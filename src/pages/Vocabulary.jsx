import { useState } from "react";
import "./Vocabulary.css";
import {
  Volume2,
  Search,
  Loader2,
  ArrowLeftRight,
} from "lucide-react";

function Vocabulary() {
  const [search, setSearch] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // en-vi = Anh -> Việt
  // vi-en = Việt -> Anh
  const [direction, setDirection] = useState("en-vi");

  const sourceLanguage =
    direction === "en-vi" ? "en" : "vi";

  const targetLanguage =
    direction === "en-vi" ? "vi" : "en";

  const translateWord = async () => {
    const text = search.trim();

    if (!text) {
      setResult(null);
      return;
    }

    setLoading(true);
    setError("");

    try {
      const url =
        `https://api.mymemory.translated.net/get` +
        `?q=${encodeURIComponent(text)}` +
        `&langpair=${sourceLanguage}|${targetLanguage}`;

      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(
          "Không thể kết nối đến máy chủ dịch"
        );
      }

      const data = await response.json();

      if (
        !data.responseData ||
        !data.responseData.translatedText
      ) {
        throw new Error("Không tìm thấy bản dịch");
      }

      setResult({
        word: text,
        meaning: data.responseData.translatedText,
        sourceLanguage,
        targetLanguage,
      });
    } catch (err) {
      console.error(err);

      setError(
        "Không thể dịch nội dung này. Vui lòng thử lại."
      );

      setResult(null);
    } finally {
      setLoading(false);
    }
  };

  // Nhấn Enter để dịch
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      translateWord();
    }
  };

  // Đảo chiều dịch
  const switchLanguage = () => {
    setDirection((prev) =>
      prev === "en-vi" ? "vi-en" : "en-vi"
    );

    setSearch("");
    setResult(null);
    setError("");
  };

  // Đọc nội dung gốc
  const speakOriginal = () => {
    if (!result?.word) return;

    const speech =
      new SpeechSynthesisUtterance(result.word);

    speech.lang =
      result.sourceLanguage === "en"
        ? "en-US"
        : "vi-VN";

    speech.rate = 0.8;

    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(speech);
  };

  // Đọc bản dịch
  const speakTranslation = () => {
    if (!result?.meaning) return;

    const speech =
      new SpeechSynthesisUtterance(
        result.meaning
      );

    speech.lang =
      result.targetLanguage === "en"
        ? "en-US"
        : "vi-VN";

    speech.rate = 0.8;

    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(speech);
  };

  return (
  <div className="lesson-page vocabulary-page">

      {/* HEADER */}
      <div className="lesson-header">
        <div>
          <span className="lesson-label">
            📚 VOCABULARY
          </span>

          <h1>Từ vựng tiếng Anh</h1>

          <p>
            Tra cứu và dịch Anh - Việt,
            Việt - Anh.
          </p>
        </div>
      </div>

      {/* CHỌN NGÔN NGỮ */}
      <div className="translation-direction">

        <div className="language-box">
          {direction === "en-vi"
            ? "English"
            : "Tiếng Việt"}
        </div>

        <button
          className="switch-language-button"
          onClick={switchLanguage}
          title="Đảo chiều dịch"
        >
          <ArrowLeftRight size={20} />
        </button>

        <div className="language-box">
          {direction === "en-vi"
            ? " Tiếng Việt"
            : " English"}
        </div>

      </div>

      {/* SEARCH */}
      <div className="vocabulary-search">

        <Search size={22} />

        <input
          type="text"
          placeholder={
            direction === "en-vi"
              ? "Nhập từ hoặc câu tiếng Anh..."
              : "Nhập từ hoặc câu tiếng Việt..."
          }
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
          onKeyDown={handleKeyDown}
        />

        <button
          onClick={translateWord}
          disabled={loading}
        >
          {loading ? (
            <Loader2
              size={18}
              className="loading-icon"
            />
          ) : (
            "Dịch"
          )}
        </button>

      </div>

      {/* ERROR */}
      {error && (
        <div className="translation-error">
          {error}
        </div>
      )}

      {/* RESULT */}
      {result && (
        <div className="vocabulary-grid">

          <div className="vocabulary-card">

            {/* TỪ GỐC */}
            <div className="word-header">

              <div>
                <span className="language-label">
                  {result.sourceLanguage === "en"
                    ? "ENGLISH"
                    : "TIẾNG VIỆT"}
                </span>

                <h2>{result.word}</h2>
              </div>

              <button
                className="sound-button"
                onClick={speakOriginal}
                title="Nghe phát âm"
              >
                <Volume2 size={20} />
              </button>

            </div>

            {/* BẢN DỊCH */}
            <div className="word-example">

              <span>
                {result.targetLanguage === "en"
                  ? "ENGLISH"
                  : "TIẾNG VIỆT"}
              </span>

              <div className="translation-result">

                <p>{result.meaning}</p>

                <button
                  className="sound-button"
                  onClick={speakTranslation}
                  title="Nghe bản dịch"
                >
                  <Volume2 size={18} />
                </button>

              </div>

            </div>

          </div>

        </div>
      )}

      {/* CHƯA NHẬP */}
      {!result && !loading && !error && (
        <div className="empty-vocabulary">

          <Search size={40} />

          <h3>
            {direction === "en-vi"
              ? "Dịch tiếng Anh sang tiếng Việt"
              : "Dịch tiếng Việt sang tiếng Anh"}
          </h3>

          <p>
            {direction === "en-vi"
              ? "Nhập từ hoặc câu tiếng Anh rồi nhấn Enter hoặc nút Dịch."
              : "Nhập từ hoặc câu tiếng Việt rồi nhấn Enter hoặc nút Dịch."}
          </p>

        </div>
      )}

    </div>
  );
}

export default Vocabulary;