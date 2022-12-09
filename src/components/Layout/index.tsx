import { useState } from 'react';
import Aside from '../Aside';
import Content from '../Content';
import Header from '../Header';
import { Wrapper } from './styles';

const Layout: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <Wrapper isOpen={isOpen}>
      <Header />
      <Aside open={isOpen} onClick={() => setIsOpen(!isOpen)} />
      <Content />
    </Wrapper>
  );
};
export default Layout;
