import Image from 'next/image';
import { Price, PriceContainer } from './styled';
import formatPrice from '~/utils/formatPrice';

function AssetPrice({ value }) {
  return (
    <PriceContainer>
      <Image src="/icons/list.svg" width={10} height={10} />
      <Price>{formatPrice(value)}</Price>
    </PriceContainer>
  );
}

export default AssetPrice;
