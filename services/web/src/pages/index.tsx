import React from 'react';

import type { NextPage } from 'next';
import { useRouter } from 'next/router';

import { AppLayout, Button, Image } from '@comma/ds';

import { motion } from 'framer-motion';

import HomeIconSVG from '@/src/assets/home.svg';
import KakaoIconSVG from '@/src/assets/kakao.svg';
import ServiceIconSVG from '@/src/assets/service.svg';

import { ENV } from '../constants';
import * as S from './styled';

const OnBoardingPage: NextPage = () => {
  const router = useRouter();

  const getServiceIntroVariants = () => ({
    initial: { x: -30, y: -10, opacity: 0 },
    animate: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: { delay: 1 / 50 },
    },
  });

  const onClickKaKaoLogin = () => {
    const KAKAO_URL = `${ENV.KAKAO_AUTH_URI}?response_type=${ENV.KAKAO_RESPONSE_TYPE}&client_id=${ENV.KAKAO_CLIENT_ID}&redirect_uri=${ENV.REDIRECT_URI}`;
    router.replace(KAKAO_URL);
  };

  return (
    <AppLayout>
      <S.OnBoardingContainer>
        <S.ServiceIntroWrapper>
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
          </S.ServiceIntroContainer>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <Image src={ServiceIconSVG} alt="service 온보딩 이미지" />
          </motion.div>
        </S.ServiceIntroWrapper>
        <S.OnBoardingBottomSheet
          as={motion.div}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <S.IconButton
            size="md"
            icon={HomeIconSVG}
            onClick={() => {
              router.push('/home');
            }}
          />
          <Button
            size="md"
            icon={KakaoIconSVG}
            theme="kakao"
            interval
            fullWidth
            onClick={onClickKaKaoLogin}
          >
            카카오로 시작하기
          </Button>
        </S.OnBoardingBottomSheet>
      </S.OnBoardingContainer>
    </AppLayout>
  );
};

export default OnBoardingPage;
