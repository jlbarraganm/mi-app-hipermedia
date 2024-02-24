import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          imagen primero
        </p>
        <img src='https://img.freepik.com/vector-gratis/atomo-ilustracion-modelo-electrones-neutrones-aislados_1284-53084.jpg?size=338&ext=jpg&ga=GA1.1.1546980028.1708732800&semt=ais' />
        <h1>Audio</h1>
        <source src="https://artlist.io/royalty-free-music/song/groove-parade/127651"/>
      </header>
    </div>
  );
}

export default App;
