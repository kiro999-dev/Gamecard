export const Card = ({ imgSrc, suit, value, gameLogic }) => {
  const isRed = suit === 'HEARTS' || suit === 'DIAMONDS';

  return (
    <div className="flex flex-col w-32 rounded-xl bg-amber-50 shadow-md overflow-hidden border border-amber-100 transition-transform duration-150 hover:-translate-y-2 hover:shadow-xl">
      <button onClick={gameLogic} className="cursor-pointer">
        <img
          className="w-full h-40 object-contain p-2"
          src={imgSrc}
          alt={`${value} ${suit}`}
        />
        <div className={`flex items-center justify-center gap-1 py-2 border-t border-amber-100 ${isRed ? 'text-red-600' : 'text-gray-900'}`}>
          <span className="text-sm font-semibold">{value}</span>
          <span className="text-sm">{suit}</span>
        </div>
      </button>
    </div>
  );
};