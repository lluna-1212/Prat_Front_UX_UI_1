import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FPSMeter from './componentes/FPSMeter.jsx'
import HeavyList from './componentes/HeavyList.jsx'

function App() {
      return (
        <>
          <h1>Demo FPS</h1>
          <FPSMeter />
          <HeavyList/>
        </>
      );
    }
 
 export default App;

