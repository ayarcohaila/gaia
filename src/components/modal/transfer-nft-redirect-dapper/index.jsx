import { memo } from 'react';
import { Grid, useTheme } from '@mui/material';
import { useRouter } from 'next/router';

import { Button } from '~/base';
import Modal from '..';

import * as Styled from './styles';

const TransferNftRedirectDapperModal = ({ onClose, ...props }) => {
  const {
    palette: { grey }
  } = useTheme();
  const route = useRouter();

  const renderListItem = message => {
    return (
      <Grid component="li" color={grey[600]}>
        <Styled.ListItem fontWeight="400" mb="8px" variant="body2">
          {message}
        </Styled.ListItem>
      </Grid>
    );
  };

  const handleClickGoDapper = () => {
    const address = `https://${
      process.env.NODE_ENV !== 'production' ? 'staging.' : ''
    }accounts.meetdapper.com/home`;
    window.open(address, '_blank')?.focus();
  };

  const handleClose = () => {
    route.push(route.asPath);
    onClose();
  };

  return (
    <Modal
      description={'Transfers can be done directly from the Dapper Wallet.'}
      descriptionSx={{ maxWidth: '435px', textAlign: 'center', fontWeight: '400', mb: 0 }}
      title={'Transfer NFT'}
      titleSx={{ mt: '120px', mb: '12px' }}
      onClose={handleClose}
      height="470px"
      {...props}>
      <>
        <Grid component="ul" sx={{ maxWidth: '465px', listStyle: 'auto' }}>
          {renderListItem('Click on the button below to go to your Dapper Wallet')}
          {renderListItem('Go to the “NFT Inventory” section in the left menu')}
          {renderListItem('Click on the NFT you wish to transfer')}
          {renderListItem(
            'Scroll down to the bottom of the pop-up window, then enter the recipient’s wallet address'
          )}
        </Grid>
        <Grid sx={{ display: 'flex', justifyContent: 'center', mt: '24px' }}>
          <Button onClick={handleClickGoDapper}>Go To Dapper Wallet</Button>
        </Grid>
      </>
    </Modal>
  );
};

export default memo(TransferNftRedirectDapperModal);
