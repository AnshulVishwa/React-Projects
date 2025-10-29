import React from 'react';

function MergeObjects() {
  const user = {
    name: "Anshul",
    id: 101
  };

  const preferences = {
    theme: "dark",
    name: "Anshul vishwa"
  };

  const mergedUser = { ...user, ...preferences };
  console.log(mergedUser);

  return (
    <>
      {"Anshul vishwa"}
    </>
  );
}

export default MergeObjects;
