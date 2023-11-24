import { Outlet } from 'react-router-dom';
import Header from '../../components/Header/Header';
import { Container } from './Layout.styled';

const Layout = () => {
  return (
    <Container>
      <nav>
        <Header />
      </nav>
      <main>
        <Outlet />
      </main>
    </Container>
  );
};

export default Layout;
