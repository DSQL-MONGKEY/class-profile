import { useState } from 'react'
import { BrowserRouter } from 'react-router-dom'

import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Members } from './components/Members'

function App() {
  const [darkTheme, setDarkTheme] = useState(false)

  return (
    <BrowserRouter>
      <div className={darkTheme ? 'dark' : ''}>
        <div className={`bg-slate-200 dark:bg-gray-900 min-h-screen`}>
          <Navbar 
            darkTheme={darkTheme} 
            setDarkTheme={setDarkTheme} />
          <Hero/>
        </div>
        <About/>
        <Members/>
      </div>
    </BrowserRouter>
  )
}

export default App
