import React from 'react';
import Dishes from './component/dishes/Dishes';
import './App.css';

export default class App extends React.Component {
  render() {
    return (
      <>
        <h1 className='dishes_heading'>Choose Your Dishes</h1>
        <div className='dish_component'>
          <Dishes />
        </div>
      </>
    );
  }
}
