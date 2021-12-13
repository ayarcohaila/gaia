import * as Styled from './styles';

const BurstIcon = () => {
  const burst = (
    <>
      <div className="icon-1"></div>
      <div className="icon-2"></div>
      <div className="icon-3"></div>
      <div className="icon-4"></div>
      <div className="icon-5"></div>
    </>
  );

  return <Styled.BurstIcon>{burst}</Styled.BurstIcon>;
};

export default BurstIcon;
