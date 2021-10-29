import { useState } from 'react';
import { Box, Tooltip } from '@mui/material';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

import * as Styled from './styles';

function BannerAccount(props) {
  const defaultTooltipTitle = 'Copy to clipboard';
  const [tooltipTitle, setTooltipTitle] = useState(defaultTooltipTitle);
  const { accountNumber, bannerName } = props;

  const secretAccount = accountNumber?.substring(0, 5) + '...' + accountNumber?.substring(6, 10);

  const copyHandler = () => {
    navigator.clipboard.writeText(accountNumber);
    setTooltipTitle('Copied!');
  };

  return (
    <Box>
      <Styled.BannerName>{'@' + bannerName?.toUpperCase()}</Styled.BannerName>
      <Tooltip title={tooltipTitle} onOpen={() => setTooltipTitle(defaultTooltipTitle)}>
        <Styled.BannerAccountStyled onClick={copyHandler} bgColor={props.bgColor}>
          <span>{secretAccount}</span>
          <ContentCopyIcon style={{ width: '12px', color: '#fff', transform: 'rotateY(170deg)' }} />
        </Styled.BannerAccountStyled>
      </Tooltip>
    </Box>
  );
}

export default BannerAccount;
