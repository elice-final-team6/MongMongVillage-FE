<<<<<<< HEAD
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {
  LoginPage,
  MainPage,
  CommunityPage,
  CommunityDetailPage,
  NewPostPage,
} from './pages';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/community" element={<CommunityPage />} />
        <Route path="/community/:id" element={<CommunityDetailPage />} />
        <Route path="/community/newpost" element={<NewPostPage />} />
      </Routes>
    </BrowserRouter>
=======
import { Route, Routes } from 'react-router-dom';
import { ROUTE_ARR } from './routes/Routes';

function App() {
  return (
    <Routes>
      {ROUTE_ARR.map((el) => (
        <Route path={el.path} key={el.path} element={el.element} />
      ))}
    </Routes>
>>>>>>> dev
  );
}

export default App;
