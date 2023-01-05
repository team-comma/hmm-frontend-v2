import React, { useEffect, useState } from 'react';

import type { ImageProps as NextImageProps, StaticImageData } from 'next/image';

export type NextImageElement = React.ForwardRefExoticComponent<NextImageProps>;

export type ImageProps =
  | React.ImgHTMLAttributes<HTMLImageElement>
  | NextImageProps;

export type ImageElementType = 'img' | undefined | typeof import('next/image');

export const Image: React.FC<ImageProps> = (props) => {
  function __isNextStaticRequire(
    src: ImageProps['src']
  ): src is { default: StaticImageData } {
    return typeof src !== 'string' && Object.hasOwn(src || {}, 'default');
  }

  function __isNextProps(
    element: ImageElementType,
    props: ImageProps
  ): props is NextImageProps {
    return element !== 'img' && props.src !== undefined;
  }

  const __getTypeSafeProps = (
    props: ImageProps
  ):
    | { isNext: true; props: NextImageProps }
    | { isNext: false; props: React.ImgHTMLAttributes<HTMLImageElement> } => {
    if (__isNextProps(element, props)) {
      return {
        isNext: true,
        props: {
          ...props,
          src: __isNextStaticRequire(props.src)
            ? props.src.default.src
            : props.src,
        },
      };
    }

    return { isNext: false, props };
  };

  const [element, setElement] = useState<ImageElementType>();
  const [typeSafeProps] = useState(__getTypeSafeProps(props));
  const { isNext, props: __props } = typeSafeProps;

  useEffect(() => {
    const __loadElement = async () => {
      try {
        setElement(await import('next/image'));
      } catch (error) {
        setElement('img');
      }
    };

    __loadElement();
  }, []);

  // eslint-disable-next-line react/jsx-no-useless-fragment
  if (!element) return <React.Fragment />;

  if (isNext && element !== 'img')
    return React.createElement(element.default, __props);
  else if (!isNext && element === 'img')
    return React.createElement(element, __props);

  // eslint-disable-next-line react/jsx-no-useless-fragment
  return <React.Fragment />;
};
