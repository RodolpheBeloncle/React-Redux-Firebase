import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/layout/Navbar';

function App() {
  return (
    <BrowserRouter>
      <header className="App-header">
        <Navbar />
      </header>
    </BrowserRouter>
  );
}

export default App;
