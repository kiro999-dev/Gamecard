import { use, useState } from "react";
import { useEffect } from "react";
import { useGame } from "./hooks/useGame";
import { CardGrid } from "./components/CardGrid";
import { ScoreUi } from "./components/ScoreUi";
import { ErrorMessage } from "./components/ErrorMessage";
function App() {

 
  const { score, maxscore, gameLogic } = useGame();
  const [cardsobj, setCardObj] = useState([]);
  const [cardcount,setCardcount] = useState(8)
  const [error,setErorr] = useState('')
  useEffect(() => {
    const fetchCard = async () => {
      try {
        if(cardcount > 24 || cardcount < 3)
            return;
        const response = await fetch(
          `https://deckofcardsapi.com/api/deck/new/draw/?count=${cardcount}`,
        );
        if (!response.ok) throw new Error("Error while fetching");
        const cards = await response.json();
        console.log(cards);
        if (cards) setCardObj(cards.cards);
      } catch (error) {
        console.log(error);
        setErorr(error.message)
      }
    };
    fetchCard()
  }, [cardcount]);


return (
  <div className="min-h-screen bg-emerald-900 pb-12">
    <ErrorMessage error={error}></ErrorMessage>
    <ScoreUi setCardcount={setCardcount} setErorr={setErorr} cardcount={cardcount}  score={score} maxscore={maxscore}></ScoreUi>
    <CardGrid
      cards={cardsobj}
      gameLogic={(id) => gameLogic(id, cardsobj, setCardObj)}
    />
  </div>
);
}

export default App;
