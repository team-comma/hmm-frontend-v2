import React from 'react';

import * as S from './styled';

interface AppLayoutProps {
  children: React.ReactNode;
}

export const AppLayoutComponent = ({ children }: AppLayoutProps) => {
  return <S.AppLayoutContainer>{children}</S.AppLayoutContainer>;
};

export const AppLayout = Object.assign(AppLayoutComponent, {
  Title: S.PageTitle,
  Description: S.PageDescription,
});
