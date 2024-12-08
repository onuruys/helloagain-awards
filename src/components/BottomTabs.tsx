import React from "react";

import type INavigation from "../interfaces/INavigation";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import TabScreen from "@enums/TabScreen";
import { TabScreens } from "@screens/Pages";

const Tab = createBottomTabNavigator<INavigation.ITabStack>();

function BottomTabs() {
  return (
    <Tab.Navigator initialRouteName={TabScreen.AwardsScreen}>
      {Object.values(TabScreens).map((screen) => {
        const { name, component, options } = screen;
        return (
          <Tab.Screen
            key={`screen-${name}`}
            name={name as TabScreen}
            // @ts-ignore
            component={component}
            options={options}
          />
        );
      })}
    </Tab.Navigator>
  );
}

export default BottomTabs;
