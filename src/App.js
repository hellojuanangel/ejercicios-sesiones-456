import logo from './logo.svg';
import './App.css';
import Clock from './components/Clock';
import ClockHook from './components/ClockHook';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Open Bootcamp ReactJS</h1>
        <p>
          Ejercicios Sesiones 4, 5 y 6.
        </p>
      </header>

      <h2>Componente de clase</h2>

      <Clock></Clock>

      <hr></hr>

      <h2>Componente funcional</h2>

      <ClockHook></ClockHook>

    </div>
  );
}

export default App;
