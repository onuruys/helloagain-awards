import React from "react";
import {
  createNavigationContainerRef,
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import type INavigation from "@interfaces/INavigation";
import RootScreen from "@enums/RootScreen";
import Modal from "@components/Modal";
import { useTheme } from "./ManageThemeContext";
import { StackScreens } from "@screens/Pages";
const Stack = createNativeStackNavigator<INavigation.IRootStack>();
export const rootNavigationRef =
  createNavigationContainerRef<INavigation.IRootStack>();

function Routes() {
  const { mode } = useTheme();
  return (
    <NavigationContainer
      ref={rootNavigationRef}
      theme={mode == "dark" ? DarkTheme : DefaultTheme}
    >
      <Stack.Navigator
        initialRouteName={RootScreen.HomeScreen}
        screenOptions={{
          headerStyle: {
            backgroundColor: mode == "dark" ? "#000" : "#fff",
          },
        }}
      >
        {Object.values(StackScreens).map((screen) => {
          const { name, component, options } = screen;
          return (
            <Stack.Screen
              key={`screen-${name}`}
              name={name as RootScreen}
              // @ts-ignore
              component={component}
              options={options}
            />
          );
        })}
      </Stack.Navigator>
      <Modal />
    </NavigationContainer>
  );
}

export default Routes;
