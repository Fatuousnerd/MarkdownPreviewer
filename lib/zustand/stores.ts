import { MdStore } from "@/config/Interfaces";
import { create } from "zustand";

export const useMdStore = create<MdStore>((set) => ({
  md: null,
  setMd: (m) => set({ md: m }),
}));
