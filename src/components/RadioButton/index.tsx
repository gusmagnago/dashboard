import { InputHTMLAttributes } from 'react';
import { Input, Label, Wrapper } from './styles';

type RadioButtonProps = {
  checked?: boolean;
  name: string;
  value: string;
  label: string;
  onChange: (e: React.ChangeEvent) => void;
};

const RadioButton = ({
  checked,
  name,
  value,
  label,
  onChange,
}: RadioButtonProps & InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <Wrapper>
      <Input
        type="radio"
        id={value}
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
      />
      <Label htmlFor={value}>{label}</Label>
    </Wrapper>
  );
};

export default RadioButton;
