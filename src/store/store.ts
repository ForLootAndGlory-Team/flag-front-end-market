import { create } from 'zustand';

export interface ContractState {
  totalSupply: bigint | null;
  recruiterBalance: bigint | null;
  rETHBalance: bigint | null;
  setTotalSupply: (value: bigint | null) => void;
  setRecruiterBalance: (value: bigint | null) => void;
  setRETHBalance: (value: bigint | null) => void;
}

export const useStore = create<ContractState>((set) => ({
  totalSupply: null,
  recruiterBalance: null,
  rETHBalance: null,

  setTotalSupply: (value) => set({ totalSupply: value }),
  setRecruiterBalance: (value) => set({ recruiterBalance: value }),
  setRETHBalance: (value) => set({ rETHBalance: value }),
}));