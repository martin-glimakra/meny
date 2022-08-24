import './App.css';
import Menu from './components/Menu';
import { useState } from 'react'


function App() {

  const [isMenuOpen, setIsMenuOpen ] = useState(false)


  function hanteraKlick () {
    setIsMenuOpen(true)
  }

  return (
    <div className='wrapper' >
      <button onClick={hanteraKlick}>öppna menyn</button>
      <Menu isMenuOpen={isMenuOpen} />
    </div>
  );
}

export default App;
