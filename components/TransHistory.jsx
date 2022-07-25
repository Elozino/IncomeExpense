import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { COLORS } from '../constant/color'
import { useFonts } from 'expo-font'
import TransactionStats from './TransactionStats'

const TransHistory = () => {
  let [fontsLoaded] = useFonts({
    InterRegular: require("../assets/Fonts/Inter-Regular.ttf"),
  });

  return (
    <View style={styles.container}>
      <View style={styles.transHeader}>
        <Text style={fontsLoaded && styles.transHeaderText}>Transactions History</Text>
        <TouchableOpacity>
          <Text style={fontsLoaded && styles.transHeaderTextBtn}>See all</Text>
        </TouchableOpacity>
      </View>
      <TransactionStats />
    </View>
  )
}

export default TransHistory

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    marginVertical: 20,
    marginBottom: 10,
    position: "relative",
    top: 50,
    zIndex: 10,
  },
  transHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  transHeaderText: {
    color: COLORS.dark,
    fontSize: 20,
    fontFamily: "InterRegular",
    fontWeight: "700",
  },
  transHeaderTextBtn: {
    color: COLORS.secDark,
    fontFamily: "InterRegular",
  },
  transHistory: {
    flexDirection: 'row',
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
  },
  transHistoryLeft: {
    flexDirection: 'row',
    alignItems: "center",
  },
  transHistoryLogo: {
    width: 50,
    height: 50,
    backgroundColor: COLORS.secWhite,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 15,
  },
  transHistoryName: {
    fontSize: 16,
    fontFamily: "InterRegular",
    fontWeight: "700",
  },
  transHistoryAmount: {
    fontSize: 18,
    fontFamily: "InterRegular",
    fontWeight: "700",
  }
})