import { ReactNode } from 'react';
import RadioButton from '../RadioButton';
import { Container } from './styles';

type CardPropTypes = {
  children: ReactNode;
};

const Card = ({ children }: CardPropTypes) => {
  return (
    <Container>
      <div>{children}</div>
    </Container>
  );
};

export default Card;
