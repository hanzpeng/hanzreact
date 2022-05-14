import './App.css';
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import MainContent from './components/MainContent';
import GithubCards from './components/GithubCards';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <MainContent></MainContent>
      <GithubCards></GithubCards>
      <Footer></Footer>
    </div>
  );
}

export default App;
