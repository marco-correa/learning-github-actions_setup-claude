import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Typography } from './Typography';

describe('Typography', () => {
  it('renders text content', () => {
    render(<Typography>Hello World</Typography>);
    const element = screen.getByText('Hello World');
    expect(element).toBeInTheDocument();
  });

  it('applies regular variant by default', () => {
    render(<Typography>Regular Text</Typography>);
    const element = screen.getByText('Regular Text');
    expect(element).toHaveClass('typography--regular');
  });

  it('applies small variant when specified', () => {
    render(<Typography variant="small">Small Text</Typography>);
    const element = screen.getByText('Small Text');
    expect(element).toHaveClass('typography--small');
  });

  it('applies large variant when specified', () => {
    render(<Typography variant="large">Large Text</Typography>);
    const element = screen.getByText('Large Text');
    expect(element).toHaveClass('typography--large');
  });

  it('renders with custom element tag', () => {
    render(<Typography as="p">Paragraph Text</Typography>);
    const element = screen.getByText('Paragraph Text');
    expect(element.tagName).toBe('P');
  });

  it('renders with heading element', () => {
    render(<Typography as="h1">Heading Text</Typography>);
    const element = screen.getByText('Heading Text');
    expect(element.tagName).toBe('H1');
  });

  it('applies typography class to all variants', () => {
    const variants: Array<'small' | 'regular' | 'large'> = [
      'small',
      'regular',
      'large',
    ];

    variants.forEach((variant) => {
      const { unmount } = render(
        <Typography variant={variant}>Text</Typography>
      );
      const element = screen.getByText('Text');
      expect(element).toHaveClass('typography');
      unmount();
    });
  });

  it('respects additional className when provided', () => {
    render(<Typography className="custom-class">Custom</Typography>);
    const element = screen.getByText('Custom');
    expect(element).toHaveClass('custom-class');
  });
});
