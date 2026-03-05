import type { ChangeEvent, ReactNode } from 'react';

import CloseIcon from '@/assets/icons/close_icon.svg?react';
import clsx from '@/utils/classNames.ts';

import styles from './Input.module.css';

type Props = {
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  variant?: 'bordered' | 'underlined';
  icon?: ReactNode;
};

export const Input = ({
  icon,
  placeholder,
  onChange,
  value,
  variant = 'underlined'
}: Props) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
  };

  const handleReset = () => {
    onChange?.('');
  };

  return (
    <div
      className={clsx(styles.inputWrapper, {
        [styles.inputWrapperUnderlined]: variant === 'underlined',
        [styles.inputWrapperBordered]: variant === 'bordered'
      })}
    >
      <div className={styles.inputRow}>
        {icon && icon}
        <input
          placeholder={placeholder}
          value={value}
          onChange={handleChange}
        />
      </div>
      {!!value?.length && (
        <button
          onClick={handleReset}
          className={clsx(styles.iconWrapper, styles.inputCloseButton)}
        >
          <CloseIcon />
        </button>
      )}
    </div>
  );
};
