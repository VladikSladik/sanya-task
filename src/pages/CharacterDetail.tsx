import { useParams } from 'react-router-dom';

/**
 * Страница с детальной информацией о персонаже
 */
export const CharacterDetail = () => {
  const { id } = useParams<{ id: string }>();

  return (
    <div>
      <h1>Детальная информация о персонаже</h1>
      <p>ID персонажа: {id}</p>
      <p>Здесь будет отображаться подробная информация о персонаже</p>
    </div>
  );
};
