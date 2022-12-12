export type ButtonProps = {
  children: React.ReactNode;
  dataTest?: string;
  disabled?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  variant?: 'primary' | 'secondary';
};
