import Navbar from "./Components/Navbar";
import { Route, Switch } from 'react-router-dom';
import './Components/pages/Home.css'



import Home from "./Components/pages/Home";
import AddNewCostumer from "./Components/pages/AddNewCostumer";
import ShowCostumers from "./Components/pages/ShowCostumers";
import AddNewTraining from "./Components/pages/AddNewTraining";
import ShowTrainings from "./Components/pages/ShowTrainings";
import ShowCalendar from "./Components/pages/ShowCalendar";
import EditTrainings from "./Components/pages/EditTrainings";
import { useState } from "react";



function App() {
  

  return (
    <div>
      <Navbar/>

      <Switch>

        <Route exact path='/'>
          <Home/>
        </Route>

        <Route exact path='/add-new-costumer'>
          <AddNewCostumer/>
        </Route>
        
        <Route exact path='/show-costumers'>
          <ShowCostumers/>
        </Route>

        <Route exact path='/add-new-training'>
          <AddNewTraining/>
        </Route>

        <Route exact path='/show-trainings'>
          <ShowTrainings/>
        </Route>

        <Route exact path='/show-calendar'>
          <ShowCalendar/>
        </Route>

        <Route  path='/edit/:id'>
          <EditTrainings  />
        </Route>
  

      </Switch>
      <footer>
                <p>Author: Hege Refsnes<br/>
                <a href="#">About Us</a> <br/>
                <a href="#">Contact</a><br/>
                <a href="#">Follow Us at Facebook</a>
                </p>
            </footer>
      
    </div>
  );
}

export default App;
