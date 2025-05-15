import { describe, it, expect, vi, beforeEach } from 'vitest'
import { mount } from '@vue/test-utils'
import BtnAddFavorite from '../../components/commons/BtnAddFavorite.vue'
import IconFavorite from '../../components/icons/IconFavorite.vue'
import { usePokemonStore } from '../../store/usePokemonStore'
import { createPinia, setActivePinia } from 'pinia'

// Mock del store
vi.mock('../../store/usePokemonStore', () => ({
  usePokemonStore: vi.fn()
}))

describe('BtnAddFavorite', () => {
  const mockAddFavorite = vi.fn()
  const mockRemoveFavorite = vi.fn()
  const mockIsFavoriteExists = vi.fn()
  
  beforeEach(() => {
    // Crear una nueva instancia de pinia para cada test
    setActivePinia(createPinia())
    
    // Resetear todos los mocks
    vi.resetAllMocks()
    
    // Configurar el mock del store
    vi.mocked(usePokemonStore).mockReturnValue({
      addFavorite: mockAddFavorite,
      removeFavorite: mockRemoveFavorite,
      isFavoriteExists: mockIsFavoriteExists
    } as any)
  })
  
  it('should render correctly', () => {
    // Configurar el mock para que el pokemon no sea favorito
    mockIsFavoriteExists.mockReturnValue(false)
    
    const wrapper = mount(BtnAddFavorite, {
      props: {
        name: 'pikachu'
      },
      global: {
        stubs: {
          IconFavorite: true
        }
      }
    })
    
    // Verificar que el componente se renderiza
    expect(wrapper.exists()).toBe(true)
    expect(wrapper.find('button').exists()).toBe(true)
  })
  
  it('should pass gray color to IconFavorite when pokemon is not favorite', () => {
    // Configurar el mock para que el pokemon no sea favorito
    mockIsFavoriteExists.mockReturnValue(false)
    
    const wrapper = mount(BtnAddFavorite, {
      props: {
        name: 'pikachu'
      }
    })
    
    // Verificar que se pasa el color gris al icono
    const iconComponent = wrapper.findComponent(IconFavorite)
    expect(iconComponent.props('color')).toBe('#BFBFBF')
  })
  
  it('should pass yellow color to IconFavorite when pokemon is favorite', () => {
    // Configurar el mock para que el pokemon sea favorito
    mockIsFavoriteExists.mockReturnValue(true)
    
    const wrapper = mount(BtnAddFavorite, {
      props: {
        name: 'pikachu'
      }
    })
    
    // Verificar que se pasa el color amarillo al icono
    const iconComponent = wrapper.findComponent(IconFavorite)
    expect(iconComponent.props('color')).toBe('#ECA539')
  })
  
  it('should add pokemon to favorites when clicked and pokemon is not favorite', async () => {
    // Configurar el mock para que el pokemon no sea favorito
    mockIsFavoriteExists.mockReturnValue(false)
    
    const wrapper = mount(BtnAddFavorite, {
      props: {
        name: 'pikachu'
      }
    })
    
    // Hacer clic en el botón
    await wrapper.find('button').trigger('click')
    
    // Verificar que se llama a addFavorite con el nombre correcto
    expect(mockAddFavorite).toHaveBeenCalledWith('pikachu')
    expect(mockRemoveFavorite).not.toHaveBeenCalled()
  })
  
  it('should remove pokemon from favorites when clicked and pokemon is favorite', async () => {
    // Configurar el mock para que el pokemon sea favorito
    mockIsFavoriteExists.mockReturnValue(true)
    
    const wrapper = mount(BtnAddFavorite, {
      props: {
        name: 'pikachu'
      }
    })
    
    // Hacer clic en el botón
    await wrapper.find('button').trigger('click')
    
    // Verificar que se llama a removeFavorite con el nombre correcto
    expect(mockRemoveFavorite).toHaveBeenCalledWith('pikachu')
    expect(mockAddFavorite).not.toHaveBeenCalled()
  })
  
  it('should check if pokemon is favorite using the correct name', () => {
    // Configurar el mock para que el pokemon no sea favorito
    mockIsFavoriteExists.mockReturnValue(false)
    
    mount(BtnAddFavorite, {
      props: {
        name: 'charizard'
      }
    })
    
    // Verificar que se llama a isFavoriteExists con el nombre correcto
    expect(mockIsFavoriteExists).toHaveBeenCalledWith('charizard')
  })
})
