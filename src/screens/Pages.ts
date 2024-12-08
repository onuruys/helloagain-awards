import Screen from "@enums/Screen";
import INavigation from "@interfaces/INavigation";
import AwardsScreen from "./AwardsScreen";
import HomeScreen from "./HomeScreen";
import CollectedAwardsScreen from "./CollectedAwardsScreen";
export type IPagesDict = {
  [key in keyof typeof Screen]: INavigation.IPage;
};
const Screens: IPagesDict = {
  HomeScreen: {
    name: "HomeScreen",
    component: HomeScreen,
  },
  AwardsScreen: {
    name: "AwardsScreen",
    component: AwardsScreen,
  },
  CollectedAwardsScreen: {
    name: "CollectedAwardsScreen",
    component: CollectedAwardsScreen,
  },
};
export default Screens;