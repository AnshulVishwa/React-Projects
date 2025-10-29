import React from 'react';

function Merge() {
  const user = {
    name: "Vidhi",
    id: 101
  };

  const preferences = {
    theme: "dark",
    name: "Vidhi Agrawal"
  };

  const mergedUser = { ...user, ...preferences };
  console.log(mergedUser);

  return (
    <>
      {"Vidhi Agrawal"}
    </>
  );
}

export default Merge;