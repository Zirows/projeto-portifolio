import './App.css';
import Apresentation from './components/Apresentation/Apresentation';
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
    </div>
  );
}

export default App;
