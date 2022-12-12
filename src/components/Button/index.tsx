import { Wrapper } from './styles';
import { ButtonProps } from './types';

const Button = ({
  children,
  dataTest = 'button',
  disabled,
  onClick,
  variant,
}: ButtonProps) => {
  return (
    <Wrapper
      dataTest={dataTest}
      disabled={disabled}
      onClick={onClick}
      variant={variant}
    >
      {children}
    </Wrapper>
  );
};

Button.displayName = 'Button';

export default Button;
