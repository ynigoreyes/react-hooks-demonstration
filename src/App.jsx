import React from 'react';
import './App.css';
import useCountState from './hooks/state/counter.jsx'
import useTitleEffect from './hooks/effects/title.jsx'

const App = () => {
  const [count, setCount] = useCountState()
  useTitleEffect(count)

  return (
    <div className="App">
      <header
        onClick={e => setCount(count + 1)}
        className="App-header"
      >
        React Hooks at their finest!
        <div style={{ margin: '10px'}}/>
        { count }
      </header>
    </div>
  )
}


export default App;
