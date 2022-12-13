import React from 'react';

import type { NextPage } from 'next';

import { AppLayout, Button } from '@comma/ds';

import * as S from './styled';

import HomeIconSVG from '@/src/assets/home.svg';
import KakaoIconSVG from '@/src/assets/kakao.svg';

const OnBoardingPage: NextPage = () => {
  return (
    <AppLayout>
      <S.OnBoardingContainer>
        <S.ServiceIntroContainer>
          <div>
            <h1>Hmm</h1>
            <img></img>
          </div>
          <div>
            점심 시간 내가 원하는
            <br /> 음악을 신청해봐요!🎧
          </div>
        </S.ServiceIntroContainer>
        <S.OnBoardingBottomSheet>
          <Button icon={HomeIconSVG} size="md" />
          <Button icon={KakaoIconSVG} size="md" fullWidth interval>
            카카오로 시작하기
          </Button>
        </S.OnBoardingBottomSheet>
      </S.OnBoardingContainer>
    </AppLayout>
  );
};

export default OnBoardingPage;
