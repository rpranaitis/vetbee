import { Link, useLocation } from 'react-router-dom';
import { ROUTES, navigationBarRoutes } from '../../routes';
import LogoUrl from '../../assets/logo.png';
import styled, { css } from 'styled-components';

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #f2f2f2;
  margin-bottom: 20px;
`;

const Logo = styled.img`
  width: 120px;
`;

const Nav = styled.nav`
  display: flex;
  gap: 20px;

  & > a {
    color: #fc8118;
    text-decoration: none;
  }
`;

const NavLink = styled(Link)`
  color: #fc8118;
  text-decoration: none;

  ${(props) =>
    props.$isActive &&
    css`
      font-weight: bold;
    `}
`;

const NavigationBar = () => {
  const location = useLocation();

  console.log(location);

  return (
    <Header>
      <div>
        <Link to={ROUTES.HOME}>
          <Logo src={LogoUrl} alt="Logo" />
        </Link>
      </div>
      <Nav>
        {navigationBarRoutes.map((route, index) => (
          <NavLink
            key={route.path}
            to={route.path}
            $isActive={location.pathname === route.path || (location.pathname === ROUTES.HOME && index === 0)}
          >
            {route.name}
          </NavLink>
        ))}
      </Nav>
    </Header>
  );
};

export default NavigationBar;
