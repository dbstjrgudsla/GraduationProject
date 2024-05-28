import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginModal from './components/LoginModal';
import TermsPage from './pages/TermsPage';
import MainPage from './pages/MainPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginModal isOpen={true} onClose={() => {}} />} />
        <Route path="/terms" element={<TermsPage />} />
        <Route path="/" element={<MainPage />} />
      </Routes>
    </Router>
  );
};

export default App;
