import { Card } from "./Card";
export const CardGrid = ({ cards, gameLogic }) => {
  return (
    <div className="flex justify-center flex-wrap gap-4 p-8">
      {cards.map((card) => (
        <Card
          key={card.code}
          imgSrc={card.image}
          suit={card.suit}
          value={card.value}
          cardsobj={cards}
          gameLogic={() => gameLogic(card.code)}
        />
      ))}
    </div>
  );
};