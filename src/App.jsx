import { Route, Routes } from 'react-router-dom';
import { routes } from './routes';
import NavigationBar from './components/NavigationBar/NavigationBar';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1000px;
  margin: 0 auto;
  padding: 15px;
`;

const Container = styled.div`
  width: 100%;
`;

const App = () => {
  return (
    <Wrapper>
      <Container>
        <NavigationBar />
        <Routes>
          {routes.map(({ path, Component }) => (
            <Route key={path} path={path} element={<Component />}></Route>
          ))}
        </Routes>
      </Container>
    </Wrapper>
  );
};

export default App;
