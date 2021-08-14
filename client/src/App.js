import React, { useState, useEffect, Fragment } from 'react';
import './App.css';
import AllUsersList from './allUsersList';
import AgeOfUsersWithItem from './ageOfUsersWithItem';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <Fragment>
      <AllUsersList />
      <AgeOfUsersWithItem />
    </Fragment>
  );
}

export default App;
