import { styled } from '@mui/system';

export const BurstIcon = styled('div')`
  width: 19px;
  height: 14px;

  transform: scale(1);

  margin-right: 5px;

  div {
    height: 100%;
    width: 10px;
    border-radius: 3px;
    position: absolute;
  }

  div:nth-of-type(2n) {
    background-color: #f4f4f6;
  }

  .icon-1 {
    background-color: gray;

    left: 0;
    z-index: 10;
  }

  .icon-2 {
    left: 2px;
    z-index: 9;
  }

  .icon-3 {
    background-color: gray;

    left: 4px;
    z-index: 8;
  }

  .icon-4 {
    left: 6px;
    z-index: 7;
  }

  .icon-5 {
    background-color: gray;

    left: 8px;
    z-index: 6;
  }
`;

export const BurstIconWhite = styled(BurstIcon)`
  div:nth-of-type(2n) {
    background-color: grey;
  }

  .icon-1 {
    background-color: #fff;
  }

  .icon-3 {
    background-color: #fff;
  }

  .icon-5 {
    background-color: #fff;
  }
`;
