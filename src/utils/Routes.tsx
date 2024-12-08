import React from "react";
import Screen from "@enums/Screen";
import { NavigationContainer } from "@react-navigation/native";
import Screens from "@screens/Pages";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import type INavigation from "@interfaces/INavigation";

const Stack = createNativeStackNavigator<INavigation.IRootStack>();

function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={Screen.HomeScreen}>
        {Object.values(Screens).map((screen) => {
          const { name, component, options } = screen;
          return (
            <Stack.Screen
              key={`screen-${name}`}
              name={name as Screen}
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
