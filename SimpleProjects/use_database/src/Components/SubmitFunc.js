import uniqid from 'uniqid';
import { database } from '../firebase';
import { ref, set } from 'firebase/database';

function Submit({ username, email, password }) {
  const writeToDatabase = () => {
    const userId = uniqid(); // Generate a unique ID for the user
    const newUser = {
      _id: userId,
      name: username,
      email: email,
      password: password,
      createdAt: Date.now(),
    };

    // Create a unique child node for each user under 'user_details'
    set(ref(database, `user_details/${userId}`), newUser)
      .then(() => {
        alert('Data written successfully!');
      })
      .catch((error) => {
        console.error('Error writing data:', error);
      });
  };

  return <button onClick={(e) => {
    e.preventDefault()
    writeToDatabase()
  }}>Write Data</button>;
}

export default Submit;
