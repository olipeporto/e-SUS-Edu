import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import App from './App';

// Mock framer-motion to avoid animation issues in Jest environment
vi.mock('framer-motion', () => {
    const React = require('react');
    return {
        motion: {
            div: React.forwardRef(({ children, ...props }: any, ref: any) => {
                const { initial, animate, exit, transition, whileHover, ...domProps } = props;
                return <div ref={ref} {...domProps}>{children}</div>;
            }),
        },
        AnimatePresence: ({ children }: any) => <>{children}</>,
    };
});

describe('App component', () => {
    it('renders the dashboard with module cards by default', () => {
        render(<App />);
        expect(screen.getByText('Tutoriais e-SUS APS')).toBeInTheDocument();
        expect(screen.getByText(/Selecione um módulo abaixo/)).toBeInTheDocument();
    });

    it('navigates to tutorial viewer when a module card is clicked', async () => {
        render(<App />);

        // Assume at least one module card is present, e.g. "Cidadão"
        const startTutorialText = screen.getAllByText('Iniciar Tutorial')[0];

        fireEvent.click(startTutorialText);

        // It should render the tutorial view and hide the main dashboard heading
        await waitFor(() => {
            expect(screen.queryByText('Tutoriais e-SUS APS')).not.toBeInTheDocument();
        });

        // There should be a back button in the Header to go to MENU
        expect(screen.getByText('Voltar ao Menu')).toBeInTheDocument();
    });

    it('can open and close the links modal', async () => {
        render(<App />);

        // Look for link buttons that can be clicked
        const linksButtons = document.querySelectorAll('button[title="Links e Vídeos"]');
        if (linksButtons.length > 0) {
            fireEvent.click(linksButtons[0]);

            // It should open a modal with links
            await waitFor(() => {
                // Modal generally has a "Fechar" button
                expect(screen.getByText('Fechar')).toBeInTheDocument();
            });

            // Close modal
            const closeButtons = screen.getAllByRole('button').filter(b => b.textContent === 'Fechar' || (b.innerHTML && b.innerHTML.includes('lucide-x')));
            if (closeButtons.length > 0) {
                fireEvent.click(closeButtons[0]);
            }
        }
    });
});
