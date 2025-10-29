import React, { useState, useEffect } from "react";

function Filter() {
  const [names, setNames] = useState([
    { name: "Anshul", cgpa: 8.7 },
    { name: "Vidhi", cgpa: 9.2 },
    { name: "Anjali", cgpa: 8.4 },
    { name: "Rohan", cgpa: 7.9 },
    { name: "Sneha", cgpa: 9.5 },
    { name: "Arjun", cgpa: 8.1 },
    { name: "Ishita", cgpa: 9.0 },
    { name: "Kunal", cgpa: 7.6 }
  ]);

  useEffect(() => {
    setNames(prevNames =>
      prevNames.filter(each => each.cgpa >= 8.5)
    );
    console.log(names);
  }, []);

  return (
    <>
      {names.map(person => (
        <div key={person.name}>
          {person.name} - CGPA: {person.cgpa}
        </div>
      ))}
    </>
  );
}

export default Filter;
