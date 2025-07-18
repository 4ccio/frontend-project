import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { render, screen } from '@testing-library/react';

describe('button', () => {
    test('button rendered', () => {
        render(<Button>TEST</Button>);
        expect(screen.getByText('TEST')).toBeInTheDocument();
    });
    test('button clear theme', () => {
        render(<Button theme={ThemeButton.BACKLESS}>TEST</Button>);
        expect(screen.getByText('TEST')).toHaveClass('clear');
    });
});
