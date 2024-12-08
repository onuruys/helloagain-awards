import React, { createContext, useState, useEffect } from "react";
import { Appearance, StatusBar, type ColorSchemeName } from "react-native";
import { DefaultTheme, ThemeProvider } from "@react-navigation/native";
export interface ThemeContext {
  mode: ColorSchemeName;
  setMode(mode: ColorSchemeName): void;
}
// Get OS default mode or default to 'light'
const defaultMode = Appearance.getColorScheme() || "light";
// Create ManageThemeContext which will hold the current mode and a function to change it
const ManageThemeContext = createContext<ThemeContext>({
  mode: defaultMode,
  setMode: (mode: ColorSchemeName) => console.log(mode),
});
// Export a helper function to easily use the Context
export const useTheme = () => React.useContext(ManageThemeContext);
// Create  the Provider
const ManageThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [themeState, setThemeState] = useState<ColorSchemeName>(defaultMode);
  const setMode = (mode: ColorSchemeName) => {
    setThemeState(mode);
  };
  // Subscribe to OS mode changes
  useEffect(() => {
    const subscription = Appearance.addChangeListener(({ colorScheme }) => {
      setThemeState(colorScheme);
    });
    return () => subscription.remove();
  }, []);
  // Return a component which wraps its children in a styled-component ThemeProvider,
  // sets the status bar color, and injects the current mode and a function to change it
  return (
    <ManageThemeContext.Provider
      value={{ mode: themeState as ColorSchemeName, setMode }}
    >
      <ThemeProvider value={themeState === "dark" ? DefaultTheme : DefaultTheme}>
        <>
          <StatusBar
            barStyle={themeState === "dark" ? "light-content" : "dark-content"}
          />
          {children}
        </>
      </ThemeProvider>
    </ManageThemeContext.Provider>
  );
};
// This wrapper is needed to add the ability to subscribe to OS mode changes
const ManageThemeProviderWrapper = ({ children }: { children: React.ReactNode }) => (
  <ManageThemeProvider>{children}</ManageThemeProvider>
);
export default ManageThemeProviderWrapper;
