import React from 'react';
import Profilecard from './ProfileCard';

const App = () => {
  return (
    <div>
      <h1 className="title">Profile Card</h1>
      <div className="profile-cards">
        <Profilecard name="Jack" age={23} sex="male" profession="software engineer" />
        <Profilecard name="Mary" age={25} sex="female" profession="doctor" />
      </div>
    </div>
  );
};

export default App;