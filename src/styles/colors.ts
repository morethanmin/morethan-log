import {
  gray,
  blue,
  red,
  green,
  grayDark,
  blueDark,
  redDark,
  greenDark,
  indigo,
  indigoDark,
  amber,
  amberDark,
  grayA,
  grayDarkA,
  purple,
  purpleDark,
  pink,
  pinkDark,
} from "@radix-ui/colors"

export type Colors = typeof colors.light & typeof colors.dark

export const colors = {
  light: {
    ...indigo,
    ...gray,
    ...blue,
    ...red,
    ...green,
    ...amber,
    ...grayA,
    ...purple,
    ...pink,
  },
  dark: {
    ...indigoDark,
    ...grayDark,
    ...blueDark,
    ...redDark,
    ...greenDark,
    ...amberDark,
    ...grayDarkA,
    ...purpleDark,
    ...pinkDark,
  },
}
