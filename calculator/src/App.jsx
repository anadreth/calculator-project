import { useState } from 'react'
import './App.css'

function App() {
  const [currentOut, setCurrentOut] = useState("");
  const [previousOut, setPreviousOut] = useState("");
  return (
    <div className="App">
      <div id="table">
        <div className='output'>
            <div className='previous-output'>{previousOut}</div>
            <div className='current-output'>{currentOut}</div>
        </div>
          <button onClick={() => setCurrentOut(currentOut + '7')}>7</button>
          <button onClick={() => setCurrentOut(currentOut + '8')}>8</button>
          <button onClick={() => setCurrentOut(currentOut + '9')}>9</button>
          <button onClick={() => setCurrentOut(currentOut + ' / ')}>/</button>
          <button onClick={() => setCurrentOut(currentOut + '4')}>4</button>
          <button onClick={() => setCurrentOut(currentOut + '5')}>5</button>
          <button onClick={() => setCurrentOut(currentOut + '6')}>6</button>
          <button onClick={() => setCurrentOut(currentOut + ' * ')}>x</button>
          <button onClick={() => setCurrentOut(currentOut + '1')}>1</button>
          <button onClick={() => setCurrentOut(currentOut + '2')}>2</button>
          <button onClick={() => setCurrentOut(currentOut + '3')}>3</button>
          <button onClick={() => setCurrentOut(currentOut + ' - ')}>-</button>
          <button onClick={() => setCurrentOut(currentOut + '0')}>0</button>
          <button onClick={() => setCurrentOut(currentOut + '.')}>.</button>
          <button onClick={() => setCurrentOut(currentOut + ' % ')}>%</button>
          <button onClick={() => setCurrentOut(currentOut + ' + ')}>+</button>
          <button id="big-btn" onClick={() => {setCurrentOut(currentOut == "" ? "" : eval(currentOut)); setPreviousOut(currentOut)}}>=</button>
          <button id="ac-btn" onClick={() => {setCurrentOut(""); setPreviousOut("")}}>AC</button>
      </div>
    </div>
  )
}

export default App
