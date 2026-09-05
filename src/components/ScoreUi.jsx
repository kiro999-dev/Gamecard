import React from "react";
import { handleCardscount } from "../utils/handleCardscount";
export const ScoreUi = ({
  setErorr,
  setCardcount,
  score,
  maxscore,
  cardcount,
}) => {
  return (
    <div>
      <div className="max-w-2xl mx-auto px-6 pt-12 text-center">
        <h1 className="text-2xl font-bold text-amber-50">
          Get points by clicking on an image but don't click on any more than
          once!
        </h1>
        <div className="flex justify-center gap-8 mt-4 text-amber-50">
          <p>
            Your score: <span className="font-semibold">{score}</span>
          </p>
          <p>
            Max score: <span className="font-semibold">{maxscore}</span>
          </p>
        </div>
        <div>
          <label
            htmlFor="cardcount"
            className="block text-xl font-medium text-emerald-100 mb-1"
          >
            Cards Number
          </label>      
          <input
            id="cardcount"
            value={cardcount}
            onChange={(e) =>
              handleCardscount(e.target.value, setErorr, setCardcount)
            }
            type="number"
            className={`placeholder:text-sm w-64 mt-2 px-4 py-2 rounded-lg ${
              cardcount > 24 || cardcount < 3
                ? `bg-red-700 text-amber-50 placeholder-white border border-white`
                : `bg-emerald-800 text-amber-50 placeholder-emerald-300 border border-emerald-600`
            } text-center focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent`}
          />
        </div>
      </div>
    </div>
  );
};
