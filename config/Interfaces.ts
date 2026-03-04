export interface ThemeType {
  theme: string;
  toggleTheme: () => void;
}

export type MdStore = { md: string | null; setMd: (m: string) => void };
