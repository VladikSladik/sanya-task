import { useState } from 'react';

import { Select } from '@/components/Select';

/**
 * Страница со списком персонажей
 */

const options = [
  {
    value: 1,
    label: 'ALO'
  },
  {
    value: 2,
    label: 'ZDAROVA'
  }
];

export const CharactersList = () => {
  const [value, setValue] = useState(options[0].value);
  return (
    <div>
      <h1>Список персонажей</h1>
      <p>Здесь будет отображаться список персонажей из Рика и Морти</p>
      <Select
        variant={'small'}
        options={options}
        value={value}
        onChange={(val) => setValue(val)}
      />
    </div>
  );
};
