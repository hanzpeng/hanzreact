import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import MainContent from "./components/MainContent";
import GithubCards from "./components/GithubCards";
import StarMatch from "./components/StarMatch";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SherryVideo from "./components/SherryVideo";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<MainContent />} />
          <Route path="starmatch" element={<StarMatch />} />
          <Route path="githubcards" element={<GithubCards title='Github Cards'/>} />
          <Route path="githubcards/:id" element={<GithubCards title='Github Cards'/>}/>
          <Route path="sherryvideo" element={<SherryVideo />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer></Footer>
      </div>
    </Router>
  );
}

function NotFound() {
  return <div>page not found</div>;
}

export default App;