import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useFonts } from 'expo-font';
import { COLORS } from '../constant/color';
import { StatusBar } from 'expo-status-bar';
import Ionicons from "react-native-vector-icons/Ionicons"
import MaterialIcons from "react-native-vector-icons/MaterialIcons"

const BillPayment = ({ navigation, route }) => {
  const data = route.params
  console.log(data);
  let [fontsLoaded] = useFonts({
    InterBlack: require("../assets/Fonts/Inter-Black.ttf"),
    InterLight: require("../assets/Fonts/Inter-Light.ttf"),
  });
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />
      <View style={styles.headerWrapper}>
        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
          >
            <MaterialIcons name="arrow-back-ios" size={28} color={COLORS.white} />
          </TouchableOpacity>
          <View style={styles.headerTextWrapper}>
            {fontsLoaded &&
              <Text style={[styles.headerText, { fontSize: 20, fontWeight: "bold", fontFamily: "InterBlack", }]}>Bill Payment</Text>
            }
          </View>
          <TouchableOpacity>
            <Ionicons name="ios-notifications-outline" size={28} color={COLORS.white} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.contentContainer}>
        {fontsLoaded &&
          <View style={[{ paddingVertical: 20 }]}>
            <View style={{ flexDirection: "row"}}>
              <Image
                source={data.image}
                resizeMode="contain"
                style={{ width: 60, height: 70, borderRadius: 50 }}
              />
              <View style={{ marginLeft: 20, paddingVertical: 10, justifyContent: 'space-between', }}>
                <Text style={{ color: COLORS.dark, fontWeight: "bold", fontSize: 18, textAlign: "center" }}>
                  {data.name}
                </Text>
                <Text style={{ color: COLORS.dark, fontSize: 14, }}>
                  {data.time}
                </Text>
              </View>
            </View>
            <View style={styles.flex}>
              <Text style={{ ...styles.text, color: COLORS.secDark }}>Price</Text>
              <Text style={styles.text}>$11.99</Text>
            </View>
            <View style={styles.flex}>
              <Text style={{ ...styles.text, color: COLORS.secDark }}>Fee</Text>
              <Text style={styles.text}>$ 1.99</Text>
            </View>
            <View style={{ backgroundColor: COLORS.secWhite, height: 2 }} />
            <View style={styles.flex}>
              <Text style={{ ...styles.text, color: COLORS.secDark }}>Total</Text>
              <Text style={styles.text}>$ 13.99..</Text>
            </View>
          </View>
        }
        <TouchableOpacity style={styles.btn}>
          <Text style={{ color: COLORS.white, fontSize: 18, fontWeight: "700" }}>Pay Now</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default BillPayment

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.primary,
    flex: 1,
  },
  headerWrapper: {
    flex: .15,
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
    flex: .85,
    backgroundColor: COLORS.white,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
    position: "relative",
    justifyContent: "space-between"
  },
  flex: {
    paddingVertical: 10,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  text: {
    fontWeight: "700",
    fontSize: 16
  },
  btn: {
    marginVertical: 20,
    elevation: 10,
    backgroundColor: COLORS.primary,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    borderRadius: 50,
  }
})