import { ReactNode } from 'react';
import { createPortal } from 'react-dom';

interface PortalProps {
	children: ReactNode;
    element?: HTMLElement;
}

export const Portal = (props: PortalProps) => {
    const modalRoot = document.body;
    const {
        children,
        element = modalRoot,
    } = props;

    if (__IS_STORYBOOK__) {
        // eslint-disable-next-line react/jsx-no-useless-fragment
        return <>{children}</>;
    }

    return (
        createPortal(children, element)
    );
};
