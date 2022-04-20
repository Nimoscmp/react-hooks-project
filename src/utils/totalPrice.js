const handleSumTotal = cart => {
  const reducer = (acc, currValue ) => acc + currValue.price;
  const sum = cart.reduce(reducer, 0);
  return sum;
}

export default handleSumTotal