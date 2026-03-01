import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import ModuleCard from './ModuleCard';
import { BookOpen } from 'lucide-react';

describe('ModuleCard component', () => {
    const mockModule = {
        id: 'test-module',
        title: 'Test Module',
        description: 'This is a test module.',
        icon: BookOpen,
        color: 'text-blue-500',
        steps: []
    };

    it('renders correctly with given module data', () => {
        const onClickMock = vi.fn();
        const onOpenLinksMock = vi.fn();

        render(
            <ModuleCard
                module={mockModule}
                index={0}
                onClick={onClickMock}
                onOpenLinks={onOpenLinksMock}
            />
        );

        expect(screen.getByText('Test Module')).toBeInTheDocument();
        expect(screen.getByText('This is a test module.')).toBeInTheDocument();
    });

    it('calls onClick when the card is clicked', () => {
        const onClickMock = vi.fn();
        const onOpenLinksMock = vi.fn();

        const { container } = render(
            <ModuleCard
                module={mockModule}
                index={0}
                onClick={onClickMock}
                onOpenLinks={onOpenLinksMock}
            />
        );

        const card = container.firstChild as HTMLElement;
        fireEvent.click(card);

        expect(onClickMock).toHaveBeenCalledTimes(1);
    });

    it('does not render links button if module has no links or videos', () => {
        const onClickMock = vi.fn();
        const onOpenLinksMock = vi.fn();

        const { container } = render(
            <ModuleCard
                module={mockModule}
                index={0}
                onClick={onClickMock}
                onOpenLinks={onOpenLinksMock}
            />
        );

        // Look for link icon button inside the card
        const linksButton = container.querySelector('button[title="Links e Vídeos"]');
        expect(linksButton).not.toBeInTheDocument();
    });

    it('renders links button and calls onOpenLinks when module has resources', () => {
        const onClickMock = vi.fn();
        const onOpenLinksMock = vi.fn();
        const moduleWithLinks = {
            ...mockModule,
            links: [{ title: 'Link 1', url: 'http://example.com' }]
        };

        const { container } = render(
            <ModuleCard
                module={moduleWithLinks}
                index={0}
                onClick={onClickMock}
                onOpenLinks={onOpenLinksMock}
            />
        );

        const linksButton = container.querySelector('button[title="Links e Vídeos"]');
        expect(linksButton).toBeInTheDocument();

        if (linksButton) {
            fireEvent.click(linksButton);
        }

        expect(onOpenLinksMock).toHaveBeenCalledTimes(1);
        expect(onOpenLinksMock).toHaveBeenCalledWith('test-module');
    });
});
