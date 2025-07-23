import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { render, screen } from '@testing-library/react';

describe('button', () => {
    test('button rendered', () => {
        render(<Button>TEST</Button>);
        expect(screen.getByText('TEST')).toBeInTheDocument();
    });
    test('button clear theme', () => {
        render(<Button theme={ButtonTheme.BACKLESS}>TEST</Button>);
        expect(screen.getByText('TEST')).toHaveClass('backless');
    });
});
