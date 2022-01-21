import { styled, Box } from '@mui/material';

export const StyledContainer = styled(Box, { shouldForwardProp: prop => prop !== 'open' })(
  ({ open, theme: { breakpoints } }) => ({
    backgroundColor: 'rgb(255, 255, 255)',
    height: 'auto',
    width: '17vw',

    [breakpoints.down('md')]: {
      width: '50vw'
    },

    border: 'none',
    borderRadius: '10px',
    boxShadow: 'rgba(0, 0, 0, 16%) 0px 4px 16px',
    display: open ? 'flex' : 'none',
    padding: '0',
    alignItems: 'center',
    justifyContent: 'center',

    ul: {
      listStyle: 'none',
      width: '100%',
      padding: '0',
      margin: '0'
    },

    li: {
      height: '30px',
      cursor: 'pointer',
      borderBottom: '1px solid rgb(229, 232, 235)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-start',
      padding: '16px',
      paddingRight: '0',
      fontWeight: 'bold',
      a: {
        textDecoration: 'none',
        color: 'rgb(0, 0, 0)',
        fontWeight: 'bold',
        display: 'flex',
        alignItems: 'center'
      },

      img: {
        width: '24px',
        height: '24px',
        marginRight: '16px'
      },

      '&:hover': {
        boxShadow: 'rgb(0 0 0 / 16%) 0px 4px 16px'
      },

      '&:first-of-type': {
        borderTopRightRadius: '10px',
        borderTopLeftRadius: '10px'
      },

      '&:last-of-type': {
        borderBottomRightRadius: '10px',
        borderBottomLeftRadius: '10px',
        borderBottom: 'none'
      },

      button: {
        backgroundColor: 'transparent',
        border: 'none',
        width: '100%',
        display: 'flex',
        justifyContent: 'flex-start',
        padding: '0',
        fontWeight: 'bold',
        cursor: 'pointer'
      }
    }
  })
);
