import { Route, Routes } from 'react-router-dom';
import { ROUTE_ARR } from './routes/Routes';

function App() {
  return (
    <Routes>
      {ROUTE_ARR.map((el) => (
        <Route path={el.path} key={el.path} element={el.element} />
      ))}
    </Routes>
  );
}

export default App;
