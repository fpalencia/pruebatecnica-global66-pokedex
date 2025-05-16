# 🔴 Prueba Técnica Global66 - Pokedex

## 📝 Descripción del Proyecto

Este proyecto es una aplicación web tipo Pokedex desarrollada como prueba técnica para Global66. La aplicación permite a los usuarios explorar información sobre diferentes Pokémon, buscar por nombre, visualizar detalles en un modal interactivo, y guardar sus Pokémon favoritos.

## ✨ Características Principales

- **Listado de Pokémon**: Visualización de Pokémon con scroll infinito
- **Búsqueda**: Filtrado de Pokémon por nombre
- **Favoritos**: Funcionalidad para guardar y gestionar Pokémon favoritos
- **Modal de Detalle**: Ventana modal con información detallada de cada Pokémon
- **Diseño Responsivo**: Interfaz adaptable a diferentes dispositivos

## 🛠️ Tecnologías Utilizadas

- **Frontend**: Vue.js, TypeScript
- **Gestión de Estado**: Pinia
- **Estilos**: Tailwind CSS
- **API**: PokeAPI (https://pokeapi.co/)
- **HTTP Client**: Axios
- **Validación de Datos**: Zod
- **Testing**: Vitest, Vue Test Utils

## 🚀 Instalación

1. Clona este repositorio:
   ```bash
   git clone https://github.com/[tu-usuario]/pruebatecnica-global66-pokedex.git
   cd pruebatecnica-global66-pokedex
   ```

2. Instala las dependencias:
   ```bash
   npm install
   ```

3. Inicia el servidor de desarrollo:
   ```bash
   npm run dev
   ```

4. Abre tu navegador en `http://localhost:5173`

## 📂 Estructura del Proyecto

├── src/ # Directorio principal del código fuente
│ ├── api/ # Configuración y funciones para integraciones con APIs externas
│ │
│ ├── assets/ # Recursos estáticos (imágenes, fuentes, etc.)
│ │
│ ├── components/ # Componentes reutilizables de Vue
│ │ ├── commons/ # Componentes genéricos utilizables en toda la aplicación
│ │ │ ├── modal/ # Componentes para ventanas modales
│ │ │
│ │ ├── pokemon/ # Componentes específicos relacionados con Pokémon
│ │
│ ├── composables/ # Lógica reutilizable extraída en composables (Composition API)
│ │ ├── custom/ # Composables personalizados generales
│ │ ├── pokemons/ # Composables específicos para gestionar Pokémon
│ │
│ ├── helpers/ # Funciones auxiliares y utilidades
│ │
│ ├── layout/ # Componentes de estructura y layout base de la aplicación
│ │
│ ├── router/ # Configuración de rutas con Vue Router
│ │
│ ├── schema/ # Esquemas de validación (Zod) y definición de estructuras de datos
│ │
│ ├── services/ # Servicios para lógica de negocio y comunicación con APIs
│ │
│ ├── store/ # Gestión de estado global con Pinia
│ │
│ ├── types/ # Definiciones de tipos TypeScript
│ │
│ ├── views/ # Páginas o vistas principales de la aplicación
│ │
│ ├── test/ # Tests unitarios y de integración
│ │
│ ├── App.vue # Componente raíz de la aplicación
│ ├── main.ts # Punto de entrada principal de la aplicación
│ ├── style.css # Estilos globales
│ └── vite-env.d.ts # Definiciones de tipos para Vite

## Detalles de la Estructura

- **api/**: Contiene la configuración de axios y los endpoints para las llamadas a la PokeAPI.
  
- **assets/**: Almacena recursos estáticos como imágenes, iconos y otros archivos multimedia utilizados en la aplicación.

- **components/**: 
  - **commons/**: Componentes generales como botones, inputs, loaders, etc.
  - **pokemon/**: Componentes específicos para mostrar tarjetas de Pokémon, listas, etc.

- **composables/**: 
  - **custom/**: Hooks personalizados para funcionalidades genéricas (ej: useLocalStorage, useDebounce).
  - **pokemons/**: Hooks específicos para el manejo de datos de Pokémon (ej: usePokemonList, usePokemonDetails).

- **helpers/**: Funciones utilitarias para formateo de datos, cálculos, manipulación de strings, etc.

- **layout/**: Componentes estructurales como Header, Footer, Sidebar y el layout principal.

- **router/**: Configuración de Vue Router, definición de rutas y middlewares.

- **schema/**: Esquemas Zod para validar y tipar los datos recibidos de la API.

- **services/**: 
  - Implementación de servicios para comunicación con APIs.
  - Lógica para transformar y adaptar datos entre la API y la aplicación.

- **store/**: Stores de Pinia para manejar el estado global (pokemonStore, favoritesStore, etc.).

- **types/**: Definiciones de interfaces y tipos TypeScript utilizados en toda la aplicación.

- **views/**: Páginas principales como Home, Favorites, PokemonDetail, etc.

- **__test__/**: Tests unitarios y de integración organizados según la estructura de la aplicación.

## Pruebas Unitarias

El proyecto incluye pruebas unitarias para los componentes principales utilizando Vitest y Vue Test Utils.

### Ejecutar las pruebas

Para ejecutar todas las pruebas unitarias:

```bash
npm run test
```

Para ejecutar las pruebas en modo watch (útil durante el desarrollo):

```bash
npm run test:watch
```

### Estructura de las pruebas

Las pruebas se encuentran en el directorio `src/__test__` y siguen la misma estructura que los componentes del proyecto. Cada componente principal tiene su propio archivo de prueba.