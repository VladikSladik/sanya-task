import clsx from 'clsx';
import {
  type ComponentType,
  type ReactNode,
  useEffect,
  useRef,
  useState
} from 'react';

import { Triangle } from '@/components/Select/Triangle.tsx';

import styles from './Select.module.css';

type Option<T> = {
  value: T;
  label: string;
};

type OptionProps<T> = {
  option: Option<T>;
};

type Props<T extends ReactNode> = {
  value: T;
  onChange: (value: T) => void;
  options: Array<{ value: T; label: string }>;
  placeholder?: string;
  variant?: 'small' | 'large';
  OptionComponent?: ComponentType<OptionProps<T>>;
};

const DefaultOptionComponent = <T,>({ option }: OptionProps<T>) => {
  return <span className={styles.option}>{option.label}</span>;
};

export const Select = <T extends ReactNode>({
  value,
  options,
  onChange,
  placeholder,
  variant = 'large',
  OptionComponent = DefaultOptionComponent
}: Props<T>) => {
  const [isOpen, setIsOpen] = useState(false);
  const selectRef = useRef<HTMLDivElement | null>(null);

  const isSmall = variant === 'small';

  const selectedValue = options.find((item) => value === item.value);

  const handleClick = () => {
    setIsOpen((prev) => !prev);
  };

  const handleChange = (value: T) => {
    onChange(value);
    setIsOpen(false);
  };

  const handleClickOutside = (e: MouseEvent) => {
    if (!isOpen) return;

    if (selectRef.current && !selectRef.current.contains(e.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  });

  return (
    <div ref={selectRef}>
      <div
        className={clsx(styles.wrapper, isSmall && styles.wrapperSmall)}
        onClick={handleClick}
      >
        <div>
          {!selectedValue && placeholder && <span>{placeholder}</span>}
          {selectedValue && <span>{selectedValue.label}</span>}
        </div>
        <Triangle isOpen={isOpen} />
      </div>

      {isOpen && (
        <div
          className={clsx(
            styles.optionsWrapper,
            isSmall && styles.wrapperSmall
          )}
        >
          {options.map((item) => (
            <div onClick={() => handleChange(item.value)}>
              <OptionComponent option={item} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
