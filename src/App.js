// src/App.js
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './MyComponents/HomePage';
import PortfolioPage from './MyComponents/PortfolioPage';

// Import Admin System
import { AdminProvider } from './context/AdminContext';
import { ContentProvider } from './context/ContentContext';
import AdminLoginModal from './components/Admin/AdminLoginModal';
import AdminControlPanel from './components/Admin/AdminControlPanel';

function App() {
  return (
    <AdminProvider>
      <ContentProvider>
        <BrowserRouter>
          {/* Hidden Admin Components - Only visible to admins */}
          <AdminLoginModal />
          <AdminControlPanel />
          
          {/* Your Regular Website Routes */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
          </Routes>
        </BrowserRouter>
      </ContentProvider>
    </AdminProvider>
  );
}

export default App;