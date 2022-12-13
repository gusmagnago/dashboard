export const color = {
  background: '#f2f2f2',
  primary: '#4B70E2',
  bright: '#cbdff5',

  white: '#ffffff',
  black: '#2E3237',
  grey: '#e0e0e0',

  success: '#b9ecc5',
  info: '#5350f1',
  error: '#f15050',
};

export const shadowValues = {
  largeShadow: {
    pos: `5px 5px 10px ${color.bright}`,
    neg: `-5px -5px 10px ${color.white}`,
  },
  smallShadow: {
    pos: `2px 2px 5px ${color.bright}`,
    neg: `-2px -2px 5px ${color.white}`,
  },
};

export const shadow = {
  primary: `${shadowValues.largeShadow.pos},
             ${shadowValues.largeShadow.neg}`,
  button: `${shadowValues.smallShadow.pos},
            ${shadowValues.smallShadow.neg}`,
  bottomRight: `${shadowValues.largeShadow.pos}`,
  inner: `inset ${shadowValues.largeShadow.pos},
          inset ${shadowValues.largeShadow.neg}`,
};

export const spacing = {
  xs: '0.5rem',
  small: '1rem',
  medium: '1.5rem',
  large: '2rem',
  xl: '3rem',
};

export const borderRadius = {
  borderRadius: '10px',
};

export const viewPorts = {
  mobile: '(max-width: 47.94em)', // <= 767px
  tablet: '(min-width: 48em) and (max-width: 63.94em)', // >= 768px && <= 1023
  smallDesk: '(min-width: 64em) and (max-width: 89.94em)', // >= 1024 && <= 1439
  largeDesk: '(min-width: 90em)', // >= 1440px

  gteSmall: '(min-width: 48em)', // >= 768px
  gteMedium: '(min-width: 64em)', // >= 1024px

  lteSmall: '(max-width: 63.94em)', // <= 1023px
  lteMedium: '(max-width: 89.94em)', // <= 1439px
};

export const media = {
  mobile: `@media ${viewPorts.mobile}`,
  tablet: `@media ${viewPorts.tablet}`,
  smallDesk: `@media ${viewPorts.smallDesk}`,
  largeDesk: `@media ${viewPorts.largeDesk}`,

  gteSmallMedia: `@media ${viewPorts.gteSmall}`,
  gteMediumMedia: `@media ${viewPorts.gteMedium}`,

  lteSmallMedia: `@media ${viewPorts.lteSmall}`,
  lteMediumMedia: `@media ${viewPorts.lteMedium}`,
};
