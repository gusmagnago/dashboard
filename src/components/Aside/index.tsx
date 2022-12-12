import { ButtonWrapper, Container, StyledButton } from './styles';
import { TfiAngleDoubleRight, TfiAngleDoubleLeft } from 'react-icons/tfi';
import { PropTypes } from './types';

const Aside = ({ open, onClick }: PropTypes) => {
  return (
    <>
      <Container isOpen={open}>
        <ButtonWrapper>
          <StyledButton onClick={onClick}>
            {open ? <TfiAngleDoubleLeft /> : <TfiAngleDoubleRight />}
          </StyledButton>
        </ButtonWrapper>
      </Container>
    </>
  );
};
export default Aside;
