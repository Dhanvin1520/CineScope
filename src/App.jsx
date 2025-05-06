import { Routes, Route } from 'react-router-dom';
import './css/App.css';
import Home from './pages/home';
import Favorites from './pages/favorites';
import LoginPage from './pages/login';
import NavBar from './components/navbar';
import { MovieProvider } from './contexts/MovieContext';

function App() {
  return (
    <MovieProvider>
      <NavBar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/login" element={<LoginPage />} /> 
        </Routes>
      </main>
    </MovieProvider>
  );
}

export default App;