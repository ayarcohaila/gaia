import { BannerAccountStyled } from './CollectionBannerStyled';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import Tooltip from '@mui/material/Tooltip';

import { useState } from 'react';

function BannerAccount(props) {
  const defaultTooltipTitle = 'Copy to clipboard';
  const [tooltipTitle, setTooltipTitle] = useState(defaultTooltipTitle);
  const { accountNumber } = props;

  const secretAccount = accountNumber => {
    return `${accountNumber.substring(0, 5)}...${accountNumber.substring(
      accountNumber.length - 4,
      accountNumber.length
    )}`;
  };

  const copyHandler = () => {
    navigator.clipboard.writeText(accountNumber);
    setTooltipTitle('Copied!');
  };

  return (
    <Tooltip title={tooltipTitle} onOpen={() => setTooltipTitle(defaultTooltipTitle)}>
      <BannerAccountStyled onClick={copyHandler}>
        <span>{secretAccount(accountNumber)}</span>
        <ContentCopyIcon style={{ color: '#fff', transform: 'rotateY(140deg)' }} fontSize="12px" />
      </BannerAccountStyled>
    </Tooltip>
  );
}

export default BannerAccount;
