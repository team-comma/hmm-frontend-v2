import React from 'react';

import type { NextPage } from 'next';
import { useRouter } from 'next/router';

import { AppLayout, Button } from '@comma/ds';
import { motion } from 'framer-motion';

import HomeIconSVG from '@/src/assets/home.svg';
import KakaoIconSVG from '@/src/assets/kakao.svg';

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
    whileTap: { backgroundColor: 'white' },
  });

  return (
    <AppLayout>
      <S.OnBoardingContainer>
        <S.ServiceIntroContainer
          as={motion.div}
          variants={getServiceIntroVariants()}
          initial="initial"
          animate="animate"
          whileTap="whileTap"
        >
          <div>
            <S.Title>
              <S.Note variants={getNoteAnimationVariants()} animate="animate">
                🎵
              </S.Note>
              <br />
              흠으로 <br />
              점심 시간에 <br />
              같이 들어요!
            </S.Title>
            <img></img>
          </div>
          <S.SubTitle>
            누구도 모르게 내가 점심 시간에 <br />
            듣고 싶은 노래를 공유해봐요
          </S.SubTitle>
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
            onClick={handleClickKakaoLogin}
          >
            카카오로 시작하기
          </Button>
        </S.OnBoardingBottomSheet>
      </S.OnBoardingContainer>
    </AppLayout>
  );
};

export default OnBoardingPage;
