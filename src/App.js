import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Footer from './components/Footer';
import './App.css';



function App() {

  // const [selectedComponent, setSelectedComponent] = useState('About');

  return (
    <div>

      <Header>
        {/* selectedComponent= {selectedComponent}
        setSelectedComponent= {setSelectedComponent} */}
      </Header>

      <main className='vh-100'>
        {/* {selectedComponent === 'About' ? (
          <About></About>
        ) : selectedComponent === 'Portfolio' ? (
          <Project></Project>
        ) : selectedComponent === 'Contact' ? (
          <Contact></Contact>
        ) : selectedComponent === 'Resume' } */}
        <About></About>
      </main>
      <Footer></Footer>

    </div>
  );
}

export default App;
