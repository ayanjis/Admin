import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Users from './component/Users.jsx'
import Auth from './component/Auth.jsx'
import HookCounter from './component/tutorial/HookCounter.jsx'
import HookCounter2 from './component/tutorial/HookCounter2.jsx'
import Axios from './component/tutorial/Axios.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div  className='font-mono'>
      <Auth />
      {/* <Users /> */}
      {/* <HookCounter /> */}
      {/* <HookCounter2/> */}
      {/* <Axios /> */}
    </div>
  )
}

export default App
