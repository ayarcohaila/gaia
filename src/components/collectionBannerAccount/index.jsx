import { Box } from '@mui/material';
import * as Styled from './styles';

function BannerAccount({ bannerName }) {
  return (
    <Box my="auto">
      <Styled.BannerName>{'@' + bannerName?.toUpperCase()}</Styled.BannerName>
    </Box>
  );
}

export default BannerAccount;
