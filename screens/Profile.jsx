import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import Ionicons from "react-native-vector-icons/Ionicons"
import MaterialIcons from "react-native-vector-icons/MaterialIcons"
import { COLORS } from '../constant/color';

const Profile = () => {
  let [fontsLoaded] = useFonts({
    InterBlack: require("../assets/Fonts/Inter-Black.ttf"),
    InterLight: require("../assets/Fonts/Inter-Light.ttf"),
  });

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />
      <View style={styles.headerWrapper}>
        <View style={styles.header}>
          <TouchableOpacity>
            <MaterialIcons name="arrow-back-ios" size={28} color={COLORS.white} />
          </TouchableOpacity>
          <View style={styles.headerTextWrapper}>
            {fontsLoaded &&
              <Text style={[styles.headerText, { fontSize: 20, fontWeight: "bold", fontFamily: "InterBlack", }]}>Profile</Text>
            }
          </View>
          <TouchableOpacity>
            <Ionicons name="ios-notifications-outline" size={28} color={COLORS.white} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.contentContainer}>
        <View style={styles.profileCard}>
          <View style={styles.profileImgWrapper}>
            <Image
              source={require("../assets/image/image11.png")}
              resizeMode="contain"
              style={styles.profileImage}
            />
          </View>
          {fontsLoaded &&
            <Text>Enjelin Morgeana</Text>
          }
          <Text></Text>
          <Text>@enjelin_morgeana</Text>
        </View>
        <Text>Profile</Text>
        <View style={styles.profileNavContainer}>

        </View>
      </View>
    </SafeAreaView>
  )
}

export default Profile

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.primary,
    flex: 1,
  },
  headerWrapper: {
    flex: .3,
  },
  header: {
    paddingHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: COLORS.primary,
  },
  headerText: {
    color: COLORS.white,
  },
  contentContainer: {
    flex: .7,
    backgroundColor: COLORS.white,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
    position: "relative",
  },
  profileCard: {
    justifyContent: "center",
    alignItems: "center",
    width: '100%',
    position: "absolute",
    top: -50,
  },
  profileImage: {
    borderRadius: 50,
    width: 100,
    height: 100,
  }
})