import { FormEvent, useState } from "react";
import { CONTENT } from "./Content";
import painting from "./assets/painting.png";
import flowers from "./assets/flowers.png";
type Screen = "cover" | "intro" | "chapter" | "success" | "final";

function normalize(text: string) {
  return text
    .trim()
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

export default function App() {
  const [screen, setScreen] = useState<Screen>("cover");
  const [chapterIndex, setChapterIndex] = useState(0);
  const [answer, setAnswer] = useState("");
  const [error, setError] = useState(false);

  const chapter = CONTENT.chapters[chapterIndex];

  function checkAnswer(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const correct =
      normalize(answer) === normalize(chapter.password);

    if (!correct) {
      setError(true);
      return;
    }

    setError(false);
    setScreen("success");
  }

  function continueStory() {
    const nextChapter = chapterIndex + 1;

    if (nextChapter >= CONTENT.chapters.length) {
      setScreen("final");
      return;
    }

    setChapterIndex(nextChapter);
    setAnswer("");
    setScreen("chapter");
  }

  return (
    <main className="app">
      {screen === "cover" && (
        <section className="screen cover-screen">
          <div className="paper-card cover-card">
          <img
  className="flowers flowers-top"
  src={new URL("./assets/flowers.png", import.meta.url).href}
  alt=""
/>


            <p className="small-title">
              {CONTENT.cover.smallTitle}
            </p>

            <h1>{CONTENT.cover.title}</h1>

            <div className="ornament">✦ ❀ ✦</div>

            <p className="cover-text">
              {CONTENT.cover.text}
            </p>

            <div className="wax-seal">
              ♥
            </div>

            <button
              className="main-button"
              onClick={() => setScreen("intro")}
            >
              {CONTENT.cover.button}
            </button>
          </div>
        </section>
      )}

      {screen === "intro" && (
        <section className="screen">
          <div className="paper-card intro-card">
            <div className="flowers flowers-top" />
            <div className="flowers flowers-bottom" />

            <p className="small-title">
              {CONTENT.intro.smallTitle}
            </p>

            <h2>{CONTENT.intro.title}</h2>

            <div className="ornament">✦ ❀ ✦</div>

            <div className="intro-lines">
              {CONTENT.intro.lines.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>

            <button
              className="main-button"
              onClick={() => {
                setChapterIndex(0);
                setScreen("chapter");
              }}
            >
              {CONTENT.intro.button}
            </button>
          </div>
        </section>
      )}

      {screen === "chapter" && (
        <section className="screen">
          <div className="paper-card chapter-card">
          <img
  className="flowers flowers-top"
  src="/src/assets/flowers.png"
  alt=""
/>

<img
  className="flowers flowers-bottom"
  src="/src/assets/flowers.png"
  alt=""
/>

            <div className="chapter-number">
              {chapter.roman}
            </div>

            <p className="small-title">
              CAPÍTULO {chapter.roman}
            </p>

            <h2>{chapter.title}</h2>

            <div className="ornament">✦ ❀ ✦</div>

            <p className="clue">
              {chapter.clue}
            </p>

            <form onSubmit={checkAnswer}>
              <input
                type="text"
                value={answer}
                placeholder={CONTENT.labels.placeholder}
                onChange={(event) => {
                  setAnswer(event.target.value);
                  setError(false);
                }}
              />

              {error && (
                <p className="error-text">
                  {CONTENT.labels.incorrect}
                </p>
              )}

              <button
                type="submit"
                className="main-button"
              >
                {CONTENT.labels.send}
              </button>
            </form>

            <Progress
              current={chapterIndex}
            />
          </div>
        </section>
      )}

      {screen === "success" && (
        <section className="screen success-screen">
          <div className="success-card">
            <div className="gold-frame" />

            <p className="small-title light">
              {CONTENT.labels.correct}
            </p>

            <h2>{chapter.success}</h2>

            <div className="ornament gold">
              ✦ ❀ ✦
            </div>

            <p className="success-text">
              Continúa tu camino, mi amor.
            </p>

            <button
              className="main-button"
              onClick={continueStory}
            >
              {chapterIndex === CONTENT.chapters.length - 1
                ? "Abrir la última página"
                : `${CONTENT.labels.continue} al capítulo ${
                    CONTENT.chapters[chapterIndex + 1].roman
                  }`}
            </button>

            <Progress
              current={chapterIndex}
              completed
            />
          </div>
        </section>
      )}

      {screen === "final" && (
        <section className="screen">
          <div className="paper-card final-card">
            <div className="flowers flowers-top" />
            <div className="flowers flowers-bottom" />

            <p className="small-title">
              {CONTENT.final.smallTitle}
            </p>

            <h2>{CONTENT.final.title}</h2>

            <div className="ornament">✦ ❀ ✦</div>

            <p className="final-text">
              {CONTENT.final.text}
            </p>

            <p className="final-reveal">
              {CONTENT.final.reveal}
            </p>

            <div className="final-heart">
              {CONTENT.final.symbol}
            </div>

            <Progress
              current={2}
              completed
              final
            />
          </div>
        </section>
      )}
    </main>
  );
}

function Progress({
  current,
  completed = false,
  final = false,
}: {
  current: number;
  completed?: boolean;
  final?: boolean;
}) {
  return (
    <div className="progress">
      {CONTENT.chapters.map((item, index) => {
        const active = index === current;
        const done =
          index < current ||
          (index === current && completed);

        return (
          <div
            className="progress-part"
            key={item.roman}
          >
            <div
              className={[
                "progress-circle",
                active ? "active" : "",
                done ? "done" : "",
              ].join(" ")}
            >
              {item.roman}
            </div>

            {index < CONTENT.chapters.length - 1 && (
              <div
                className={[
                  "progress-line",
                  index < current ? "done" : "",
                ].join(" ")}
              />
            )}
          </div>
        );
      })}

      <div
        className={[
          "progress-flower",
          final ? "done" : "",
        ].join(" ")}
      >
        ❀
      </div>
    </div>
  );
}