import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import './css/App.css';

import Home from './pages/home';
import Favorites from './pages/favorites';
import LoginPage from './pages/login';

import NavBar from './components/navbar';

import { MovieProvider } from './contexts/MovieContext';
import { AuthProvider, useAuth } from './contexts/AuthContext';

function App() {
  return (
    <AuthProvider>
      <MovieProvider>
        <NavBar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/favorites"
              element={
                <ProtectedRoute>
                  <Favorites />
                </ProtectedRoute>
              }
            />
            <Route path="/login" element={<LoginPage />} />
          </Routes>
        </main>
      </MovieProvider>
    </AuthProvider>
  );
}

export default App;


function ProtectedRoute({ children }) {
  const { user } = useAuth();
  const location = useLocation();

  if (!user) {

    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}
