import 'styled-components';
import {
  colors,
  typography,
  units,
  borderRadius,
  boxShadow,
  breakpoints,
} from './modules/components/theme/config/variables';


declare module 'styled-components' {
  export interface DefaultTheme {
    font: typeof typography;
    units: typeof units;
    colors: typeof colors;
    borderRadius: typeof borderRadius;
    boxShadow: typeof boxShadow;
    breakpoints: typeof breakpoints;
  }
}
