import type Screen from "@enums/Screen";
import type {
  NativeStackNavigationOptions,
  NativeStackScreenProps,
} from "@react-navigation/native-stack";
declare namespace INavigation {
  export type IRootStack = {
    HomeScreen?: undefined;
    AwardsScreen?: undefined;
    CollectedAwardsScreen?: undefined;
  };
  export interface IPage {
    name: keyof typeof Screen;
    component: React.ComponentType<any>;
    translate_key?: string;
    options?: NativeStackNavigationOptions;
  }
  interface INavigationPage {
    name: keyof typeof Screen;
    params?: IRootStack[keyof IRootStack];
  }
  type IHomeScreenProps = NativeStackScreenProps<
    INavigation.IRootStack,
    Screen.HomeScreen
  >;
  type IAwardsScreenProps = NativeStackScreenProps<
    INavigation.IRootStack,
    Screen.AwardsScreen
  >;
  type ICollectedAwardsScreenProps = NativeStackScreenProps<
    INavigation.IRootStack,
    Screen.CollectedAwardsScreen
  >;
}
export default INavigation;
