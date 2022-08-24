import './App.css';
import Menu from './components/Menu';
import { useState } from 'react'


function App() {

  const [isMenuOpen, setIsMenuOpen ] = useState(false)


  function hanteraKlick () {
    setIsMenuOpen(!isMenuOpen)
  }

  function stäng () {
    setIsMenuOpen(false)
  }

  return (
    <div className='wrapper' >
      <button onClick={hanteraKlick}>{isMenuOpen ? 'stäng' : 'öppna'}</button>
      <Menu isMenuOpen={isMenuOpen} stäng={stäng}  >
        <ul>
          <li>1</li>
          <li>2</li>
          <li>3</li>
        </ul>
      </Menu>
    </div>
  );
}

export default App;
