import { create } from 'zustand';

export enum FormModalType {
  CLIENT,
  PROVIDER,
}

type FormModalStore = {
  show: boolean;
  formType: FormModalType | null;
};

type FormModalActions = {
  actions: {
    toggle: () => void;
    close: () => void;
    open: () => void;
    setType: (type: FormModalType) => void;
    reset: () => void;
  };
};

const initialState: FormModalStore = {
  show: false,
  formType: null,
};

const useFormModalStore = create<FormModalStore & FormModalActions>(set => ({
  ...initialState,
  actions: {
    toggle: () => set(state => ({ show: !state.show })),
    close: () => set({ show: false }),
    open: () => set({ show: true }),
    setType: type => set({ formType: type }),
    reset: () => set(initialState),
  },
}));

export default useFormModalStore;
