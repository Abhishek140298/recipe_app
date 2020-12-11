import React from 'react';
import Dishes from './component/dishes/Dishes';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Recipe from './component/recipe/Recipe';

export default class App extends React.Component {
  render() {
    return (
      <>
        

        <Switch>
          <Route  path='/' exact component={Dishes} />
          <Route  path='/recipe' exact component={Recipe} />
        </Switch>
      </>
    );
  }
}
