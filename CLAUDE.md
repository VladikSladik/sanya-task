# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

React + TypeScript application built with Vite that displays characters from the Rick and Morty API. The project uses functional components with React Router for navigation.

## Common Commands

```bash
# Development server
npm run dev

# Production build
npm run build

# Lint code
npm run lint

# Format code with Prettier
npm run format

# Preview production build
npm run preview
```

## Architecture

### Import Aliases
The project uses TypeScript path aliases for clean imports:
- `@/*` → `src/*`
- `@/components/*` → `src/components/*`
- `@/pages/*` → `src/pages/*`
- `@/api/*` → `src/api/*`
- `@/types/*` → `src/types/*`
- `@/utils/*` → `src/utils/*`
- `@/assets/*` → `src/assets/*`

Example usage:
```typescript
import { Header } from '@/components';
import { getCharacters } from '@/api/characterApi';
import type { Character } from '@/types/character';
```

### API Layer
- **Base client**: `src/api/client.ts` - Axios instance configured with base URL from environment variable `VITE_API_BASE_URL`
- **API functions**: `src/api/characterApi.ts` - Functions for fetching character data from Rick and Morty API
- **Environment**: API base URL must be set in `.env` file (see `.env.example`)

### Type System
- All TypeScript types for API responses and character data are in `src/types/character.ts`
- `Character` interface defines the full character object structure
- `ApiResponse<T>` generic interface for paginated API responses
- `CharacterFilters` interface for query parameters

### Routing
- Routes defined in `src/App.tsx` using React Router
- `/` - Characters list page (`src/pages/CharactersList.tsx`)
- `/character/:id` - Character detail page (`src/pages/CharacterDetail.tsx`)

### Component Structure
- Components are organized in folders with co-located CSS module files (e.g., `src/components/Header/Header.tsx` + `Header.module.css`)
- Each component folder has an `index.ts` file for clean imports
- Main components: Header and Footer (layout components)

### Styling
- Components use CSS Modules for scoped styles (files named `*.module.css`)
- Import styles as `import styles from './ComponentName.module.css'`
- Use classes as `className={styles.className}` or `className={styles['class-name']}`
- Global styles in `src/index.css` and `src/App.css`
- Assets (images, icons) stored in `src/assets/` with subfolders for `icons/` and `images/`

### Pages
- Page components are in `src/pages/` directory
- Exported through `src/pages/index.ts` barrel file
