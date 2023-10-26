import React from 'react'; 
import { useSelector, useDispatch } from 'react-redux';
import './App.css';
import {incNumber, decNumber} from './Actions/index';

function App() {
  const myState = useSelector((state) => state.changeTheNumber)
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h2>Redux Practice</h2>
      <h2>Increement/decreement count</h2>
      <div className='quantity'>
      <a className='quantity_minus' title='decrement' onClick={dispatch(decNumber())}><span>-</span></a>
      <input name='quantity' type='text' className='quantity_input' value={myState}/>
      <a className='quantity_plus' title='increment' onClick={() => dispatch(incNumber())}><span>+</span></a>

      </div>
    </div>
  );
}

export default App;
