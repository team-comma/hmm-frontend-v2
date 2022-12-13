import React from 'react';

import type { NextPage } from 'next';

import { AppLayout } from '@comma/ds';

import * as S from './styled';

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
          <button>
            <img />
          </button>
          <button>카카오로 시작하기</button>
        </S.OnBoardingBottomSheet>
      </S.OnBoardingContainer>
    </AppLayout>
  );
};

export default OnBoardingPage;
