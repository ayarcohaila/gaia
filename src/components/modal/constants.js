export const DRAWER_MODAL_PROPS = {
  keepMounted: true,
  BackdropProps: {
    sx: {
      WebkitBackdropFilter: 'none',
      backdropFilter: 'none',
      bgcolor: '#171a24'
    }
  },
  PaperProps: {
    sx: {
      bgcolor: 'red'
    }
  }
};

export const MODAL_BACKDROP_PROPS = {
  sx: {
    WebkitBackdropFilter: 'blur(20px)',
    backdropFilter: 'blur(20px)',
    bgcolor: 'rgba(28, 29, 34, 0.94)'
  }
};
