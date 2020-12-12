import React from 'react';
import Home from './component/home/Home';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Recipe from './component/recipe/Recipe';

export default class App extends React.Component {
  render() {
    return (
      <>
        

        <Switch>
          <Route  path='/' exact component={Home} />
          <Route  path='/recipe' exact component={Recipe} />
        </Switch>
      </>
    );
  }
}
