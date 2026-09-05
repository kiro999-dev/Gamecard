export const Card = ({ imgSrc, suit, value }) => {
  const isRed = suit === 'HEARTS' || suit === 'DIAMONDS';

  return (
    <div className="flex flex-col w-48 rounded-xl bg-white shadow-lg overflow-hidden border border-gray-200 hover:px-1">
      <img
        className="w-full h-64 object-contain p-3"
        src={imgSrc}
        alt={`${value} ${suit}`}
      />
      <div className={`flex items-center justify-center gap-1 py-3 border-t ${isRed ? 'text-red-600' : 'text-gray-900'}`}>
        <span className="text-lg font-semibold">{value}</span>
        <span className="text-lg">{suit}</span>
      </div>
    </div>
  );
};