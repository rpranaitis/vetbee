import { Route, Routes } from 'react-router-dom';
import { routes } from './routes';

const App = () => {
  return (
    <Routes>
      {routes.map(({ path, Component }) => (
        <Route key={path} path={path} element={<Component />}></Route>
      ))}
    </Routes>
  );
};

export default App;
