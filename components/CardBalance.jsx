import { StyleSheet, Text, View, Dimensions} from 'react-native'
import React, { useState } from 'react'
import { COLORS } from '../constant/color'
import { useFonts } from 'expo-font';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"


const width = Dimensions.get("screen").width - 40;

const CardBalance = () => {
  const [hideBalance, setHideBalance] = useState(false)
  let [fontsLoaded] = useFonts({
    InterRegular: require("../assets/Fonts/Inter-Regular.ttf"),
    InterMedium: require("../assets/Fonts/Inter-Medium.ttf"),
  });

  return (
    <View style={styles.container}>
      <View style={styles.cardHeader}>
        <Text style={fontsLoaded && styles.cardHeaderText}>Total Balance</Text>
        <MaterialCommunityIcons name="dots-horizontal" size={28} color={COLORS.white} onPress={() => setHideBalance(prev => !prev)} />
      </View>
      <Text style={styles.cardBalance}>{hideBalance ? "*****" : "$2,548.00"}</Text>
      <View style={styles.cardTransContainer}>
        <View style={styles.cardTransWrapper}>
          <Text style={styles.cardTransText}>Income</Text>
          <Text style={styles.cardTransText}>Expenses</Text>
        </View>
        <View style={styles.cardTransWrapper}>
          <Text style={styles.cardTransTextAmount}>$1,840.00</Text>
          <Text style={styles.cardTransTextAmount}>$284.00</Text>
        </View>
      </View>
    </View>
  )
}

export default CardBalance

const styles = StyleSheet.create({
  container: {
    margin: 20,
    padding: 20,
    borderRadius: 20,
    backgroundColor: COLORS.btnPrimary,
    borderRadius: 10,
    elevation: 10,
    shadowColor: COLORS.dark,
    position: "absolute",
    top: 110,
    zIndex: 10,
    width,
  },
  cardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 5,
  },
  cardHeaderText: {
    color: COLORS.white,
    fontSize: 16,
    fontFamily: "InterRegular",
  },
  cardBalance: {
    fontSize: 30,
    color: COLORS.white,
    fontFamily: "InterRegular",
    fontWeight: "bold"
  },
  cardTransContainer: {
    marginTop: 30,
  },
  cardTransWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  cardTransText: {
    color: COLORS.white,
    fontSize: 16,
  },
  cardTransTextAmount: {
    color: COLORS.white,
    fontSize: 18,
    fontFamily: "InterRegular",
    fontWeight: "bold"
  }
})