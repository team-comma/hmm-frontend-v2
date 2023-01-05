import { motion } from 'framer-motion';

import { styled } from '../../stitches.config';

export const ButtonElement = styled(motion.button, {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100%',
  border: 'none',
  borderRadius: '12px',
  variants: {
    theme: {
      default: {
        backgroundColor: '$basic-white',
        color: '$basic-black',
        border: '1px solid $gray-200',
      },
      kakao: {
        backgroundColor: '#fff500',
        color: '$basic-black',
      },
    },
    fw: {
      true: {
        width: '100%',
      },
    },
    disabled: {
      true: {
        opacity: '0.7',
        cursor: 'not-allowed',
      },
    },
    interval: {
      true: {
        gap: '10px',
      },
    },
    size: {
      sm: {
        height: '38px',
        padding: '0 12px',
        fontSize: '$x3',
      },
      md: {
        height: '46px',
        padding: '0 20px',
        fontSize: '14px',
      },
      lg: {
        height: '62px',
        padding: '0 24px',
        fontSize: '16px',
      },
    },
  },
});
