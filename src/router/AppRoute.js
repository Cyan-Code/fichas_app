import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { CreateCard } from '../componentes/CreateCard';
import { Cards } from '../componentes/Cards';
import { EditCard } from '../componentes/EditCard';
import { NavBar } from '../componentes/ui/NavBar';

export const AppRoute = () => {
  return (
    <Router>
      <NavBar />
      <div>
        <Switch>
          <Route exact path = "/create" component = { CreateCard }/>
          <Route exact path = "/edit:id" component = { EditCard }/>
          <Route exact path = "/" component = { Cards }/>
        </Switch>
      </div>
    </Router>
  )
}
