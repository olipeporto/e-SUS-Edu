import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ModuleCard from './ModuleCard';
import { TutorialModule } from '../types';
import { Heart } from 'lucide-react';

describe('ModuleCard', () => {
  const mockModule: TutorialModule = {
    id: 'test-module',
    title: 'Test Module Title',
    description: 'This is a test module description.',
    icon: Heart,
    color: 'text-red-500',
    steps: [],
  };

  const defaultProps = {
    module: mockModule,
    index: 0,
    onClick: vi.fn(),
    onOpenLinks: vi.fn(),
  };

  it('renders module title and description correctly', () => {
    render(<ModuleCard {...defaultProps} />);

    expect(screen.getByText('Test Module Title')).toBeInTheDocument();
    expect(screen.getByText('This is a test module description.')).toBeInTheDocument();
  });

  it('calls onClick when the card is clicked', async () => {
    const user = userEvent.setup();
    render(<ModuleCard {...defaultProps} />);

    const card = screen.getByText('Test Module Title').closest('div[class*="cursor-pointer"]') as HTMLElement;
    await user.click(card);

    expect(defaultProps.onClick).toHaveBeenCalledTimes(1);
  });

  it('does not render links button when module has no links or videos', () => {
    render(<ModuleCard {...defaultProps} />);

    expect(screen.queryByTitle('Links e Vídeos')).not.toBeInTheDocument();
  });

  it('renders links button when module has links', () => {
    const moduleWithLinks = {
      ...mockModule,
      links: [{ title: 'Link 1', url: 'https://example.com' }],
    };
    render(<ModuleCard {...defaultProps} module={moduleWithLinks} />);

    expect(screen.getByTitle('Links e Vídeos')).toBeInTheDocument();
  });

  it('renders links button when module has videos', () => {
    const moduleWithVideos = {
      ...mockModule,
      videos: [{ title: 'Video 1', url: 'https://youtube.com' }],
    };
    render(<ModuleCard {...defaultProps} module={moduleWithVideos} />);

    expect(screen.getByTitle('Links e Vídeos')).toBeInTheDocument();
  });

  it('calls onOpenLinks with module ID when links button is clicked', async () => {
    const user = userEvent.setup();
    const moduleWithLinks = {
      ...mockModule,
      links: [{ title: 'Link 1', url: 'https://example.com' }],
    };
    render(<ModuleCard {...defaultProps} module={moduleWithLinks} />);

    const linksButton = screen.getByTitle('Links e Vídeos');
    await user.click(linksButton);

    expect(defaultProps.onOpenLinks).toHaveBeenCalledTimes(1);
    expect(defaultProps.onOpenLinks).toHaveBeenCalledWith('test-module');
  });

  it('does not call onClick when links button is clicked (stops propagation)', async () => {
    const user = userEvent.setup();
    const moduleWithLinks = {
      ...mockModule,
      links: [{ title: 'Link 1', url: 'https://example.com' }],
    };

    // Reset the mock before this test
    defaultProps.onClick.mockClear();

    render(<ModuleCard {...defaultProps} module={moduleWithLinks} />);

    const linksButton = screen.getByTitle('Links e Vídeos');
    await user.click(linksButton);

    expect(defaultProps.onClick).not.toHaveBeenCalled();
  });
});
