import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    color: {
      background: string;
      primary: string;
      secondary: string;
      tertiary: string;

      white: string;
      black: string;
      disabled: string;

      success: string;
      info: string;
      error: string;
    };
    box: {
      shadow: string;
      shadowBottomRight: string;
      innerShadow: string;
    };
    spacing: {
      xs: string;
      small: string;
      medium: string;
      large: string;
      xl: string;
    };
  }
}
