import 'styled-components';
declare module 'styled-components' {
  export interface DefaultTheme {
    color: Colors;
    box: BoxShadow;
    spacing: Spacing;
    media: ViewPorts;
  }
}

export type Colors = {
  background: string;
  primary: string;
  secondary: string;
  tertiary: string;
  bright: string;

  grey: string;
  white: string;
  black: string;

  disabled: string;

  success: string;
  info: string;
  error: string;
};

export type BoxShadow = {
  shadow: string;
  shadowBottomRight: string;
  innerShadow: string;
  buttonShadow: string;
};

export type Spacing = {
  xs: string;
  small: string;
  medium: string;
  large: string;
  xl: string;
};

export type ViewPorts = {
  mobile: string;
  tablet: string;
  smallDesk: string;
  largeDesk: string;

  gteSmall: string;
  gteMedium: string;

  lteSmall: string;
  lteMedium: string;
};
