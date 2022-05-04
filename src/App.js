import './App.css';
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import MainContent from './components/MainContent';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <MainContent></MainContent>
      <Footer></Footer>
    </div>
  );
}

export default App;
