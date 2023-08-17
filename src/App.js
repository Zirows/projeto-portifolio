import './App.css';
import About from './components/About/About';
import Apresentation from './components/Apresentation/Apresentation';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';

function App() {
  return (
    <div className="App">
      <Header />
      <Apresentation />
      <Skills />
      <Projects />
      <About />
      <Footer />
    </div>
  );
}

export default App;
