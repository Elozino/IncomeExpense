import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { COLORS } from "../constant/color";

export const profile = [
  {
    icon: <Ionicons name="person" size={28} color={COLORS.secDark}/>,
    name: "Account Info",
    navigateTo: "",
  },
  {
    icon: <MaterialIcons name="people" size={30} color={COLORS.secDark}/>,
    name: "Personal Profile",
    navigateTo: "",
  },
  {
    icon: <MaterialIcons name="message" size={28} color={COLORS.secDark}/>,
    name: "Message center",
    navigateTo: "",
  },
  {
    icon: <MaterialIcons name="security" size={28} color={COLORS.secDark}/>,
    name: "Login and security",
    navigateTo: "",
  },
  {
    icon: <MaterialIcons name="info" size={28} color={COLORS.secDark}/>,
    name: "Data and privacy",
    navigateTo: "",
  },
];
