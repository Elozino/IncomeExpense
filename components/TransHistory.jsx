import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { COLORS } from '../constant/color'
import { useFonts } from 'expo-font'
import { transaction } from '../Data/transactions'

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
      {transaction.map((item, i) => (
        <View style={styles.transHistoryWrapper} key={i}>
          <View style={styles.transHistory}>
            <View style={styles.transHistoryLeft}>
              <View style={styles.transHistoryLogo}>
                <Text style={{ fontSize: 20 }}>UP</Text>
              </View>
              <View>
                <Text style={styles.transHistoryName}>{item.name}</Text>
                <Text style={styles.transHistoryTime}>{item.time}</Text>
              </View>
            </View>
            <View>
              <Text style={[styles.transHistoryAmount, { color: item.type === "income" ? COLORS.income : COLORS.expense }]}>{item.amount}</Text>
            </View>
          </View>
        </View>
      ))}
    </View>
  )
}

export default TransHistory

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    marginVertical: 20,
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
    fontSize: 17,
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