import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { COLORS } from '../constant/color'
import { useFonts } from 'expo-font'
import { transaction } from '../Data/transactions'

const UpcomingBill = ({ navigation }) => {
  let [fontsLoaded] = useFonts({
    InterRegular: require("../assets/Fonts/Inter-Regular.ttf"),
  });
  return (
    <View>
      {transaction.map((item, i) => (
        <View activeOpacity={0.5} style={styles.transHistoryWrapper} key={i}
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
            <TouchableOpacity 
            onPress={()=> navigation.navigate("BillDetails", item)}
            style={styles.payBtn}>
              <Text style={{ color: COLORS.btnPrimary }}>Pay</Text>
            </TouchableOpacity>
          </View>
        </View>
      ))}
    </View>
  )
}

export default UpcomingBill

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
  },
  payBtn: {
    backgroundColor: "rgba(66, 150, 144, .3)",
    paddingHorizontal: 30,
    paddingVertical: 5,
    borderRadius: 50
  }
})