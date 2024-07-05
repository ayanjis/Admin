import React, { useState } from 'react'

function HookCounter() {
  const [count, setCount] = useState(0)
  return (
    <button onClick={() => setCount(prevCount => prevCount + 1)}
      className='bg-green-200 border border-2'>
      Count : {count}
    </button>
  )
}

export default HookCounter
