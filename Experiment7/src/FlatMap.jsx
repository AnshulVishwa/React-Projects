import React, { useEffect, useState } from 'react';

function FlatMap() {
  const [words, setWords] = useState([]);
  const sentences = ["hello world", "how are you"];

  useEffect(() => {
    setWords(
      sentences.flatMap(sentence => sentence.split(' '))
    );
  }, []);

  return (
    <>
      {words.map(word => (
        <div key={word}>{word}</div>
      ))}
    </>
  );
}

export default FlatMap;