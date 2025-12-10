// Utilitário para gerenciar Local Storage
export const storage = {
  // Salvar preferências do usuário
  setPreferences: (preferences: { theme?: string; layout?: string }) => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('pedrocah777_preferences', JSON.stringify(preferences));
    }
  },

  // Obter preferências do usuário
  getPreferences: (): { theme?: string; layout?: string } => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('pedrocah777_preferences');
      return saved ? JSON.parse(saved) : {};
    }
    return {};
  },

  // Salvar itens do carrinho
  setCart: (items: any[]) => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('pedrocah777_cart', JSON.stringify(items));
    }
  },

  // Obter itens do carrinho
  getCart: (): any[] => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('pedrocah777_cart');
      return saved ? JSON.parse(saved) : [];
    }
    return [];
  },

  // Limpar carrinho
  clearCart: () => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('pedrocah777_cart');
    }
  }
};
