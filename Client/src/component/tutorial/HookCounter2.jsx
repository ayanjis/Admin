import React, { useState } from 'react'

function HookCounter2() {
  const [name, setName] = useState({
    firstName: '',
    lastName: '',
  })

  return (
    <div className='bg-orange-200'>

      <input className='bg-transparent' type="text"
        value={ name.firstName }
        onChange={ e => setName({ ...name, firstName: e.target.value }) } />

      <input className='bg-transparent' type="text"
        value={ name.lastName }
        onChange={ e => setName({ ...name, lastName: e.target.value }) } />

      <h2>Frisrname : { name.firstName }</h2>
      <h2>Lastname : { name.lastName }</h2>

    </div>
  )
}

export default HookCounter2
