import React from 'react';
import Header from './components/Header';
import About from './components/About';
import './App.css';



function App() {

  const [selectedComponent, setSelectedComponent] = useState('About');

  return (
    <div>

      <Header>
        selectedComponent= {selectedComponent}
        setSelectedComponent= {setSelectedComponent}
      </Header>

      <main>
        {selectedComponent === 'About' ? (
          <About></About>
        ) : selectedComponent === 'Portfolio' ? (
          <Project></Project>
        ) : selectedComponent === 'Contact' ? (
          <Contact></Contact>
        ) : selectedComponent === 'Resume' }
        
      </main>
     
    </div>
  );
}

export default App;
