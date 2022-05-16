import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import MainContent from "./components/MainContent";
import GithubCards from "./components/GithubCards";
import StarMatch from "./components/StarMatch";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar></Navbar>
        <Routes>
          <Route exact path="/" element={<MainContent/>} />
          <Route exact path="/github" element={<GithubCards/>} />
          <Route exact path="/starmatch" element={<StarMatch/>} />
          <Route path="*" element={<NotFound/>}/>
        </Routes>
        <Footer></Footer>
      </div>
    </Router>
  );
}

function NotFound(){
  return (
    <div>
      page not found
    </div>
  )
};

export default App;
