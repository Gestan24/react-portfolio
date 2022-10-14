import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Footer from './components/Footer';
import Project from './components/Project';
import Contact from './components/Contact';
import './App.css';



function App() {

  // const [selectedComponent, setSelectedComponent] = useState('About');

  return (
    <div className='primary'>

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
        {/* <About></About> */}
        {/* <Project></Project> */}
        <Contact></Contact>
      </main>
      <Footer></Footer>

    </div>
  );
}

export default App;
