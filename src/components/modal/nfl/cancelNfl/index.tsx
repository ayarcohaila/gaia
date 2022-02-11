import Modal from '~/components/modal';
import preval from 'preval.macro';
import * as fcl from '@onflow/fcl';
import { t } from '~/config/config';
import { useState } from 'react';
import useBreakpoints from '~/hooks/useBreakpoints';
import { CircularProgress, Stack, Typography } from '@mui/material';
import { usePendingOperations } from '~/providers/PendingOperationsProvider';
import { useAuthContext } from '~/providers/AuthProvider';
import { buildMomentDescription } from '~/helpers/stringHelpers';
import Accordion from '~/components/accordion';
import * as Styled from '~/components/modal/nfl/sellNfl/styles';

type MomentInfo = {
  momentId: number;
  play: {
    playerFullName: string;
    playType: string;
  };
  series: {
    name: string;
  };
  set: {
    name: string;
  };
  serialNumber: number;
};

type Props = {
  moment: MomentInfo;
  orderId: number;
  show: boolean;
  onClose: () => void;
  assetImage: string;
};

export const CancelNflModal = (props: Props) => {
  const [errorMessage, setErrorMessage] = useState<string | undefined>(undefined);
  const [errorDetails, setErrorDetails] = useState<string | undefined>(undefined);
  const [disableClose, setDisableClose] = useState(false);
  const [currentStep, setCurrentStep] = useState<'initial' | 'submitting' | 'sealing' | 'sealed'>(
    'initial'
  );
  const { addPendingOperation } = usePendingOperations();
  const { user } = useAuthContext();

  const { isExtraSmallDevice } = useBreakpoints();

  let title = 'Cancel NFL All Day Listing';

  if (currentStep === 'sealing') {
    title = 'Transaction Processing';
  } else if (currentStep === 'sealed') {
    title = 'Transaction Complete';
  }

  const proceed = () => {
    (async () => {
      const cancelTx = preval`
    const fs = require('fs')
    const path = require('path'),
    filePath = path.join(__dirname, "../../../../flow/transactions/dapper/cancel_nfl.cdc");
    module.exports = fs.readFileSync(filePath, 'utf8')
    `;

      try {
        setCurrentStep('submitting');
        setDisableClose(true);

        const txId = await fcl
          .send([
            fcl.transaction(cancelTx),
            fcl.payer(fcl.authz),
            fcl.proposer(fcl.authz),
            fcl.authorizations([fcl.authz]),
            fcl.args([fcl.arg(Number(props.orderId), t.UInt64)]),
            fcl.limit(1000)
          ])
          .then(fcl.decode);

        setCurrentStep('sealing');

        try {
          await addPendingOperation(
            'cancelListing',
            'nfl_all_day',
            props.moment.momentId,
            `Cancel listing for ${buildMomentDescription(props.moment)}`,
            txId,
            user!.addr
          ).catch(console.error);
        } catch (err) {
          console.error(err);
        }

        try {
          await fcl.tx(txId).onceSealed();
          setCurrentStep('sealed');
          setDisableClose(false);
        } catch (err: any) {
          setErrorMessage('There was an issue executing this transaction on the Flow blockchain.');
          setDisableClose(false);
          setErrorDetails(String(err));
        }
      } catch (err: any) {
        console.error(err);
        if (/Externally Halted/g.test(String(err)) || /Declined/g.test(String(err))) {
          // user cancelled from Dapper Wallet
          props.onClose();
        } else {
          // some other error has occurred
          setErrorMessage('There was an error processing your transaction');
          setDisableClose(false);
        }
      }
    })();
  };

  return (
    // @ts-ignore
    <Modal
      asset={{ img: props.assetImage }}
      open={props.show}
      onClose={() => props.onClose()}
      description={''}
      descriptionSx={{ textAlign: 'center' }}
      title={title}
      disableCloseButton={disableClose}
      titleSx={{ mt: '120px' }}
      mobileHeight={isExtraSmallDevice ? '75vh' : '65vh'}
      height={'400px'}
      contentSx={{
        height: 'auto'
      }}>
      {errorMessage ? (
        <Stack spacing={1}>
          <Typography style={{ textAlign: 'center' }} padding={4} fontSize={18} lineHeight={1.4}>
            {errorMessage}
          </Typography>
          {errorDetails ? (
            <Accordion title={'Error Detail'}>
              <Typography>{errorDetails}</Typography>
            </Accordion>
          ) : null}
        </Stack>
      ) : (
        <>
          {currentStep === 'initial' ? (
            <Stack spacing={4}>
              <Typography
                style={{ textAlign: 'center' }}
                padding={4}
                fontSize={18}
                lineHeight={1.4}>
                You are about to remove your listing for:
                <br />
                <b>{buildMomentDescription(props.moment)}</b>.
              </Typography>
              <div style={{ alignSelf: 'center' }}>
                <Styled.CustomButton onClick={proceed}>Remove Listing</Styled.CustomButton>
              </div>
            </Stack>
          ) : null}
          {currentStep === 'submitting' ? (
            <Stack spacing={2} alignItems={'center'}>
              <Typography
                style={{ textAlign: 'center' }}
                padding={4}
                fontSize={18}
                lineHeight={1.4}>
                Awaiting your confirmation in the Dapper Wallet pop-up. If you don&apos;t see a
                pop-up, enable pop-ups and refresh the page to try again.
              </Typography>
              <CircularProgress />
            </Stack>
          ) : null}
          {currentStep === 'sealing' ? (
            <Stack spacing={2} alignItems={'center'}>
              <Typography
                style={{ textAlign: 'center' }}
                padding={4}
                fontSize={18}
                lineHeight={1.4}>
                Your transaction is being processed through Dapper Wallet.
              </Typography>
              <CircularProgress />
            </Stack>
          ) : null}
          {currentStep === 'sealed' ? (
            <Stack spacing={2} alignItems={'center'}>
              <Typography
                style={{ textAlign: 'center' }}
                padding={4}
                fontSize={18}
                lineHeight={1.4}>
                Your transaction has been confirmed on the Flow blockchain.
              </Typography>
            </Stack>
          ) : null}
        </>
      )}
    </Modal>
  );
};
