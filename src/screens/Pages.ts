import Screen from "@enums/Screen";
import INavigation from "@interfaces/INavigation";
import AwardsScreen from "./AwardsScreen";
import HomeScreen from "./HomeScreen";
import ProfileScreen from "./ProfileScreen";
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
  ProfileScreen: {
    name: "ProfileScreen",
    component: ProfileScreen,
  },
};
export default Screens;