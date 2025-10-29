import React, { useEffect, useState } from 'react';

function Reduce() {
  const [sum, setSum] = useState(0);
  const numbers = [1, 2, 3, 4, 5];

  useEffect(() => {
    setSum(
      numbers.reduce((accumulator, currentValue) => {
        return accumulator + currentValue;
      }, 0)
    );
  }, []);

  return (
    <>
      {sum}
    </>
  );
}

export default Reduce;