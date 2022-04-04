import React, { useState } from 'react'
import '../styles/App.css';
import { Count } from './Count';
import CountIncrementer from './CountIncrementer';
const App = () => {
  const [count, setCount] = useState(0)

  const handler = () => {
    setCount(count => count + 1)
  }
  return (
    <div id="main">
      <div>
        <Count count={count} key={1} id={1} />
        <Count count={count} key={2} id={2} />
        <Count count={count} key={3} id={3} />
      </div>

      <div>
        <CountIncrementer handler={handler} key={1} id={1} />
        <CountIncrementer handler={handler} key={2} id={2} />
        <CountIncrementer handler={handler} key={3} id={3} />
      </div>

    </div>
  )
}


export default App;
