import { HTMLAttributes } from 'react';
import './Typography.css';

type TypographyVariant = 'small' | 'regular' | 'large';

interface TypographyProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: TypographyVariant;
  children: React.ReactNode;
  as?: 'span' | 'p' | 'div' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

export const Typography = ({
  variant = 'regular',
  children,
  as: Component = 'span',
  ...props
}: TypographyProps) => {
  return (
    <Component className={`typography typography--${variant}`} {...props}>
      {children}
    </Component>
  );
};
