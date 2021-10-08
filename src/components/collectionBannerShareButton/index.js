import IosShareIcon from '@mui/icons-material/IosShare';
import BannerShareIconStyled from './styled';

function BannerShareIcon(props) {
  return (
    <BannerShareIconStyled bgColor={props.bgColor}>
      <IosShareIcon />
    </BannerShareIconStyled>
  );
}

export default BannerShareIcon;
