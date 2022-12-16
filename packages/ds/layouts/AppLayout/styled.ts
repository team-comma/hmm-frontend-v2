import { styled } from '../../stitches.config';

export const AppLayoutContainer = styled('main', {
  height: '100%',
  margin: '0px auto',
  maxWidth: '29rem',
  padding: '0.5rem 0.5rem 0 0.5rem',
  backgroundColor: '$primary-slate1',
  color: '$basic-white',
});

export const Texture = styled('svg', {
  position: 'fixed',
  width: '100%',
  top: '0px',
  left: '0px',
  height: 'calc(100vh + 200px)',
  opacity: '0.25',
  transform: 'translateY(0px)',
  pointerEvents: 'none',
  filter: 'constrast(30%) brightness(70%)',
  zIndex: 9999,
});

export const PageTitle = styled('h1', {});

export const PageDescription = styled('p', {});
