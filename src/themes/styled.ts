import createStyled from '@mui/system/createStyled';
import theme, { Theme } from './materialTheme';

export const styled = createStyled<Theme>({ defaultTheme: theme });
