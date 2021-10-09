import { Divider as MuiDivider, styled } from '@mui/material';

export const Divider = styled(MuiDivider, { shouldForwardProp: prop => prop !== 'customProps' })(
  ({ theme: { palette }, customProps }) => ({
    borderColor: palette.grey[300],
    width: '100%',
    ...customProps
  })
);
