import { useState } from 'react'
import './App.css'

import {DummyLogin, AuthProvider} from './components/AuthProvider.jsx'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>

    <AuthProvider>

      <DummyLogin></DummyLogin>

    </AuthProvider>


    

    </>
  )
}

export default App
