import { Button, styled } from '@comma/ds';

export const IconButton = styled(Button, {
  padding: '0 12px !important',
});

export const OnBoardingContainer = styled('div', {
  flex: '1',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
  height: '100%',
});

export const ServiceIntroContainer = styled('div', {
  width: '100%',
  height: '100%',
  display: 'flex',
  textAlign: 'center',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
});

export const OnBoardingBottomSheet = styled('div', {
  width: '100%',
  flex: '1',
  display: 'flex',
  justifyContent: 'space-between',
  padding: '28px 19px',
  gap: '10px',
});
