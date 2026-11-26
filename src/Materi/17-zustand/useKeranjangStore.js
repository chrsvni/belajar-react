import { create } from 'zustand'

const DISKON_KUPON = 0.1

export const useKeranjangStore = create((set, get) => ({
  item: [],
  pakaiKupon: false,

  tambah: (produk) =>
    set((state) => {
      const ada = state.item.find((i) => i.id === produk.id)
      if (ada) {
        return {
          item: state.item.map((i) =>
            i.id === produk.id ? { ...i, jumlah: i.jumlah + 1 } : i
          ),
        }
      }
      return { item: [...state.item, { ...produk, jumlah: 1 }] }
    }),

  kurangi: (id) =>
    set((state) => ({
      item: state.item
        .map((i) => (i.id === id ? { ...i, jumlah: i.jumlah - 1 } : i))
        .filter((i) => i.jumlah > 0),
    })),

  hapus: (id) =>
    set((state) => ({
      item: state.item.filter((i) => i.id !== id),
    })),

  ubahKupon: () => set((state) => ({ pakaiKupon: !state.pakaiKupon })),

  checkout: () => {
    const { item } = get()
    console.log('🧾 Checkout:', item)
    set({ item: [], pakaiKupon: false })
  },
}))

export const pilihJumlahItem = (state) =>
  state.item.reduce((total, i) => total + i.jumlah, 0)

export const pilihSubtotal = (state) =>
  state.item.reduce((total, i) => total + i.harga * i.jumlah, 0)

export const pilihTotal = (state) => {
  const subtotal = pilihSubtotal(state)
  return state.pakaiKupon ? Math.round(subtotal * (1 - DISKON_KUPON)) : subtotal
}
