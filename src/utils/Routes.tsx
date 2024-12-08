import React from "react";
import {
  createNavigationContainerRef,
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import type INavigation from "@interfaces/INavigation";
import { StackScreens } from "@screens/Pages";
import RootScreen from "@enums/RootScreen";
import { useColorScheme } from "react-native";
import Modal from "@components/Modal";
const Stack = createNativeStackNavigator<INavigation.IRootStack>();
export const rootNavigationRef =
  createNavigationContainerRef<INavigation.IRootStack>();

function Routes() {
  const scheme = useColorScheme();
  return (
    <NavigationContainer
      ref={rootNavigationRef}
      theme={scheme === "dark" ? DarkTheme : DefaultTheme}
    >
      <Stack.Navigator initialRouteName={RootScreen.HomeScreen}>
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
