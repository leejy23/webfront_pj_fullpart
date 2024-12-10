import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Levels.css";
import levelsData from "./levelsData";

const Levels = () => {
  const navigate = useNavigate();
  const { levels, topLevels } = levelsData;

  const renderKeywords = (keywords, category) => (
    <div className={`keyword-container_level ${category}-keywords_level`}>
      {keywords.map((keyword, index) => (
        <span key={index} className="keyword_level">
          {keyword}
        </span>
      ))}
    </div>
  );

  const renderTopLevel = (topLevel, levelPath) => (
    <div className="level-card_level no-border_level top-level_level">
      <img
        src={topLevel.image}
        alt={topLevel.title}
        className="large-image_level"
      />
      <div className="level-text_level">
        <h2>{topLevel.title}</h2>
        <p className="title_description_level">{topLevel.description}</p>
        <button
          className="learn-button_level"
          onClick={() => navigate(levelPath)}
        >
          학습 시작
        </button>
      </div>
    </div>
  );

  const renderLevels = (category, topLevel, levelPath) => (
    <section className="container_level">
      {renderTopLevel(topLevel, levelPath)}
      <div className="grid-layout_level">
        {levels[category].map((level) => (
          <div
            key={level.id}
            className={`level-card_level ${
              level.spanFull ? "full-span_level" : ""
            }`}
          >
            <img
              src={level.image}
              alt={level.title}
              className="level-image_level"
            />
            <div className="level-text_level">
              <h3>{level.title}</h3>
              <p className="description_level">{level.description}</p>
              {level.keywords && renderKeywords(level.keywords, category)}
            </div>
          </div>
        ))}
      </div>
    </section>
  );

  return (
    <div>
      {renderLevels("beginner", topLevels.beginner, "/quiz/beginner")}
      {renderLevels(
        "intermediate",
        topLevels.intermediate,
        "/quiz/intermediate"
      )}
      {renderLevels("advanced", topLevels.advanced, "/quiz/advanced")}
    </div>
  );
};

export default Levels;
