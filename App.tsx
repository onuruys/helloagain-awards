/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { store } from "@store/store";
import ManageThemeProviderWrapper from "@utils/ManageThemeContext";
import Routes from "@utils/Routes";
import React from "react";
import { Provider } from "react-redux";

function App(): React.JSX.Element {
  return (
    <Provider store={store}>
      <ManageThemeProviderWrapper>
        <Routes />
      </ManageThemeProviderWrapper>
    </Provider>
  );
}

export default App;
