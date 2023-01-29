import { Button, styled } from '@comma/ds';

export const OnBoardingHeader = styled('header', {
  display: 'flex',
  alignItems: 'center',
  width: 'calc(100% + 2.8rem)',
  height: '3.5rem',
  margin: '0 0 0 -1.4rem',
  padding: '0 0.8rem',
  backgroundColor: 'white',
});

export const OnBoardingContainer = styled('div', {
  width: 'calc(100% + 2.8rem)',
  height: 'calc(100vh - 2.8rem)',
  margin: '0 0 0 -1.4rem',
  display: 'flex',
  position: 'relative',
  backgroundColor: 'white',
  flexDirection: 'column',
  alignItems: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  backgroundPositionY: '10rem',
});

export const ServiceIntroContainer = styled('div', {
  marginTop: '6rem',
  textAlign: 'center',
});

export const IconButton = styled(Button, {
  padding: '0 12px !important',
});

export const Title = styled('h3', {
  margin: '1rem 0 0',
  color: 'black',
  fontSize: '1.35rem',
  fontWeight: 600,
});

export const BottomSheetContainer = styled('div', {
  display: 'flex',
  gap: '10px',
});

export const SubTitle = styled('h5', {
  margin: '0.7rem 0 0',
  color: 'black',
  fontSize: '0.95rem',
  fontWeight: 500,
});

export const OnBoardingBottomSheet = styled('div', {
  position: 'absolute',
  bottom: '10%',
  textAlign: 'center',
  width: '20rem',
});
