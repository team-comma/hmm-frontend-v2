import Lottie from 'react-lottie-player';

import { Button, styled } from '@comma/ds';

import { motion } from 'framer-motion';

export const IconButton = styled(Button, {
  padding: '0 12px !important',
});

export const OnBoardingContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
  position: 'relative',
  height: '100%',
});

export const ServiceIntroContainer = styled('div', {
  width: '100%',
  height: '100%',
  display: 'flex',
  textAlign: 'left',
  flexDirection: 'column',
  padding: '55px 40px 0',
});

export const ServiceIntroWrapper = styled('div', {
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

export const OnBoardingBottomSheet = styled('div', {
  width: '100%',
  display: 'flex',
  maxWidth: '29rem',
  position: 'fixed',
  justifyContent: 'space-between',
  background:
    'linear-gradient(0deg, rgb(255, 255, 255, 0.9) 80%, hsla(0,0%,100%,0))',
  padding: '20px 19px',
  gap: '10px',
  bottom: 0,
});

export const Title = styled('h1', {
  fontWeight: '700',
  fontSize: '$x8',
  lineHeight: '2.3rem',
  marginBottom: '0.35em',
});

export const SubTitle = styled('p', {
  fontWeight: '400',
  lineHeight: '1.35rem',
});

export const Note = styled(motion.div, {
  paddingBottom: '5px',
  display: 'inline-block',
});

export const AstronautLottie = styled(Lottie, {
  position: 'absolute',
  top: '200px',
});
