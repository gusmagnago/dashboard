import { Container, LogoWrapper } from './styles';

import { TfiDashboard } from 'react-icons/tfi';

const Header: React.FC = () => {
  return (
    <Container>
      <LogoWrapper>
        <TfiDashboard />
        <p>Dashboard Name</p>
      </LogoWrapper>
    </Container>
  );
};
export default Header;
