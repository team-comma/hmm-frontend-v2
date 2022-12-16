import React from 'react';

import * as S from './styled';

interface AppLayoutProps {
  children: React.ReactNode;
}

export const AppLayoutComponent = ({ children }: AppLayoutProps) => {
  return (
    <>
      <S.AppLayoutContainer>{children}</S.AppLayoutContainer>
      <S.Texture width="100%" height="100%">
        <filter id="n">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.75"
            stitchTiles="stitch"
          />
        </filter>
        <rect width="100%" height="100%" filter="url(#n)" opacity="0.80" />
      </S.Texture>
    </>
  );
};

export const AppLayout = Object.assign(AppLayoutComponent, {
  Title: S.PageTitle,
  Description: S.PageDescription,
});
