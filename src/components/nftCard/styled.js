import { styled, Card, Typography, Button, CardHeader } from '@mui/material';

export const CustomCard = styled(Card)`
  width: 310px;
  min-width: 310px;
  margin: 10px 0px;

  padding: 16px 16px 22px;

  border-radius: 20px;
  background-color: #fff;

  box-shadow: 0 0 0 0;
`;

export const CustomCardHeader = styled(CardHeader)`
  padding: 0px 0 10px 0;

  .MuiCardHeader-title {
    font-size: 13px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.23;
    letter-spacing: normal;
    color: #6c7283;
  }
`;

export const NFTTitle = styled(Typography)`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 8px;
`;
export const NFTText = styled(Typography)`
  font-size: 13px;
  font-weight: 500;
  color: #6c7283;
  margin-bottom: 8px;
`;

export const SellButton = styled(Button)`
  width: 126px;
  height: 48px;
  padding: 15px 22px 17px;
  border-radius: 24px;
  background-color: #215cf1;
  color: white;
  font-weight: bold;

  text-transform: none;

  :hover {
    background-color: #1a49c1;
  }
`;

export const TransferButton = styled(Button)`
  width: 126px;
  height: 48px;
  padding: 15px 22px 17px;
  border-radius: 24px;
  border: solid 2px #e9eaed;

  color: #171a24;
  font-size: 14px;
  letter-spacing: 0.2px;
  font-weight: bold;

  text-transform: none;

  :hover {
    background-color: #f4f4f6;
  }
`;

export const CancelButtonContainer = styled('div')`
  width: 264px;
  height: 48px;
  padding: 14px 22px;
  border-radius: 24px;
  background-color: #e9252f;
  display: flex;
  flex-direction: row;

  transition: ease-in-out;
  transition-duration: 100ms;

  :hover {
    background-color: #cf111b;
  }

  color: white;

  justify-content: space-between;

  /* font-family: StaffGroteskTest; */
  font-size: 14px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.14;
  letter-spacing: 0.2px;
  color: #fff;
  align-items: center;
`;

export const CancelButton = styled(Button)`
  margin: 0;
  color: white;
  text-transform: none;
  font-weight: bold;
  :hover {
    background-color: transparent;
  }
`;

export const CancelButtonDivider = styled('div')`
  width: 2px;
  height: 20px;
  margin: 0 5px 0 29px;
  opacity: 0.16;
  background-color: #fff;
`;

export const ListedText = styled(Typography)`
  font-size: 14px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.14;
  letter-spacing: 0.2px;
  text-align: center;
  color: #fff;
  text-transform: none;
`;
