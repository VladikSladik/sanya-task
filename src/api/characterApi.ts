import type {
  ApiResponse,
  Character,
  CharacterFilters
} from '@/types/character';

import { apiClient } from './client';

/**
 * Получить список персонажей с фильтрами
 */
export const getCharacters = async (
  filters?: CharacterFilters
): Promise<ApiResponse<Character>> => {
  try {
    const response = await apiClient.get<ApiResponse<Character>>('/character', {
      params: filters
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching characters:', error);
    throw error;
  }
};

/**
 * Получить персонажа по ID
 */
export const getCharacterById = async (id: number): Promise<Character> => {
  try {
    const response = await apiClient.get<Character>(`/character/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching character with id ${id}:`, error);
    throw error;
  }
};
