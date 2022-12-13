import { useState } from 'react';
import Aside from '../Aside';
import Content from '../Content';
import Header from '../Header';
import { Wrapper } from './styles';

const Layout: React.FC = () => {
  return (
    <Wrapper>
      <Header />
      <Aside />
      <Content />
    </Wrapper>
  );
};
export default Layout;
