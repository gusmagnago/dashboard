import { Button, ButtonWrapper, Container } from './styles';
import { TfiAngleDoubleRight, TfiAngleDoubleLeft } from 'react-icons/tfi';
import { PropTypes } from './types';

const Aside: React.FC<PropTypes> = ({ open, onClick }) => {
  return (
    <>
      <Container isOpen={open}>
        {open ? (
          <>
            <ButtonWrapper>
              <Button onClick={onClick} isOpen={open}>
                <TfiAngleDoubleLeft />
              </Button>
            </ButtonWrapper>
            <h1>Aside</h1>
          </>
        ) : (
          <Button onClick={onClick}>
            <TfiAngleDoubleRight />
          </Button>
        )}
      </Container>
    </>
  );
};
export default Aside;
