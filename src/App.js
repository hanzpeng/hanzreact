import './App.css';
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import MainContent from './components/MainContent';
import GithubCards from './components/GithubCards';
import StarMatch from './components/StarMatch';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <MainContent></MainContent>
      <GithubCards title="Add Github Cards"></GithubCards>
      <StarMatch />
      <Footer></Footer>

    </div>
  );
}

export default App;
