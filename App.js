import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import { getFonts } from "./assets/Fonts/fonts.js";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home, Wallet, Profile, Analytics, Welcome, TransactionDetails } from "./screens";

import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Entypo from "react-native-vector-icons/Entypo";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { COLORS } from "./constant/color.js";

const Stack = createStackNavigator();
const BottomTab = createBottomTabNavigator();

const BottomTabScreen = () => {
  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      screenOptions={{
        header: () => null,
        showLabel: false,
        style: {
          backgroundColor: "green",
          elevation: 10,
        },
      }}
    >
      <BottomTab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <MaterialCommunityIcons
              name="home"
              color={focused ? COLORS.primary : color}
              size={32}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name="Analytics"
        component={Analytics}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <Entypo
              name="bar-graph"
              color={focused ? COLORS.primary : color}
              size={26}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name="Wallet"
        component={Wallet}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <FontAwesome5
              name="wallet"
              color={focused ? COLORS.primary : color}
              size={24}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <MaterialIcons
              name="person"
              color={focused ? COLORS.primary : color}
              size={32}
            />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
};

export default function App() {
  useEffect(() => {
    // To load the font on every render of your project
    getFonts();
  }, []);

  return (
    <NavigationContainer>
      <StatusBar style="auto" />

      <Stack.Navigator screenOptions={{ header: () => null }}>
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="BottomTabScreen" component={BottomTabScreen} />
        <Stack.Screen name="TransactionDetails" component={TransactionDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
