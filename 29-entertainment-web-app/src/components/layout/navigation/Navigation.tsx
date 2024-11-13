import Container from '../../ui/Container';
import Header from '../Header';
import Sidebar from '../Sidebar';
import Navbar from './Navbar';
import { useMediaQuery } from '../../../hooks/useMediaQuery';

function Navigation() {
  const { screenSize } = useMediaQuery();

  if (screenSize === 'large' || screenSize === 'extralarge') {
    return (
      <Sidebar>
        <Container>
          <Navbar />
        </Container>
      </Sidebar>
    );
  }

  return (
    <Header>
      <Container fullWidth={true}>
        <Navbar />
      </Container>
    </Header>
  );
}

export default Navigation;
