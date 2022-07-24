import { StyleSheet, Text, View, TouchableOpacity, Image, FlatList, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView,  } from 'react-native-safe-area-context'
import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import Ionicons from "react-native-vector-icons/Ionicons"
import MaterialIcons from "react-native-vector-icons/MaterialIcons"
import { COLORS } from '../constant/color';
import { profile } from '../Data/profile';


// small component
const ProfileBtn = ({ keyName }) => {
  return (
    <TouchableOpacity style={styles.profileBtn}>
      <View>
        <Text>Icon</Text>
      </View>
      <View style={{ marginLeft: 20 }}>
        <Text style={{ fontWeight: "700", fontSize: 20, fontFamily: "InterLight", }}>{keyName.name}</Text>
      </View>
    </TouchableOpacity>
  )
}


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
            <View style={{ marginTop: 10, alignItems: "center" }}>
              <Text style={{ fontWeight: "bold", fontSize: 26 }}>Enjelin Morgeana</Text>
              <Text style={{ color: COLORS.primary, fontWeight: "700", fontSize: 18 }}>@enjelin_morgeana</Text>
            </View>
          }
        </View>
        <View style={styles.profileNavContainer}>
          <TouchableOpacity style={styles.profileBtnInvite}>
            <View>
              <Text>Icon</Text>
            </View>
            <View style={{ marginLeft: 20 }}>
              <Text style={{ fontWeight: "700", fontSize: 20, fontFamily: "InterLight", }}>Invite Friends</Text>
            </View>
          </TouchableOpacity>
          <FlatList
            data={profile}
            renderItem={({ item }) => <ProfileBtn keyName={item} />}
            keyExtractor={(_, i) => i}
            numColumns={1}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{
              // flex: 1,
              // backgroundColor: "red",
              marginVertical: 10,
            }}
          />
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
  },
  profileNavContainer: {
    position: "relative",
    top: 110,
    paddingHorizontal: 20,
  },
  profileBtnInvite: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 20,
    borderBottomColor: COLORS.secWhite,
    borderBottomWidth: 3
  },
  profileBtn: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 20,

  }
})