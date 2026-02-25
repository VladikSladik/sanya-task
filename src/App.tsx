import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Header, Footer } from '@/components';
import { CharactersList, CharacterDetail } from '@/pages';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<CharactersList />} />
            <Route path="/character/:id" element={<CharacterDetail />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
