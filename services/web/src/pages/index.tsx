import React from 'react';

import type { NextPage } from 'next';
import { useRouter } from 'next/router';

import { AppLayout, Button } from '@comma/ds';

import HomeIconSVG from '@/src/assets/home.svg';
import KakaoIconSVG from '@/src/assets/kakao.svg';

import * as S from './styled';

const OnBoardingPage: NextPage = () => {
  const router = useRouter();

  const kakaoUrl = process.env.NEXT_PUBLIC_KAKAO_API_END_POINT as string;

  const handleClickKakaoLogin = () => {
    router.replace(kakaoUrl);
  };

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
