import { useState } from 'react';

import SearchIcon from '@/assets/icons/search.svg?react';
import { Fallback } from '@/components/Fallback';
import { Input } from '@/components/Input';

/**
 * Страница со списком персонажей
 */
export const CharactersList = () => {
  const [value, setValue] = useState('');
  return (
    <div>
      <h1>Список персонажей</h1>
      <p>Здесь будет отображаться список персонажей из Рика и Морти</p>
      <Fallback />

      <div style={{ maxWidth: 200 }}>
        <Input
          icon={<SearchIcon />}
          value={value}
          variant={'bordered'}
          onChange={(value) => setValue(value)}
          placeholder={'Введите текст'}
        />
      </div>
    </div>
  );
};
