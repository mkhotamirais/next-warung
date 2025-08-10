import { create } from "zustand";

interface GlobalState {
  blogCategorySuccessMsg: string | null;
  setBlogCategorySuccessMsg: (blogCategorySuccessMsg: string | null) => void;
  blogCategoryErrorMsg: string | null;
  setBlogCategoryErrorMsg: (blogCategoryErrorMsg: string | null) => void;
  openNavMobile: boolean;
  setOpenNavMobile: (openNavMobile: boolean) => void;
}

export const useGlobal = create<GlobalState>((set) => ({
  blogCategorySuccessMsg: null,
  setBlogCategorySuccessMsg: (blogCategorySuccessMsg) => set(() => ({ blogCategorySuccessMsg })),
  blogCategoryErrorMsg: null,
  setBlogCategoryErrorMsg: (blogCategoryErrorMsg) => set(() => ({ blogCategoryErrorMsg })),
  openNavMobile: false,
  setOpenNavMobile: (openNavMobile) => set(() => ({ openNavMobile })),
}));
