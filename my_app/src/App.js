import React,{useEffect} from "react";
import './App.css';
import Header from "./Header"
import Home from "./Home"
import Checkout from "./Checkout";
import Payment from "./Payment";
import Login from "./Login"
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import {auth} from "./firebase";
import {useStateValue} from "./StateProvider";
import useAlan from "./useAlan"



function App() {
  const[{},dispatch]=useStateValue();
  useAlan()

  useEffect(()=>{
    auth.onAuthStateChanged(authUser => {
      console.log("The User is", authUser);

      if(authUser){
        console.log("user is active");
        dispatch({
          type: "SET_USER",
          user: authUser
        })
      } else{
        dispatch({
          type: "SET_USER",
          user: null
        })
      }
    })
  },[])
  return (
     <Router>
    <div className="app">
      
        <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/payment">
          <Header />
          <Payment />
        </Route>
        <Route path="/checkout">
          <Header />
          <Checkout />
        </Route>

        <Route path="/" >
          <Header />
          <Home />
        </Route>
        </Switch>
        
        
        
      
      
    </div>
    </Router> 
  );
}

export default App;






{/* <Router>
    <div className="app">
      
        <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/checkout">
          <Header />
          <Checkout />
        </Route>

        <Route path="/" >
          <Header />
          <Home />
        </Route>
        </Switch>
        
        
        
      
      
    </div>
    </Router> */}