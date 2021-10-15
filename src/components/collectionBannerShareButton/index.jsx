import IosShareIcon from '@mui/icons-material/IosShare';

import * as Styled from './styles';

function BannerShareIcon(props) {
  const { bgColor } = props;

  return (
    <Styled.BannerShareIconStyled bgColor={bgColor}>
      <IosShareIcon />
    </Styled.BannerShareIconStyled>
  );
}

export default BannerShareIcon;
