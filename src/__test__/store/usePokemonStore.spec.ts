import { describe, it, expect, vi, beforeEach } from 'vitest'
import { usePokemonStore } from '../../store/usePokemonStore'
import { createPinia, setActivePinia } from 'pinia'
import { useStorage } from '@vueuse/core'
import { ref } from 'vue'

// Mock de @vueuse/core
vi.mock('@vueuse/core', () => ({
  useStorage: vi.fn()
}))

describe('usePokemonStore', () => {
  beforeEach(() => {
    // Crear una nueva instancia de pinia para cada test
    setActivePinia(createPinia())
    
    // Mock del useStorage para que devuelva un ref simple
    const mockStorageRef = ref({})
    vi.mocked(useStorage).mockReturnValue(mockStorageRef as any)
  })

  it('should initialize with default values', () => {
    const store = usePokemonStore()
    
    expect(store.initialLoad).toBe(false)
    expect(store.pokemons).toEqual({})
    expect(store.favorites).toEqual({})
  })

  it('should set pokemons correctly', () => {
    const store = usePokemonStore()
    const newPokemons = { pikachu: 'pikachu', charizard: 'charizard' }
    
    store.setPokemons(newPokemons)
    
    expect(store.pokemons).toEqual(newPokemons)
  })

  it('should merge new pokemons with existing ones', () => {
    const store = usePokemonStore()
    
    // Agregar pokemons iniciales
    store.setPokemons({ pikachu: 'pikachu' })
    
    // Agregar más pokemons
    store.setPokemons({ charizard: 'charizard' })
    
    // Verificar que se mantienen todos los pokemons
    expect(store.pokemons).toEqual({
      pikachu: 'pikachu',
      charizard: 'charizard'
    })
  })

  it('should set initialLoad correctly', () => {
    const store = usePokemonStore()
    
    // Valor inicial
    expect(store.initialLoad).toBe(false)
    
    // Cambiar a true
    store.setInitialLoad(true)
    expect(store.initialLoad).toBe(true)
    
    // Cambiar a false
    store.setInitialLoad(false)
    expect(store.initialLoad).toBe(false)
  })

  it('should add favorite correctly', () => {
    const store = usePokemonStore()
    
    store.addFavorite('pikachu')
    
    expect(store.favorites).toEqual({ pikachu: 'pikachu' })
  })

  it('should remove favorite correctly', () => {
    const store = usePokemonStore()
    
    // Agregar favoritos
    store.addFavorite('pikachu')
    store.addFavorite('charizard')
    
    // Verificar que se agregaron
    expect(store.favorites).toEqual({
      pikachu: 'pikachu',
      charizard: 'charizard'
    })
    
    // Remover un favorito
    store.removeFavorite('pikachu')
    
    // Verificar que se removió correctamente
    expect(store.favorites).toEqual({
      charizard: 'charizard'
    })
  })

  it('should check if favorite exists correctly', () => {
    const store = usePokemonStore()
    
    // Inicialmente no hay favoritos
    expect(store.isFavoriteExists('pikachu')).toBeFalsy()
    
    // Agregar un favorito
    store.addFavorite('pikachu')
    
    // Verificar que existe
    expect(store.isFavoriteExists('pikachu')).toBeTruthy()
    
    // Verificar que otro pokemon no existe como favorito
    expect(store.isFavoriteExists('charizard')).toBeFalsy()
  })
})
