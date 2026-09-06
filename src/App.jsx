import { use, useState } from "react";
import { useEffect } from "react";
import { useGame } from "./hooks/useGame";
import { CardGrid } from "./components/CardGrid";
import { ScoreUi } from "./components/ScoreUi";
import { ErrorMessage } from "./components/ErrorMessage";
import { useCards } from "./hooks/UseCard";
function App() {

 
  const { score, maxscore, gameLogic,setScore } = useGame();
  const [cardcount,setCardcount] = useState(8)
  const { cardsobj, setCardObj, error, setError } = useCards(cardcount);
  

return (
  <div className="min-h-screen bg-emerald-900 pb-12">
    <ErrorMessage error={error}></ErrorMessage>
    <ScoreUi setCardcount={setCardcount} setErorr={setError} cardcount={cardcount}  score={score} maxscore={maxscore} setScore={setScore}></ScoreUi>
    <CardGrid
      cards={cardsobj}
      gameLogic={(id) => gameLogic(id, cardsobj, setCardObj)}
    />
  </div>
);
}

export default App;
