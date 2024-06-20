import React, { useContext, useState } from 'react';
import { UserContext, UserProvider } from './UserContext';
import './App.css';

const UserProfile = () => {
  const { user, setUser } = useContext(UserContext);
  const [name, setName] = useState(user.name);
  const [age, setAge] = useState(user.age);

  const handleUpdateUser = (e) => {
    e.preventDefault();
    setUser({ name, age: parseInt(age, 10) });
  };

  return (
    <div className="user-profile">
      <h1>User Profile</h1>
      <p>{`${user.name} is ${user.age} years old.`}</p>
      <form onSubmit={handleUpdateUser}>
        <div>
          <label>Name: </label>
          <input 
            type="text" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
          />
        </div>
        <div>
          <label>Age: </label>
          <input 
            type="number" 
            value={age} 
            onChange={(e) => setAge(e.target.value)} 
          />
        </div>
        <button type="submit">Update User</button>
      </form>
    </div>
  );
};

const App = () => {
  return (
    <UserProvider>
      <UserProfile />
    </UserProvider>
  );
};

export default App;