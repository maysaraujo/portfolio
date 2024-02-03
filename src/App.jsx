import './App.css';
import About from './components/About/About';
import Apresentation from './components/Apresentation/Apresentation';
import Experience from './components/Experience/Experience';
import Header from './components/Header/Header';
import Skills from './components/Skills/Skills';

function App() {
  return (
    <div>
      <Header />
      <Apresentation />
      <About />
      <Experience />
      <Skills />
    </div>
  );
}

export default App;
