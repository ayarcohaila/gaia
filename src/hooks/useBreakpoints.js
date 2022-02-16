import useMediaQuery from '@mui/material/useMediaQuery';

import theme from '~/themes/materialTheme';

export const SMALL_MOBILE_DEVICE_WIDTH = 325;

function useBreakpoints(size) {
  const isExtraSmallDevice = useMediaQuery(theme =>
    theme?.breakpoints?.down(SMALL_MOBILE_DEVICE_WIDTH)
  );
  const isSmallDevice = useMediaQuery(theme => theme?.breakpoints?.down('sm'));
  const isMediumDevice = useMediaQuery(theme => theme?.breakpoints?.down('md'));
  const isExtraMediumDevice = useMediaQuery('(min-width:1250px)');
  const isExtraLargeDevice = useMediaQuery('(min-width:1920px)');
  const matches = useMediaQuery(theme => theme?.breakpoints?.down(size || 0));
  const { lg, md, sm, xl, xs } = theme.breakpoints.values;

  return {
    lg,
    md,
    sm,
    xl,
    xs,
    matches,
    isExtraSmallDevice,
    isSmallDevice,
    isMediumDevice,
    isExtraMediumDevice,
    isExtraLargeDevice
  };
}

export default useBreakpoints;
