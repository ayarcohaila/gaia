import Image from 'next/image';
import React from 'react';
import Logo from '../../../../public/images/newToNFT/nftg-icon.webp';

import * as Styled from './styles';

const NFTGeniusCard: React.FC = () => {
  return (
    <Styled.Anchor href="https://forms.gle/2MZuvepYAvJNXGyb7" target="_blank" rel="noreferrer">
      <Styled.Container>
        <Styled.IconContainer>
          <Image width={170} height={170} src={Logo} />
        </Styled.IconContainer>
        <Styled.Title>This could be your NFT Collection</Styled.Title>
        <Styled.Divider />
        <Styled.Description>Apply now to partner with Gaia and NFT Genius</Styled.Description>
      </Styled.Container>
    </Styled.Anchor>
  );
};

export default NFTGeniusCard;
