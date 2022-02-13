import './App.css';
import Titulo from './componentes/Titulo'
import Cursos from './componentes/Cursos'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Titulo/>
      </header>

      <body>
        <Cursos/>
      </body>

    </div>
  );
}

export default App;
