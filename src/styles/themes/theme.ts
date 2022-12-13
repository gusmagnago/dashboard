import { color, shadow, spacing, media, borderRadius } from './utils';

export default {
  color: {
    background: color.background,
    primary: color.primary,
    secondary: color.secondary,
    tertiary: color.tertiary,
    bright: color.bright,

    grey: color.grey,
    white: color.white,
    black: color.black,

    disabled: color.grey,

    success: color.success,
    info: color.info,
    error: color.error,
  },
  box: {
    shadow: shadow.primary,
    innerShadow: shadow.inner,
    shadowBottomRight: shadow.bottomRight,
    buttonShadow: shadow.button,
  },
  spacing: {
    xs: spacing.xs,
    small: spacing.small,
    medium: spacing.medium,
    large: spacing.large,
    xl: spacing.xl,
  },
  media: {
    mobile: media.mobile,
    tablet: media.tablet,
    smallDesk: media.smallDesk,
    largeDesk: media.largeDesk,

    gteSmall: media.gteSmallMedia,
    gteMedium: media.gteMediumMedia,

    lteSmall: media.lteSmallMedia,
    lteMedium: media.lteMediumMedia,
  },
  borderRadius: borderRadius,
};
