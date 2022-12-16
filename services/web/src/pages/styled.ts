import { Button, styled } from '@comma/ds';
import { motion } from 'framer-motion';

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
  textAlign: 'left',
  flexDirection: 'column',
  padding: '60px 19px',
});

export const OnBoardingBottomSheet = styled('div', {
  width: '100%',
  flex: '1',
  display: 'flex',
  justifyContent: 'space-between',
  padding: '28px 19px',
  gap: '10px',
});

export const Title = styled('h1', {
  fontFamily: 'jua',
  fontWeight: 'unset',
  fontSize: '$x10',
  lineHeight: '2.5rem',
  marginBottom: '0.6rem',
});

export const SubTitle = styled('p', {
  fontWeight: '500',
});

// export const ㄴ;

export const Note = styled(motion.div, {
  paddingBottom: '5px',
  paddingRight: '20px',
  display: 'inline-block',
});
