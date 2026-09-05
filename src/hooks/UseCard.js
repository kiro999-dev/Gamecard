import { useState, useEffect } from "react";

export function useCards(cardcount) {
  const [cardsobj, setCardObj] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    if (cardcount > 24 || cardcount < 3) return;

    const fetchCard = async () => {
      try {
        const response = await fetch(
          `https://deckofcardsapi.com/api/deck/new/draw/?count=${cardcount}`
        );
        if (!response.ok) throw new Error("Error while fetching");
        const cards = await response.json();
        if (cards) setCardObj(cards.cards);
      } catch (err) {
        console.log(err);
        setError(err.message);
      }
    };

    fetchCard();
  }, [cardcount]);

  return { cardsobj, setCardObj, error, setError };
}