// useContext: simple Counter
// http://localhost:3000/isolated/exercise/03.js

import * as React from 'react'
import {useContext} from 'react'
import {useState} from 'react'
import {createContext} from 'react'

const CounterContext = createContext()

function CountProvider(props) {
  const [count, setCount] = useState(0)
  const value = [count, setCount]
  return <CounterContext.Provider value={value} {...props} />
}

function CountDisplay() {
  const [count] = useContext(CounterContext)
  return <div>{`The current count is ${count}`}</div>
}

function Counter() {
  const [, setCount] = useContext(CounterContext)
  const increment = () => setCount(c => c + 1)
  return <button onClick={increment}>Increment count</button>
}

function App() {
  return (
    <div>
      <CountProvider>
        <CountDisplay />
        <Counter />
      </CountProvider>
    </div>
  )
}

export default App
