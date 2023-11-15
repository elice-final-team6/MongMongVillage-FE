import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { LoginPage, MainPage, CommunityPage } from './pages';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/community" element={<CommunityPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
