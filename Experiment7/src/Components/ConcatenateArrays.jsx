import React from 'react';

function ConcatenateArrays() {
  const arr1 = [1, 2, 3];
  const arr2 = ['a', 'b', 'c'];
  const arr3 = ['Hello', 'Anshul'];

  const combined = arr1.concat(arr2, arr3);

  return (
    <>
      {combined.map(all => (
        <div key={all}>{all}</div>
      ))}
    </>
  );
}

export default ConcatenateArrays;
