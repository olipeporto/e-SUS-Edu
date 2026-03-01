import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import Header from './Header';

describe('Header component', () => {
  it('renders correctly', () => {
    render(<Header onGoHome={() => {}} isHome={true} />);
    expect(screen.getByText('e-SUS')).toBeInTheDocument();
    expect(screen.getByText('Edu')).toBeInTheDocument();
  });

  it('does not show "Voltar ao Menu" button when isHome is true', () => {
    render(<Header onGoHome={() => {}} isHome={true} />);
    expect(screen.queryByText('Voltar ao Menu')).not.toBeInTheDocument();
  });

  it('shows "Voltar ao Menu" button when isHome is false', () => {
    render(<Header onGoHome={() => {}} isHome={false} />);
    expect(screen.getByText('Voltar ao Menu')).toBeInTheDocument();
  });

  it('calls onGoHome when the logo is clicked', () => {
    const onGoHomeMock = vi.fn();
    const { container } = render(<Header onGoHome={onGoHomeMock} isHome={true} />);

    // The logo container has the onClick handler
    const logoContainer = container.querySelector('.cursor-pointer.group');
    if (logoContainer) {
      fireEvent.click(logoContainer);
    }

    expect(onGoHomeMock).toHaveBeenCalledTimes(1);
  });

  it('calls onGoHome when "Voltar ao Menu" is clicked', () => {
    const onGoHomeMock = vi.fn();
    render(<Header onGoHome={onGoHomeMock} isHome={false} />);

    const backButton = screen.getByText('Voltar ao Menu');
    fireEvent.click(backButton);

    expect(onGoHomeMock).toHaveBeenCalledTimes(1);
  });
});
