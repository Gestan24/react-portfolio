import React from 'react';
import Header from './components/Header';
import About from './components/About';
import './App.css';



function App() {

  // const [selectedComponent, setSelectedComponent] = useState(false);

  return (
    <div>

      <Header>
        {/* selectedComponent= {selectedComponent}
        setSelectedComponent= {setSelectedComponent} */}
      </Header>

      <main>
        <About></About>
      </main>
     
    </div>
  );
}

export default App;
