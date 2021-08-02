import React, { useContext, useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

/**
 * ?  =====Import Components=====
 */
import Home from './Pages/Home';
import SignupPage from './Pages/Signup';
import LoginPage from './Pages/Login'
import { authContext, FirebaseContext } from './store/FirebaseContext';

function App() {
  const {setUser} = useContext(authContext)
  const {firebase} = useContext(FirebaseContext)
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user)=>{
       setUser(user)
    })
  },)
  return (
    <div>
      <Router>
        <Route exact path="/">
        <Home />
        </Route>
        <Route path="/signup">
          <SignupPage></SignupPage>
        </Route>
        <Route path="/login">
          <LoginPage></LoginPage>
        </Route>
      </Router>
    </div>
  );
}

export default App;
