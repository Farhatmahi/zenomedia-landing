import logo from './logo.svg';
import './App.css';
import Banner from './Components/Banner';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div className="App space-y-20 bg-gray-100">
      <Navbar />
      <Banner />
    </div>
  );
}

export default App;
