import { useState } from 'react'
import { BrowserRouter } from 'react-router-dom'

import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'

function App() {
  const [darkTheme, setDarkTheme] = useState(false)

  return (
    <BrowserRouter>
      <div className={darkTheme ? 'dark' : ''}>
        <div className={`bg-blue-300 dark:bg-gray-900 min-h-screen`}>
          <Navbar 
            darkTheme={darkTheme} 
            setDarkTheme={setDarkTheme} />
        </div>
        <Hero/>
      </div>
    </BrowserRouter>
  )
}

export default App
