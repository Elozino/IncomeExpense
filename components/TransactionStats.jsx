import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { COLORS } from '../constant/color'
import { useFonts } from 'expo-font'
import { transaction } from '../Data/transactions'

const TransactionStats = ({ navigation }) => {
  let [fontsLoaded] = useFonts({
    InterRegular: require("../assets/Fonts/Inter-Regular.ttf"),
  });
  return (
    <View>
      {transaction.map((item, i) => (
        <TouchableOpacity activeOpacity={0.5} style={styles.transHistoryWrapper} key={i}
          // onPress={() => navigation.navigate("TransactionDetails")}
        >
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
        </TouchableOpacity>
      ))}
    </View>
  )
}

export default TransactionStats

const styles = StyleSheet.create({
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