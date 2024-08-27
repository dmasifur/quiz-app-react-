import { React, useContext } from "react";
import { GameStateContext } from "../helpers/Contexts";
import "../App.css";

export const Menu = () => {
  const { gameState, setGameState, userName, setUserName } =
    useContext(GameStateContext);

  return (
    <div className="Menu">
      <label htmlFor="">Enter your Name: </label>
      <input
        type="text"
        placeholder="Ex. Jack Smith"
        onChange={(e) => setUserName(e.target.value)}
      />
      <button
        onClick={() => {
          setGameState("playing");
        }}
      >
        Start Quiz
      </button>
    </div>
  );
};
