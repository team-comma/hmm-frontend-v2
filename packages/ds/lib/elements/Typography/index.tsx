import React from 'react';

import * as S from './styled';

type TypographyElement =
  | HTMLHeadingElement
  | HTMLParagraphElement
  | HTMLDivElement;

type TypographyStyledElement = React.FC<
  React.ComponentProps<typeof S.TypoElement> & { children: React.ReactNode }
>;

interface TypographyProps {
  children: React.ReactNode;
  style?: React.CSSProperties;
  align?: 'right' | 'left' | 'center';
  p?: boolean;
  fw?: '700' | '600' | '500' | '400' | '300' | '200' | '100';
}

const TypographyComponent = (element: TypographyStyledElement) => {
  const Component = element;

  return React.forwardRef<TypographyElement, TypographyProps>(
    ({ children, p, align, fw }, ref) => {
      return (
        <Component ref={ref} fontWeight={fw} fontAlign={align} paragraph={p}>
          {children}
        </Component>
      );
    }
  );
};

export const Typo = Object.assign(
  {},
  {
    H1: TypographyComponent(S.H1Element),
    H2: TypographyComponent(S.H2Element),
    H3: TypographyComponent(S.H3Element),
    H4: TypographyComponent(S.H4Element),
    H5: TypographyComponent(S.H5Element),
    H6: TypographyComponent(S.H6Element),
    Body1: TypographyComponent(S.Body1Element),
    Body2: TypographyComponent(S.Body2Element),
    Detail: TypographyComponent(S.DetailElement),
  }
);
