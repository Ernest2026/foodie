import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather } from "@expo/vector-icons";
import { colors } from "../../infrastructure/theme/colors";
import { HomeScreen } from "../../features/home/screens/home.screen";
import { RecipeScreen } from "../../features/recipie/screens/recipe.screen";

const Tab = createBottomTabNavigator();

const TAB_ICON = {
  Home: "home",
  Recipe: "list",
  Settings: "settings",
};

const createScreenOptions = ({ route }) => {
  const iconName = TAB_ICON[route.name];
  return {
    tabBarIcon: ({ size, color }) => (
      <Feather name={iconName} size={size} color={color} />
    ),
    headerShown: false,
    tabBarStyle: [
      {
        height: 60,
        paddingBottom: 5,
        paddingTop: 5,
      },
      null,
    ],
    tabBarLabelStyle: {
      fontSize: 15,
    },
  };
};

const Setting = () => {
  return null;
};
const List = () => {
  return null;
};

export const HomeNavigator = () => (
  <Tab.Navigator
    initialRouteName="Recipe"
    screenOptions={createScreenOptions}
    tabBarOptions={{
      activeTintColor: colors.brand.primary,
      inactiveTintColor: colors.brand.muted,
    }}
  >
    <Tab.Screen name="Home" component={HomeScreen} />
    <Tab.Screen name="Recipe" component={RecipeScreen} />
    <Tab.Screen name="Settings" component={List} />
  </Tab.Navigator>
);