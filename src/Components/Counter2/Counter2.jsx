import { useState } from 'react'
import cssmodule from './Counter2.module.css'

function Counter2() {
  const [count, setCount] = useState(0)

  return (

    <div className={cssmodule.card}>
      coutner 2
      <button onClick={() => setCount(count + 1)}>
        new count is {count}
      </button>
    </div>
  )
}

export default Counter2
