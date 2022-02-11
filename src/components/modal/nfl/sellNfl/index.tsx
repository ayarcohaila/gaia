import Modal from '~/components/modal';
import preval from 'preval.macro';
import * as fcl from '@onflow/fcl';
import { t } from '~/config/config';
import { useCallback, useState } from 'react';
import useBreakpoints from '~/hooks/useBreakpoints';
import { CircularProgress, Grid, Stack, Typography } from '@mui/material';
import { usePendingOperations } from '~/providers/PendingOperationsProvider';
import { formatCurrencyValue } from '~/utils/formatCurrencyValue';
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
  show: boolean;
  onClose: () => void;
  assetImage: string;
};

export const SellNflModal = (props: Props) => {
  const [errorMessage, setErrorMessage] = useState<string | undefined>(undefined);
  const [errorDetails, setErrorDetails] = useState<string | undefined>(undefined);
  const [disableClose, setDisableClose] = useState(false);
  const [currentStep, setCurrentStep] = useState<'initial' | 'submitting' | 'sealing' | 'sealed'>(
    'initial'
  );
  const { addPendingOperation } = usePendingOperations();
  const { user } = useAuthContext();
  const [value, setValue] = useState('');
  const [isFloorPriceError, setIsFloorPriceError] = useState(false);
  const [valueError, setValueError] = useState<string | undefined>(undefined);
  const [belowFloorPercentage, setBelowFloorPercentage] = useState<number | undefined>(undefined);

  const isValid = () => {
    if (value.trim().length < 1) {
      return false;
    }

    const n = Number(value);
    return !(isNaN(n) || valueError);
  };

  const checkFloorValue = async () => {
    proceed();
    // FIXME: implement floor price check
    // const floorPrice = 0;
    //
    // setLoading(true);
    // const minFloorPrice = (floorPrice / 100) * 90;
    // if (floorPrice > 0 && value <= minFloorPrice) {
    //   let floorPercentage = (100 - (value * 100) / floorPrice).toFixed(2);
    //   setBelowFloorPercentage(floorPercentage);
    //   setIsFloorPriceError(true);
    // } else {
    //   handlePostForSale();
    // }
    // setLoading(false);
    setBelowFloorPercentage(undefined);
  };

  const handleValue = useCallback(({ target: { value } }) => {
    const parsedValue = value.replace(/[^0-9]/g, '');
    setValue(parsedValue);
    setIsFloorPriceError(false);
    if (Number(parsedValue) < 1 && parsedValue !== '') {
      setValueError('Value must be $1 or greater.');
    } else if (Number(parsedValue) > 2000000) {
      setValueError(`Value must be $2,000,000 or lower.`);
    } else {
      setValueError(undefined);
    }
  }, []);

  const { isExtraSmallDevice } = useBreakpoints();

  let title = 'Sell NFL All Day Moment';

  if (currentStep === 'sealing') {
    title = 'Transaction Processing';
  } else if (currentStep === 'sealed') {
    title = 'Transaction Complete';
  }

  const startOver = () => {
    setValue('');
    setIsFloorPriceError(false);
  };

  const proceed = () => {
    const price = Number(value);

    (async () => {
      const sellTx = preval`
    const fs = require('fs')
    const path = require('path'),
    filePath = path.join(__dirname, "../../../../flow/transactions/dapper/sell_nfl.cdc");
    module.exports = fs.readFileSync(filePath, 'utf8')
    `;

      try {
        setCurrentStep('submitting');
        setDisableClose(true);

        const txId = await fcl
          .send([
            fcl.transaction(sellTx),
            fcl.payer(fcl.authz),
            fcl.proposer(fcl.authz),
            fcl.authorizations([fcl.authz]),
            fcl.args([
              fcl.arg(Number(props.moment.momentId), t.UInt64),
              fcl.arg(price.toFixed(8), t.UFix64),
              fcl.arg([], t.Dictionary({ key: t.String, value: t.UFix64 }))
            ]),
            fcl.limit(1000)
          ])
          .then(fcl.decode);

        setCurrentStep('sealing');

        try {
          await addPendingOperation(
            'createListing',
            'nfl_all_day',
            props.moment.momentId,
            `List ${buildMomentDescription(props.moment)} for $${formatCurrencyValue(price)}`,
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
      description={buildMomentDescription(props.moment)}
      descriptionSx={{ textAlign: 'center' }}
      title={title}
      disableCloseButton={disableClose}
      titleSx={{ mt: '120px', fontSize: isExtraSmallDevice ? '1.35rem' : '1.5rem' }}
      mobileHeight={isExtraSmallDevice ? '85vh' : '75vh'}
      height={'400px'}>
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
            <Grid container alignItems="center" justifyContent="center" direction="column" mt={4}>
              <Styled.Input
                styles={{}}
                endAdornment={
                  <Styled.CustomButton disabled={!isValid()} onClick={checkFloorValue}>
                    Post For Sale
                  </Styled.CustomButton>
                }
                placeholder="USD Sale Price"
                onChange={handleValue}
                value={value}
                error={valueError}
              />
              {valueError ? <Styled.InputError error>{valueError}</Styled.InputError> : null}
              {isFloorPriceError && (
                <>
                  <Styled.InputError error>
                    <b>WARNING</b>: Sale price is {belowFloorPercentage}% below floor price. Do you
                    wish to continue?
                  </Styled.InputError>
                  <Grid container justifyContent="center">
                    <Styled.FloorPriceButton disabled={!isValid()} onClick={() => proceed()}>
                      Yes, Proceed
                    </Styled.FloorPriceButton>
                    <Styled.FloorPriceButton startOver onClick={() => startOver()}>
                      No, Start Over
                    </Styled.FloorPriceButton>
                  </Grid>
                </>
              )}
              {
                // TODO: add fee verbiage
              }
              {/*<Styled.FeesContent valueError={valueError}>*/}
              {/*  <Styled.FeeText>Marketplace Fee</Styled.FeeText>*/}
              {/*  <Styled.FeeText feeValue>5%</Styled.FeeText>*/}
              {/*  <Styled.FeeText>Creator Royalty</Styled.FeeText>*/}
              {/*  <Styled.FeeText feeValue>5%</Styled.FeeText>*/}
              {/*</Styled.FeesContent>*/}
            </Grid>
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
