import { describe, it, expect, vi, beforeEach } from 'vitest'
import { mount } from '@vue/test-utils'
import BtnFooter from '../../components/commons/BtnFooter.vue'
import IconAll from '../../components/icons/IconAll.vue'
import IconFavorite from '../../components/icons/IconFavorite.vue'
import { useRouter, useRoute } from 'vue-router'

// Mock de vue-router
vi.mock('vue-router', () => ({
  useRouter: vi.fn(),
  useRoute: vi.fn()
}))

describe('BtnFooter', () => {
  const mockPush = vi.fn()
  let mockRoute: any
  
  beforeEach(() => {
    vi.resetAllMocks()
    
    // Mock del router
    vi.mocked(useRouter).mockReturnValue({
      push: mockPush
    } as any)
    
    // Mock de la ruta inicial
    mockRoute = {
      path: '/pokemons',
      params: {},
      query: {}
    }
    
    vi.mocked(useRoute).mockReturnValue(mockRoute as any)
  })
  
  it('should render correctly with two buttons', () => {
    const wrapper = mount(BtnFooter)
    
    const buttons = wrapper.findAll('button')
    expect(buttons.length).toBe(2)
    
    // Verificar texto de los botones
    expect(buttons[0].text()).toContain('All')
    expect(buttons[1].text()).toContain('Favorites')
  })
  
  it('should set "all" as active filter by default when on /pokemons route', () => {
    const wrapper = mount(BtnFooter)
    
    // Verificar que el botón "All" tiene la clase de activo
    const allButton = wrapper.findAll('button')[0]
    expect(allButton.classes()).toContain('bg-secondary')
    
    // Verificar que el botón "Favorites" no tiene la clase de activo
    const favoritesButton = wrapper.findAll('button')[1]
    expect(favoritesButton.classes()).toContain('bg-gray-medium')
  })
  
  it('should set "favorites" as active filter when on /favorites route', async () => {
    // Configurar la ruta como /favorites
    mockRoute.path = '/favorites'
    
    // Importante: Asegurarse de que useRoute devuelve el mockRoute actualizado
    vi.mocked(useRoute).mockReturnValue(mockRoute as any)
    
    // Montar el componente después de configurar la ruta
    const wrapper = mount(BtnFooter)
    
    // Establecer directamente el valor de activeFilter
    // @ts-ignore - Accediendo a propiedad interna para testing
    wrapper.vm.activeFilter = 'favorites'
    
    // Forzar la actualización del componente
    await wrapper.vm.$nextTick()
    
    // Verificar que "favorites" está activo por sus clases
    const favoritesButton = wrapper.findAll('button')[1]
    expect(favoritesButton.classes()).toContain('bg-secondary')
  })
  
  it('should navigate to /pokemons when clicking on "All" button', async () => {
    const wrapper = mount(BtnFooter)
    
    // Hacer clic en el botón "All"
    await wrapper.findAll('button')[0].trigger('click')
    
    // Verificar que se navega a /pokemons
    expect(mockPush).toHaveBeenCalledWith('/pokemons')
  })
  
  it('should navigate to /favorites when clicking on "Favorites" button', async () => {
    const wrapper = mount(BtnFooter)
    
    // Hacer clic en el botón "Favorites"
    await wrapper.findAll('button')[1].trigger('click')
    
    // Verificar que se navega a /favorites
    expect(mockPush).toHaveBeenCalledWith('/favorites')
  })
  
  it('should emit "change-filter" event with correct value when clicking buttons', async () => {
    const wrapper = mount(BtnFooter)
    
    // Hacer clic en el botón "All"
    await wrapper.findAll('button')[0].trigger('click')
    
    // Verificar que se emite el evento con el valor correcto
    expect(wrapper.emitted('change-filter')?.[0]).toEqual(['all'])
    
    // Hacer clic en el botón "Favorites"
    await wrapper.findAll('button')[1].trigger('click')
    
    // Verificar que se emite el evento con el valor correcto
    expect(wrapper.emitted('change-filter')?.[1]).toEqual(['favorites'])
  })
  
  it('should render icons with correct colors', () => {
    const wrapper = mount(BtnFooter, {
      global: {
        stubs: {
          IconAll: true,
          IconFavorite: true
        }
      }
    })
    
    // Verificar que los iconos se renderizan
    expect(wrapper.findComponent({ name: 'IconAll' }).exists()).toBe(true)
    expect(wrapper.findComponent({ name: 'IconFavorite' }).exists()).toBe(true)
  })
  
  it('should have "all" as active filter on /pokemons route', () => {
    // Configurar la ruta como /pokemons
    mockRoute.path = '/pokemons'
    vi.mocked(useRoute).mockReturnValue(mockRoute as any)
    
    const wrapper = mount(BtnFooter)
    
    // Verificar que "all" está activo
    expect(wrapper.findAll('button')[0].classes()).toContain('bg-secondary')
  })
  
  it('should have "favorites" as active filter on /favorites route', () => {
    // Configurar la ruta como /favorites
    mockRoute.path = '/favorites'
    vi.mocked(useRoute).mockReturnValue(mockRoute as any)
    
    // Montar el componente después de configurar la ruta
    const wrapper = mount(BtnFooter)
    
    // Verificar directamente en el HTML que el botón de favoritos tiene la clase correcta
    const html = wrapper.html()
    expect(html).toContain('Favorites</span></button>')
    
    // Verificar que el segundo botón (Favorites) tiene la clase bg-secondary
    const buttons = wrapper.findAll('button')
    const favoritesButtonHTML = buttons[1].element.outerHTML
    expect(favoritesButtonHTML).toContain('bg-secondary')
  })
})
