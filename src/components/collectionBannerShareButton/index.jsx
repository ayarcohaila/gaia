import IosShareIcon from '@mui/icons-material/IosShare';
import * as Styled from './styles';

function BannerShareIcon(props) {
  return (
    <Styled.BannerShareIconStyled bgColor={props.bgColor}>
      <IosShareIcon />
    </Styled.BannerShareIconStyled>
  );
}

export default BannerShareIcon;
