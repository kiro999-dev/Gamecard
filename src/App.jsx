import { useState } from "react";
import { Card } from "./components/Card";

const CardGrid = ({ cards }) => {
  return (
    <div className="flex justify-center flex-wrap gap-4 p-4">
      {cards.map((card) => (
        <Card key={card.id} imgSrc={card.image} suit={card.suit} value={card.value} />
      ))}
    </div>
  );
};
function App() {
  const [score, setScore] = useState(0);
  const [maxscore, setMaxScore] = useState(0);
  const cards = [
    {
      id: 1,
      value: "10",
      image: "https://deckofcardsapi.com/static/img/0H.png",
      suit: "HEARTS",
    },
    {
      id: 2,
      value: "6",
      image: "https://deckofcardsapi.com/static/img/6C.png",
      suit: "CLUBS",
    },
    {
      id: 3,
      value: "9",
      image: "https://deckofcardsapi.com/static/img/9D.png",
      suit: "DIAMONDS",
    },
  ];

  return (
    <div className="flex justify-center items-center min-h-screen">
      <CardGrid cards={cards} />
    </div>
  );
}

export default App;
