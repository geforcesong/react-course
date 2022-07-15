import create from 'zustand';

interface BearState {
  bears: number;
  bearKind: string;
  description: string;
  bodyParts: string[];
  increase: (by: number) => void;
  changeType: () => void;
  setDescription: (description: string) => void;
  addBodyPart: (part: string) => void;
}

const useBearStore = create<BearState>()((set) => ({
  bears: 0,
  bearKind: 'Black',
  description: 'Default bear color is Black',
  bodyParts: ['head'],
  increase: (by) => set((state) => ({ bears: state.bears + by })),
  setDescription: (description) => set(() => ({ description: description })),
  changeType: () =>
    set((state) => ({
      bearKind: state.bearKind === 'Black' ? 'White' : 'Black',
    })),
  addBodyPart: (part) =>
    set((state) => ({ bodyParts: [...state.bodyParts, part] })),
}));

export default useBearStore;
