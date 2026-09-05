import { useState } from "react";
import { shuffle } from "../utils/suffle";

export function useGame() {
  const [score, setScore] = useState(0);
  const [maxscore, setMaxScore] = useState(0);
  const [cardmap, setCardmap] = useState(new Map());

  function gameLogic(code, cardsObj, setCardsObj) {
    const cardsMap = new Map(cardmap);
    if (cardmap.has(code)) {
      if (score > maxscore) setMaxScore(score);
      setScore(0);
      setCardmap(new Map());
    } else {
      cardsMap.set(code, true);
      setCardmap(cardsMap);
      setScore(score + 1);
    }
    shuffle(cardsObj, setCardsObj);
  }

  return { score, maxscore, gameLogic };
}