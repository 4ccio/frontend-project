import { classNames } from 'shared/lib/classNames/classNames';
import { Modal } from 'shared/ui/Modal/Modal';
import { memo, Suspense } from 'react';
import { Loader } from 'shared/ui/Loader';
import cls from './LoginModal.module.scss';
import { LoginFormLazy } from '../LoginForm/LoginForm.lazy';

interface LoginModalProps {
    className?: string,
    isOpen: boolean,
    onClose: () => void
}

export const LoginModal = memo((props: LoginModalProps) => {
    const { className, isOpen, onClose } = props;

    return (
        <Modal
            className={classNames(cls.LoginModal, {}, [className])}
            isOpen={isOpen}
            onClose={onClose}
            lazy
        >
            <Suspense fallback={<Loader />}>
                <LoginFormLazy onSuccess={onClose} />
            </Suspense>
        </Modal>
    );
});
