import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi } from 'vitest';
import TutorialViewer from './TutorialViewer';
import { TutorialModule } from '../types';

const mockModule: TutorialModule = {
  id: 'test-module',
  title: 'Test Module',
  description: 'A test module description',
  duration: '5 min',
  icon: 'info',
  color: 'blue',
  targetAudience: ['Medicos'],
  steps: [
    {
      title: 'Step 1 Title',
      content: ['Step 1 Content Paragraph 1', 'Step 1 Content Paragraph 2'],
      icon: 'info',
    },
    {
      title: 'Step 2 Title',
      content: ['Step 2 Content Paragraph 1'],
      icon: 'check',
      note: 'Step 2 Note',
    },
    {
      title: 'Step 3 Title',
      content: ['Step 3 Content Paragraph 1'],
      icon: 'star',
    },
  ],
};

describe('TutorialViewer', () => {
  it('renders the first step initially', () => {
    const onCompleteMock = vi.fn();
    render(<TutorialViewer module={mockModule} onComplete={onCompleteMock} />);

    // Check header info
    expect(screen.getByText('Test Module')).toBeInTheDocument();
    expect(screen.getByText('Passo 1 de 3')).toBeInTheDocument();

    // Check step 1 content
    expect(screen.getByText('Step 1 Title')).toBeInTheDocument();
    expect(screen.getByText('Step 1 Content Paragraph 1')).toBeInTheDocument();
    expect(screen.getByText('Step 1 Content Paragraph 2')).toBeInTheDocument();
  });

  it('navigates to the next step when next button is clicked', async () => {
    const onCompleteMock = vi.fn();
    const user = userEvent.setup();
    render(<TutorialViewer module={mockModule} onComplete={onCompleteMock} />);

    // Click next button
    const nextButton = screen.getByLabelText('Próximo passo');
    await user.click(nextButton);

    // Verify step 2 is displayed
    expect(await screen.findByText('Passo 2 de 3')).toBeInTheDocument();
    expect(await screen.findByText('Step 2 Title')).toBeInTheDocument();
    expect(await screen.findByText('Step 2 Content Paragraph 1')).toBeInTheDocument();
    expect(await screen.findByText('Step 2 Note')).toBeInTheDocument();
  });

  it('navigates to the previous step when prev button is clicked', async () => {
    const onCompleteMock = vi.fn();
    const user = userEvent.setup();
    render(<TutorialViewer module={mockModule} onComplete={onCompleteMock} />);

    // Navigate to step 2 first
    const nextButton = screen.getByLabelText('Próximo passo');
    await user.click(nextButton);
    expect(await screen.findByText('Passo 2 de 3')).toBeInTheDocument();

    // Click prev button
    const prevButton = screen.getByLabelText('Passo anterior');
    await user.click(prevButton);

    // Verify step 1 is displayed again
    expect(await screen.findByText('Passo 1 de 3')).toBeInTheDocument();
    expect(await screen.findByText('Step 1 Title')).toBeInTheDocument();
  });

  it('disables the prev button on the first step', () => {
    const onCompleteMock = vi.fn();
    render(<TutorialViewer module={mockModule} onComplete={onCompleteMock} />);

    const prevButton = screen.getByLabelText('Passo anterior');
    expect(prevButton).toBeDisabled();
  });

  it('navigates using keyboard arrow keys', async () => {
    const onCompleteMock = vi.fn();
    const user = userEvent.setup();
    render(<TutorialViewer module={mockModule} onComplete={onCompleteMock} />);

    // Press ArrowRight to go to step 2
    await user.keyboard('{ArrowRight}');
    expect(await screen.findByText('Passo 2 de 3')).toBeInTheDocument();
    expect(await screen.findByText('Step 2 Title')).toBeInTheDocument();

    // Press ArrowLeft to go back to step 1
    await user.keyboard('{ArrowLeft}');
    expect(await screen.findByText('Passo 1 de 3')).toBeInTheDocument();
    expect(await screen.findByText('Step 1 Title')).toBeInTheDocument();
  });

  it('calls onComplete when next button is clicked on the last step', async () => {
    const onCompleteMock = vi.fn();
    const user = userEvent.setup();
    render(<TutorialViewer module={mockModule} onComplete={onCompleteMock} />);

    // Navigate to the last step (step 3)
    const nextButton = screen.getByLabelText('Próximo passo');
    await user.click(nextButton); // Step 2

    // We need to wait for the next button to be available again if it was animating, but here it's just state change.
    // However, findByText ensures we are on step 2 before clicking next again.
    expect(await screen.findByText('Step 2 Title')).toBeInTheDocument();
    await user.click(nextButton); // Step 3

    expect(await screen.findByText('Passo 3 de 3')).toBeInTheDocument();
    expect(await screen.findByText('Step 3 Title')).toBeInTheDocument();

    // The label changes on the last step
    const finishButton = await screen.findByLabelText('Concluir tutorial');
    await user.click(finishButton);

    expect(onCompleteMock).toHaveBeenCalledTimes(1);
  });

  it('calls onComplete when ArrowRight is pressed on the last step', async () => {
    const onCompleteMock = vi.fn();
    const user = userEvent.setup();
    render(<TutorialViewer module={mockModule} onComplete={onCompleteMock} />);

    // Navigate to the last step (step 3)
    await user.keyboard('{ArrowRight}'); // Step 2
    expect(await screen.findByText('Step 2 Title')).toBeInTheDocument();
    await user.keyboard('{ArrowRight}'); // Step 3

    expect(await screen.findByText('Passo 3 de 3')).toBeInTheDocument();

    // Press ArrowRight on the last step
    await user.keyboard('{ArrowRight}');

    expect(onCompleteMock).toHaveBeenCalledTimes(1);
  });
});
