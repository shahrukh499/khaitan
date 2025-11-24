declare module '@splidejs/react-splide' {
  import { ComponentType, ReactNode, RefObject } from 'react';

  export interface SplideProps {
    options?: Record<string, any>;
    ariaLabel?: string;
    children?: ReactNode;
    className?: string;
    tag?: string;
    onMounted?: (splide: any) => void;
    splideRef?: RefObject<any>;
    [key: string]: any;
  }

  export interface SplideSlideProps {
    children?: ReactNode;
    className?: string;
    [key: string]: any;
  }

  export const Splide: ComponentType<SplideProps>;
  export const SplideSlide: ComponentType<SplideSlideProps>;
}

