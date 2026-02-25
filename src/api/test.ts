/**
 * Тестовый файл для проверки API
 * Можно удалить после проверки
 */

import { getCharacters, getCharacterById } from './api';
import './types';

async function testApi() {
  try {
    console.log('Тестирование API...');

    // Тест 1: Получить список персонажей
    console.log('\n1. Получение списка персонажей:');
    const characters = await getCharacters({ page: 1 });
    console.log(`Получено ${characters.results.length} персонажей`);
    console.log('Всего страниц:', characters.info.pages);

    // Тест 2: Поиск по имени
    console.log('\n2. Поиск по имени "Rick":');
    const ricks = await getCharacters({ name: 'Rick' });
    console.log(`Найдено ${ricks.results.length} персонажей с именем Rick`);

    // Тест 3: Получить персонажа по ID
    console.log('\n3. Получение персонажа по ID (1):');
    const character = await getCharacterById(1);
    console.log('Имя:', character.name);
    console.log('Статус:', character.status);
    console.log('Вид:', character.species);

    // Тест 4: Фильтрация по статусу
    console.log('\n4. Фильтрация по статусу "alive":');
    const aliveCharacters = await getCharacters({ status: 'alive', page: 1 });
    console.log(`Найдено ${aliveCharacters.results.length} живых персонажей`);

    console.log('\n✅ Все тесты пройдены успешно!');
  } catch (error) {
    console.error('❌ Ошибка при тестировании:', error);
  }
}

// Раскомментируйте для запуска тестов
// testApi();

export default testApi;
