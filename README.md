# Prueba Técnica Global66 - Pokedex

## Descripción del Proyecto

Este proyecto es una aplicación web tipo Pokedex desarrollada como prueba técnica para Global66. La aplicación permite a los usuarios explorar información sobre diferentes Pokémon, buscar por nombre, y guardar sus Pokémon favoritos.

## Características Principales

- **Listado de Pokémon**: Visualización de Pokémon con paginación
- **Búsqueda**: Filtrado de Pokémon por nombre
- **Favoritos**: Funcionalidad para guardar y gestionar Pokémon favoritos
- **Diseño Responsivo**: Interfaz adaptable a diferentes dispositivos

## Tecnologías Utilizadas

- **Frontend**: Vue.js, TypeScript
- **Gestión de Estado**: Pinia
- **Estilos**: CSS Modules / Tailwind CSS
- **API**: PokeAPI (https://pokeapi.co/)

## Instalación

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
   npm start
   ```

4. Abre tu navegador en `http://localhost:5173`

## Estructura del Proyecto

```
src/
├── components/       # Componentes reutilizables
├── views/            # Páginas principales
├── services/         # Servicios para API y lógica de negocio
├── store/            # Gestión de estado (Pinia)
├── types/            # Definiciones de TypeScript
└── App.tsx           # Componente principal
```