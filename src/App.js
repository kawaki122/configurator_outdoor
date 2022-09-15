import './styles/App.css';
import Scene from './Scene';
import Menu from './components/Menu';
import {useState} from 'react';

function App() {
  const [slider1, setslider1] = useState(10);
  const [slider2, setslider2] = useState(5);
  const [slider3, setslider3] = useState(18);
  const [slider4, setslider4] = useState(0);

  return (
    <div className="App">
      <Menu
        slider1={slider1}
        setslider1={setslider1}
        slider2={slider2}
        setslider2={setslider2}
        slider3={slider3}
        setslider3={setslider3}
        slider4={slider4}
        setslider4={setslider4}
      />
      <Scene
        slider1={slider1}
        slider2={slider2}
        slider3={slider3}
        slider4={slider4}
      />
    </div>
  );
}

export default App;

