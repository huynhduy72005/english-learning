import { useState } from "react";
import { Volume2, Search } from "lucide-react";
import { vocabulary } from "../data/data";

function Vocabulary() {
  const [search, setSearch] = useState("");

  const filteredWords = vocabulary.filter((item) =>
    item.word
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <div className="lesson-page">

      <div className="lesson-header">
        <div>
          <span className="lesson-label">
            📚 VOCABULARY
          </span>

          <h1>
            Từ vựng tiếng Anh
          </h1>

          <p>
            Mở rộng vốn từ vựng mỗi ngày.
          </p>
        </div>
      </div>

      <div className="vocabulary-search">
        <Search size={20} />

        <input
          type="text"
          placeholder="Tìm từ vựng..."
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
        />
      </div>

      <div className="vocabulary-grid">

        {filteredWords.map((item) => (
          <div
            className="vocabulary-card"
            key={item.word}
          >
            <div className="word-header">

              <div>
                <h2>{item.word}</h2>

                <span className="pronunciation">
                  {item.pronunciation}
                </span>
              </div>

              <button className="sound-button">
                <Volume2 size={20} />
              </button>

            </div>

            <div className="word-meaning">
              {item.meaning}
            </div>

            <div className="word-example">
              <span>Example</span>

              <p>
                "{item.example}"
              </p>
            </div>
          </div>
        ))}

      </div>
    </div>
  );
}

export default Vocabulary;