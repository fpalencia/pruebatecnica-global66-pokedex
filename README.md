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

```

├── api/              # Configuración y funciones para llamadas a la API
├── assets/           # Recursos estáticos
├── components/       # Componentes reutilizables
├── composables/      # Composables
├── helpers/          # Funciones auxiliares
├── layout/           # Componentes de estructura y layout
├── router/           # Configuración de enrutamiento
├── schema/           # Esquemas de validación y definición de datos
├── services/         # Servicios para API y lógica de negocio
├── store/            # Gestión de estado (Pinia)
├── types/            # Definiciones de TypeScript
├── views/            # Páginas principales
├── App.vue
├── main.ts

```

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