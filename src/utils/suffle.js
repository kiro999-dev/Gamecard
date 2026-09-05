export function shuffle(cardsObj, setCardsObj) {
  const cards = [...cardsObj];
  for (let i = cards.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [cards[i], cards[j]] = [cards[j], cards[i]];
  }
  console.log(cards);
  setCardsObj(cards);
}
