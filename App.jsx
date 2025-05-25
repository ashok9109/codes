import React, { useState } from 'react'
import AuthForm from './components/AuthForm';

const App = () => {
const [toggle,setToggle] = useState(true)
  return (
    <div>
      <AuthForm toggle ={toggle} setToggle={setToggle} />
      
    </div>
  )
}

export default App;
