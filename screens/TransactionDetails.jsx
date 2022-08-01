import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useFonts } from 'expo-font';
import { COLORS } from '../constant/color';
import { StatusBar } from 'expo-status-bar';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import MaterialIcons from "react-native-vector-icons/MaterialIcons"

const TransactionDetails = ({ navigation, route }) => {
  const data = route.params

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
              <Text style={[styles.headerText, { fontSize: 20, fontWeight: "bold", fontFamily: "InterBlack", }]}>Transaction Details</Text>
            }
          </View>
          <TouchableOpacity>
            <MaterialCommunityIcons name="dots-horizontal" size={28} color={COLORS.white} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.contentContainer}>
        <View style={styles.center}>
          <Image
            source={data.image }
            style={styles.image}
          />
          <View style={{ backgroundColor: data.type == "income" ? COLORS.income : COLORS.expense, paddingHorizontal: 15, paddingVertical: 3, borderRadius: 50 }}>
            <Text style={{ textTransform: "capitalize", fontSize: 16, color: "white" }}>{data.type}</Text>
          </View>
        </View>
        {fontsLoaded &&
          <View style={{ marginTop: 20, flexDirection: "row", justifyContent: "space-between" }}>
            <Text style={{ fontSize: 18, fontWeight: "700" }}>Transaction details</Text>
            <MaterialIcons name="keyboard-arrow-down" size={24} color="black" />
          </View>
        }
        <View>
          <ScrollView>
            <View style={styles.flex}>
              <Text style={{ ...styles.text, color: COLORS.secDark }}>Status</Text>
              <Text style={{ ...styles.text, textTransform: "capitalize", color: data.type == "income" ? COLORS.income : COLORS.expense }}>{data.type}</Text>
            </View>
            <View style={styles.flex}>
              <Text style={{ ...styles.text, color: COLORS.secDark }}>To</Text>
              <Text style={{ ...styles.text, color: COLORS.dark }}>{data.name}</Text>
            </View>
            <View style={styles.flex}>
              <Text style={{ ...styles.text, color: COLORS.secDark }}>Time</Text>
              <Text style={styles.text}>04:30PM</Text>
            </View>
            <View style={styles.flex}>
              <Text style={{ ...styles.text, color: COLORS.secDark }}>Date</Text>
              <Text style={styles.text}>Feb 29, 2022</Text>
            </View>
            <View style={{ backgroundColor: COLORS.secWhite, height: 2 }} />
            <View style={styles.flex}>
              <Text style={{ ...styles.text, color: COLORS.secDark }}>Spending</Text>
              <Text style={styles.text}>{data.amount}</Text>
            </View>
            <View style={styles.flex}>
              <Text style={{ ...styles.text, color: COLORS.secDark }}>Fee</Text>
              <Text style={styles.text}></Text>
            </View>
            <View style={{ backgroundColor: COLORS.secWhite, height: 2 }} />
            <View style={styles.flex}>
              <Text style={{ ...styles.text, color: COLORS.secDark }}>Total</Text>
              <Text style={styles.text}></Text>
            </View>
            <TouchableOpacity style={styles.btn}>
              <Text style={{ color: COLORS.primary, fontSize: 18, fontWeight: "700" }}>Download Receipt</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default TransactionDetails

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
  },
  walletHeader: {
    alignItems: "center"
  },
  center: {
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 90,
    height: 80,
    borderRadius: 25,
    resizeMode: "contain",
    marginBottom: 10
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
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    padding: 15,
    borderRadius: 50,
    borderColor: COLORS.primary
  }

})