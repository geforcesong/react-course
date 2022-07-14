import create from 'zustand';

interface BearState {
  bears: number;
  bearKind: string;
  increase: (by: number) => void;
  changeType: () => void;
}

const useBearStore = create<BearState>()((set) => ({
  bears: 0,
  bearKind: 'Black',
  increase: (by) => set((state) => ({ bears: state.bears + by })),
  changeType: () =>
    set((state) => ({
      bearKind: state.bearKind === 'Black' ? 'White' : 'Black',
    })),
}));

export default useBearStore;
