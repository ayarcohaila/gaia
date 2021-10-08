import { BannerAccountStyled, BannerName } from './styled';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import Tooltip from '@mui/material/Tooltip';
import { truncate } from '~/utils/string';
import { useState } from 'react';
import { Box } from '@mui/material';

function BannerAccount(props) {
  const defaultTooltipTitle = 'Copy to clipboard';
  const [tooltipTitle, setTooltipTitle] = useState(defaultTooltipTitle);
  const { accountNumber, bannerName } = props;

  const secretAccount = truncate(accountNumber, 5, -3, '\u2026');

  const copyHandler = () => {
    navigator.clipboard.writeText(accountNumber);
    setTooltipTitle('Copied!');
  };

  return (
    <Box>
      <BannerName>{bannerName}</BannerName>
      <Tooltip title={tooltipTitle} onOpen={() => setTooltipTitle(defaultTooltipTitle)}>
        <BannerAccountStyled onClick={copyHandler} bgColor={props.bgColor}>
          <span>{secretAccount}</span>
          <ContentCopyIcon
            style={{ color: '#fff', transform: 'rotateY(170deg)' }}
            fontSize="12px"
          />
        </BannerAccountStyled>
      </Tooltip>
    </Box>
  );
}

export default BannerAccount;
