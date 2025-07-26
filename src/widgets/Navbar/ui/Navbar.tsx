import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';
import { Modal } from 'shared/ui/Modal/Modal';
import { useCallback, useState } from 'react';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation();

    const [isAuthModal, setIsAuthModal] = useState(false);

    const toggleModal = useCallback(() => {
        setIsAuthModal((prevState) => !prevState);
    }, []);

    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <div className={classNames(cls.links)}>
                <Button onClick={toggleModal}>
                    {t('Войти')}
                </Button>

                <Modal isOpen={isAuthModal} onClose={toggleModal}>
                    {/* eslint-disable-next-line i18next/no-literal-string */}
                    {/* eslint-disable-next-line i18next/no-literal-string, max-len */}
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum, cumque cupiditate eaque ex exercitationem iste itaque qui quia saepe tenetur! Aliquam, aperiam commodi delectus dignissimos dolorem esse quos totam! Quasi.
                </Modal>
            </div>
        </div>
    );
};
