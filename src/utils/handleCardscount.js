export const handleCardscount = (value, setError, setCardcount,setScore) => {
  const num = Number(value);

  if (value === '' || isNaN(num)) {
    setCardcount(value);
    return;
  }

  if (num < 3 || num > 24) {
    setError('Please enter a number between 3 and 24');
    setCardcount(value);
    return;
  }
  setError('');
  setCardcount(num);
  setScore(0)
};