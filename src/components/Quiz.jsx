import React, { useState } from "react";
import "../App.css";
import { Questions } from "../helpers/Questions";

import { useContext } from "react";
import { GameStateContext } from "../helpers/Contexts";

export const Quiz = () => {
  const [currentQus, setCurrentQus] = useState(0);
  const [optionChosen, setOptionChosen] = useState("");

  const { score, setScore, gameState, setGameState } =
    useContext(GameStateContext);

  const chooseOption = (opt) => {
    setOptionChosen(opt);
  };

  const nextQus = () => {
    if (Questions[currentQus].answer == optionChosen) {
      setScore(score + 1);
    }
    setCurrentQus(currentQus + 1);
  };

  const finishQuiz = () => {
    if (Questions[currentQus].answer == optionChosen) {
      setScore(score + 1);
    }

    setGameState("finished");
  };

  return (
    <div className="Quiz">
      <h1>{Questions[currentQus].prompt}</h1>
      <div className="Questions">
        <button
          onClick={() => {
            chooseOption("optionA");
          }}
        >
          {Questions[currentQus].optionA}
        </button>
        <button
          onClick={() => {
            chooseOption("optionB");
          }}
        >
          {Questions[currentQus].optionB}
        </button>
        <button
          onClick={() => {
            chooseOption("optionC");
          }}
        >
          {Questions[currentQus].optionC}
        </button>
        <button
          onClick={() => {
            chooseOption("optionD");
          }}
        >
          {Questions[currentQus].optionD}
        </button>
      </div>
      {currentQus == Questions.length - 1 ? (
        <button onClick={finishQuiz} id="nextQuestion">
          Finish Question
        </button>
      ) : (
        <button onClick={nextQus} id="nextQuestion">
          Next Question
        </button>
      )}
    </div>
  );
};
