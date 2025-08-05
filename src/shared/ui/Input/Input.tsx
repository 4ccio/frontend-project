import { classNames } from 'shared/lib/classNames/classNames';
import {
    ChangeEvent, InputHTMLAttributes, memo, useEffect, useRef,
} from 'react';
import cls from './Input.module.scss';

export enum InputSize {
    SMALL = 'small',
    MEDIUM = 'medium',
    LARGE = 'large'
}

enum InputState {
    WARNING = 'warning',
    ERROR = 'error'
}

interface InputProps extends
    Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'size'> {
	className?: string;
    value?: string;
    onChange?: (value: string) => void;
    size?: InputSize;
    error?: boolean,
    warning?: boolean,
}

export const Input = memo((props: InputProps) => {
    const {
        className,
        value,
        onChange,
        type = 'text',
        size = InputSize.SMALL,
        error = false,
        warning = false,
        autoFocus,
        ...otherProps
    } = props;

    const ref = useRef<HTMLInputElement>(null);

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
    };

    const mods: Record<string, boolean> = {
        [cls[InputState.ERROR]]: error,
        [cls[InputState.WARNING]]: warning,
    };

    useEffect(() => {
        if (autoFocus) {
            ref.current?.focus();
        }
    }, [autoFocus]);

    return (
        <input
            ref={ref}
            className={classNames(cls.Input, mods, [className, cls[size]])}
            type={type}
            value={value}
            onChange={onChangeHandler}
            {...otherProps}
        />
    );
});
