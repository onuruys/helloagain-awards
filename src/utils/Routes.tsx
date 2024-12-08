import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import type INavigation from "@interfaces/INavigation";
import { StackScreens } from "@screens/Pages";
import RootScreen from "@enums/RootScreen";
const Stack = createNativeStackNavigator<INavigation.IRootStack>();

function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={RootScreen.HomeScreen}>
        {Object.values(StackScreens).map((screen) => {
          const { name, component, options } = screen;
          return (
            <Stack.Screen
              key={`screen-${name}`}
              name={name as RootScreen}
              component={component}
              options={options}
            />
          );
        })}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
