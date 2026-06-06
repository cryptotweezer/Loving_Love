"use client";

import { createContext, useCallback, useContext, useState } from "react";

// ─── Types ────────────────────────────────────────────────────────────────────

type Theme = "light" | "dark";

interface NavbarThemeCtx {
  theme: Theme;
  setDark:  () => void;
  setLight: () => void;
}

// ─── Context ──────────────────────────────────────────────────────────────────

const NavbarThemeContext = createContext<NavbarThemeCtx>({
  theme:    "light",
  setDark:  () => {},
  setLight: () => {},
});

// ─── Provider ─────────────────────────────────────────────────────────────────

export function NavbarThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [theme, setTheme] = useState<Theme>("light");
  const setDark  = useCallback(() => setTheme("dark"),  []);
  const setLight = useCallback(() => setTheme("light"), []);

  return (
    <NavbarThemeContext.Provider value={{ theme, setDark, setLight }}>
      {children}
    </NavbarThemeContext.Provider>
  );
}

// ─── Hook ─────────────────────────────────────────────────────────────────────

export function useNavbarTheme() {
  return useContext(NavbarThemeContext);
}
