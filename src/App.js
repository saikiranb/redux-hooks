import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import CounterComp from './components/CounterComp'
import LoggedIn from './components/LoggedIn'


function App() {

  
  return (
    <div className="App">
      <header className="App-header">
        <LoggedIn/>
        <CounterComp/>
      </header>
    </div>
  );
}

export default App;
