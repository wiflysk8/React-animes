import './App.scss';
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import HomePage from './pages/HomePage/HomePage';
import AnimePage from './pages/AnimePage/AnimePage';
import Header from './core/Header/Header';
import AnimeDetailPage from './pages/AnimePage/AnimeDetailPage';
import ContactPage from './pages/ContactPage/ContactPage';

function App() {
  return (
    <Router>
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/animes" element={<AnimePage />} />
        <Route path="/animes/:idAnime" element={<AnimeDetailPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
     
    </div>
    </Router>
  );
}

export default App;
