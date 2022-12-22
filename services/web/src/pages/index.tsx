import React from 'react';

import type { NextPage } from 'next';

import { AppLayout, Button, Image } from '@comma/ds';

import { motion } from 'framer-motion';

import HomeIconSVG from '@/src/assets/home.svg';
import KakaoIconSVG from '@/src/assets/kakao.svg';
import ServiceIconSVG from '@/src/assets/service.svg';

import * as S from './styled';

const OnBoardingPage: NextPage = () => {
  const getNoteAnimationVariants = () => ({
    animate: {
      rotate: 20,
      transition: {
        duration: 0.3,
        yoyo: Infinity,
      },
    },
  });

  const getServiceIntroVariants = () => ({
    initial: { x: -30, y: -10, opacity: 0 },
    animate: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: { delay: 1 / 50 },
    },
  });

  return (
    <AppLayout>
      <S.OnBoardingContainer>
        <S.ServiceIntroContainer
          as={motion.div}
          variants={getServiceIntroVariants()}
          initial="initial"
          animate="animate"
        >
          <S.Title>
            흠과 함께
            <br />
            하는 점심시간!
          </S.Title>
          <S.SubTitle>
            누구도 모르게 내가 점심 시간에
            <br /> 듣고 싶은 노래를 공유해봐요
          </S.SubTitle>
          <Image src={ServiceIconSVG} alt="service 온보딩 이미지" />
        </S.ServiceIntroContainer>
        <S.OnBoardingBottomSheet
          as={motion.div}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <S.IconButton icon={HomeIconSVG} size="md" />
          <Button
            theme="kakao"
            icon={KakaoIconSVG}
            size="md"
            interval
            fullWidth
          >
            카카오로 시작하기
          </Button>
        </S.OnBoardingBottomSheet>
      </S.OnBoardingContainer>
    </AppLayout>
  );
};

export default OnBoardingPage;
