import React from 'react'
import './App.css';
import { Income, Recorder, Tracker } from './comps/index'

function App() {
  return (
    <div className="App">
        <div className='app__wrapper'>
          <Income color='5px solid green'/>
          <div className='get__wrap'>
          <Tracker />
          <Recorder />
          </div>
          <Income color='5px solid coral'/>
        </div>
    </div>
  );
}

export default App;
          