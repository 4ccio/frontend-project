import React, {
    FC, SelectHTMLAttributes, memo, ReactNode,
} from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Select.module.scss';

export enum SelectSize {
    SMALL = 'small',
    MEDIUM = 'medium',
    LARGE = 'large',
}

interface SelectItem {
    value: string;
    label: string;
}

interface SelectProps extends
    Omit<
        SelectHTMLAttributes<HTMLSelectElement>,
        'size'
    > {
    className?: string;
    size?: SelectSize;
    items: SelectItem[];
    // placeholder?: ReactNode;
}

export const Select = memo((props: SelectProps) => {
    const {
        className,
        size = SelectSize.SMALL,
        items,
        // placeholder,
        disabled,
        ...otherProps
    } = props;

    return (
        <div>
            <select
                className={classNames(cls.Select, {}, [cls[size], className])}
                disabled={disabled}
                {...otherProps}
            >
                {/* {placeholder && <option value="">{placeholder}</option>} */}
                {items.map((item) => (
                    <option key={item.value} value={item.value}>
                        {item.label}
                    </option>
                ))}
            </select>
        </div>
    );
});
