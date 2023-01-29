import React from 'react';

import type { NextPage } from 'next';
import Image from 'next/image';

import { AppLayout, Button } from '@comma/ds';

import { motion } from 'framer-motion';

import HomeIconSVG from '@/src/assets/home.svg';
import KakaoIconSVG from '@/src/assets/kakao.svg';
import LeftArrowSVG from '@/src/assets/leftArrow.svg';

import * as S from './styled';

const OnBoardingPage: NextPage = () => {
  return (
    <AppLayout>
      <S.OnBoardingHeader>
        <Image src={LeftArrowSVG} alt="" />
      </S.OnBoardingHeader>
      <S.OnBoardingContainer>
        <S.ServiceIntroContainer>
          <motion.svg
            style={{ display: 'inline' }}
            width="83"
            height="33"
            viewBox="0 0 83 33"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <motion.path
              d="M29.25 14.3349C30.9167 15.2972 30.9167 17.7028 29.25 18.6651L12 28.6244C10.3333 29.5866 8.25 28.3838 8.25 26.4593L8.25001 6.5407C8.25001 4.6162 10.3333 3.41339 12 4.37564L29.25 14.3349Z"
              fill="black"
            />
            <motion.path
              d="M54.25 14.3349C55.9167 15.2972 55.9167 17.7028 54.25 18.6651L37 28.6244C35.3333 29.5866 33.25 28.3838 33.25 26.4593L33.25 6.5407C33.25 4.6162 35.3333 3.41339 37 4.37564L54.25 14.3349Z"
              fill="black"
            />
            <motion.path
              d="M79.25 14.3349C80.9167 15.2972 80.9167 17.7028 79.25 18.6651L62 28.6244C60.3333 29.5866 58.25 28.3838 58.25 26.4593L58.25 6.5407C58.25 4.6162 60.3333 3.41339 62 4.37564L79.25 14.3349Z"
              fill="black"
            />
          </motion.svg>
          <S.Title>흠, 우리 같이 노래 들을래요?</S.Title>
          <S.SubTitle>
            내 취향에 맞는 음악을
            <br /> 많은 사람들과 함께 공유해보세요
          </S.SubTitle>
        </S.ServiceIntroContainer>
        <S.OnBoardingBottomSheet>
          <p
            style={{
              opacity: 0.6,
              marginBottom: '0.5rem',
              fontSize: '0.9rem',
            }}
          >
            간편하게 SNS로 로그인
          </p>
          <S.BottomSheetContainer>
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
          </S.BottomSheetContainer>
        </S.OnBoardingBottomSheet>
      </S.OnBoardingContainer>
    </AppLayout>
  );
};

export default OnBoardingPage;
