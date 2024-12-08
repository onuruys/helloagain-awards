import RootScreen from "@enums/RootScreen";
import type INavigation from "@interfaces/INavigation";
import AwardsScreen from "./AwardsScreen";
import HomeScreen from "./HomeScreen";
import CollectedAwardsScreen from "./CollectedAwardsScreen";
import BottomTabs from "@components/BottomTabs";
import TabScreen from "@enums/TabScreen";

export type IStackPagesDict = {
  [RootScreen.HomeScreen]: {
    name: RootScreen.HomeScreen;
    component: React.FC<INavigation.IHomeScreenProps>;
    translate_key: string;
    options: {
      headerShown: boolean;
    };
  };
  [RootScreen.BottomTabs]: {
    name: RootScreen.BottomTabs;
    component: React.FC<INavigation.IHomeScreenProps>;
    translate_key: string;
    options: {
      headerShown: boolean;
    };
  };
};

export type ITabPagesDict = {
  [TabScreen.AwardsScreen]: {
    name: TabScreen.AwardsScreen;
    component: React.FC<INavigation.IAwardsScreenProps>;
    translate_key: string;
    options: {
      headerShown: boolean;
    };
  };
  [TabScreen.CollectedAwardsScreen]: {
    name: TabScreen.CollectedAwardsScreen;
    component: React.FC<INavigation.ICollectedAwardsScreenProps>;
    translate_key: string;
    options: {
      headerShown: boolean;
    };
  };
};

const StackScreens: IStackPagesDict = {
  HomeScreen: {
    name: RootScreen.HomeScreen,
    component: HomeScreen,
    translate_key: "home",
    options: {
      headerShown: false,
    },
  },
  BottomTabs: {
    name: RootScreen.BottomTabs,
    component: BottomTabs,
    translate_key: "awards",
    options: {
      headerShown: false,
    },
  },
};

const TabScreens: ITabPagesDict = {
  AwardsScreen: {
    name: TabScreen.AwardsScreen,
    component: AwardsScreen,
    translate_key: "awards",
    options: {
      // headerShown: false,
    },
  },
  CollectedAwardsScreen: {
    name: TabScreen.CollectedAwardsScreen,
    component: CollectedAwardsScreen,
    translate_key: "collected_awards",
    options: {
      headerShown: false,
    },
  },
};

export { StackScreens, TabScreens };
