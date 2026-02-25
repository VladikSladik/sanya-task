import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CharactersList, CharacterDetail } from './pages';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CharactersList />} />
        <Route path="/character/:id" element={<CharacterDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
