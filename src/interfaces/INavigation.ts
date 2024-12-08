import type RootScreen from "@enums/RootScreen";
import type TabScreen from "@enums/TabScreen";
import type { BottomTabScreenProps } from "@react-navigation/bottom-tabs";

declare namespace INavigation {
  export type ITabStack = {
    AwardsScreen?: undefined;
    CollectedAwardsScreen?: undefined;
  };

  export type IRootStack = {
    HomeScreen: undefined;
    BottomTabs: ITabStack;
  };

  type IHomeScreenProps = BottomTabScreenProps<
    INavigation.IRootStack,
    RootScreen.HomeScreen
  >;

  type IAwardsScreenProps = BottomTabScreenProps<
    INavigation.ITabStack,
    TabScreen.AwardsScreen
  >;

  type ICollectedAwardsScreenProps = BottomTabScreenProps<
    INavigation.ITabStack,
    TabScreen.CollectedAwardsScreen
  >;
}

export default INavigation;
