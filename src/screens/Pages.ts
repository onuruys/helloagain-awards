import RootScreen from "@enums/RootScreen";
import type INavigation from "@interfaces/INavigation";
import AwardsScreen from "./AwardsScreen";
import HomeScreen from "./HomeScreen";
import CollectedAwardsScreen from "./CollectedAwardsScreen";
import BottomTabs from "@components/BottomTabs";
import TabScreen from "@enums/TabScreen";
import HeaderAwards from "@components/HeaderAwards";
import HeaderHome from "@components/HeaderHome";
import type { BottomTabNavigationOptions } from "@react-navigation/bottom-tabs";
import en from "@utils/en";

export type IStackPagesDict = {
  [RootScreen.HomeScreen]: {
    name: RootScreen.HomeScreen;
    component: React.FC<INavigation.IHomeScreenProps>;
    options: {
      title: string;
      headerShown: boolean;
    };
  };
  [RootScreen.BottomTabs]: {
    name: RootScreen.BottomTabs;
    component: React.FC<INavigation.IHomeScreenProps>;
    options: {
      title: string;
      headerShown: boolean;
    };
  };
};

export type ITabPagesDict = {
  [TabScreen.AwardsScreen]: {
    name: TabScreen.AwardsScreen;
    component: React.FC<INavigation.IAwardsScreenProps>;
    options: BottomTabNavigationOptions;
  };
  [TabScreen.CollectedAwardsScreen]: {
    name: TabScreen.CollectedAwardsScreen;
    component: React.FC<INavigation.ICollectedAwardsScreenProps>;
    options: BottomTabNavigationOptions;
  };
};

const StackScreens: IStackPagesDict = {
  HomeScreen: {
    name: RootScreen.HomeScreen,
    component: HomeScreen,
    options: {
      title: en.home,
      headerShown: false,
    },
  },
  BottomTabs: {
    name: RootScreen.BottomTabs,
    component: BottomTabs,
    options: {
      headerShown: false,
      title: en.bounties,
    },
  },
};

const TabScreens: ITabPagesDict = {
  AwardsScreen: {
    name: TabScreen.AwardsScreen,
    component: AwardsScreen,
    options: {
      headerShown: true,
      headerRight: HeaderHome,
      title: en.bounties,
    },
  },
  CollectedAwardsScreen: {
    name: TabScreen.CollectedAwardsScreen,
    component: CollectedAwardsScreen,
    options: {
      title: en.awards,
      headerShown: true,
      headerRight: HeaderAwards,
    },
  },
};

export { StackScreens, TabScreens };
