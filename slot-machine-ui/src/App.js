import { useState } from 'react';
import './App.css';
import SlotMachine from './components/SlotMachine';
import Initializer from './components/Initializer';

function App() {
  const [playing, setPlaying] = useState(false);

  return (
    <div className="App">
      {playing ? <SlotMachine /> : <Initializer onInit={() => setPlaying(true)}/>}
    </div>
  );
}

export default App;
