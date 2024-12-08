/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { store } from "@store/store";
import Routes from "@utils/Routes";
import React from "react";
import { StatusBar, useColorScheme } from "react-native";
import { Provider } from "react-redux";

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === "dark";

  return (
    <Provider store={store}>
      <StatusBar barStyle={isDarkMode ? "light-content" : "dark-content"} />
      <Routes />
    </Provider>
  );
}

export default App;
