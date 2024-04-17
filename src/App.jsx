import { Route, Routes } from 'react-router-dom';
import { routes } from './routes';
import NavigationBar from './components/NavigationBar/NavigationBar';
import styled from 'styled-components';
import Footer from './components/Footer/Footer';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1200px;
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
        <Footer>Copyright © VetBee 2018. All rights reserved.</Footer>
      </Container>
    </Wrapper>
  );
};

export default App;
