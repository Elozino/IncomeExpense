import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useFonts } from 'expo-font'
import { COLORS } from '../constant/color'
import { StatusBar } from 'expo-status-bar'
import CardBalance from '../components/CardBalance'
import TransHistory from '../components/TransHistory'
import Ionicons from "react-native-vector-icons/Ionicons"
import { transImage } from '../Data/transactions'

const TransImage = ({ image }) => {
  return (
    <View>
      <Image source={image.img}
        resizeMode="contain"
        style={styles.profileImage}
      />
    </View>
  )
}

const Home = () => {
  let [fontsLoaded] = useFonts({
    InterBlack: require("../assets/Fonts/Inter-Black.ttf"),
    InterLight: require("../assets/Fonts/Inter-Light.ttf"),
  });
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />
      <View style={styles.headerWrapper}>
        <View style={styles.header}>
          <View style={styles.headerTextWrapper}>
            {fontsLoaded && <>
              <Text style={[styles.headerText, { fontWeight: "200" }]}>Good Afternoon,</Text>
              <Text style={[styles.headerText, { fontSize: 20, fontWeight: "bold", fontFamily: "InterBlack", }]}>Enjelin Morgeana</Text>
            </>
            }
          </View>
          <TouchableOpacity>
            <Ionicons name="ios-notifications-outline" size={28} color={COLORS.white} />
          </TouchableOpacity>
        </View>
      </View>
      <CardBalance />
      <View style={styles.contentContainer}>
        <TransHistory />
        <View style={styles.transList}>
          <View style={styles.transHeader}>
            <Text style={fontsLoaded && styles.transHeaderText}>Send Again</Text>
            <TouchableOpacity>
              <Text style={fontsLoaded && styles.transHeaderTextBtn}>See all</Text>
            </TouchableOpacity>
          </View>
          <View style={{
            display: "flex", justifyContent: "space-between",
          }}>
            <FlatList
              data={transImage}
              renderItem={({ item }) => <TransImage image={item} />}
              keyExtractor={(_, i) => i}
              showsVerticalScrollIndicator={false}
              horizontal={true}
              contentContainerStyle={{
                flex: 1,
                justifyContent: "space-between",
                marginVertical: 10,
              }}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.primary,
    flex: 1,
  },
  wrapper: {
    // flex: 1
    backgroundColor: COLORS.white,
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
  },
  transHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 5,
  },
  transHeaderText: {
    color: COLORS.dark,
    fontSize: 17,
    fontFamily: "InterRegular",
    fontWeight: "700",
  },
  transHeaderTextBtn: {
    color: COLORS.secDark,
    fontFamily: "InterRegular",
  },
  transList: {
    padding: 20,
    paddingVertical: 40,
  },
  profileImage: {
    borderRadius: 50,
    width: 50,
    height: 50,
  },
});