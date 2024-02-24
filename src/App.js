import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>imagen primero 1</p>
        <img src='https://img.freepik.com/vector-gratis/atomo-ilustracion-modelo-electrones-neutrones-aislados_1284-53084.jpg?size=338&ext=jpg&ga=GA1.1.1546980028.1708732800&semt=ais' />
        <p>Audio 2</p>
      <audio controls>
        <source src="https://samplelib.com/lib/preview/mp3/sample-15s.mp3" type="audio/mpeg" />
        Tu navegador no soporta el elemento de audio.
      </audio>
        <audio controls>
          <source src="https://samplelib.com/lib/preview/mp3/sample-15s.mp3" type="audio/mpeg"/>
          "Tu navegador no soporta el elemento de audio."
        </audio>
        <p>Video ejemplo 3</p>
      <video controls width="600">
        <source src="https://samplelib.com/lib/preview/mp4/sample-30s.mp4" type="video/mp4" />
        Tu navegador no soporta el elemento de video.
      </video>
      <h1>Ejemplo de texto 4</h1>
      <p>DOM significa Document Object Model, en español sería Modelo de Objetos del Documento. Es una interfaz de programación que nos permite crear, cambiar, o remover elementos del documento. También podemos agregar eventos a esos elementos para hacer más dinámica nuestra página.El DOM visualiza el documento de HTML como un árbol de tres nodos. Un nodo representa un documento de HTML.</p>
      </header>
    </div>
  );
}

export default App;
