import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useFonts } from 'expo-font';
import { COLORS } from '../constant/color';
import { StatusBar } from 'expo-status-bar';
import Ionicons from "react-native-vector-icons/Ionicons"
import MaterialIcons from "react-native-vector-icons/MaterialIcons"
import { ScrollView, TouchableHighlight } from 'react-native-gesture-handler';
import TransHistory from '../components/TransHistory';
import TrasanctionStats from '../components/TransactionStats';
import UpcomingBill from '../components/UpcomingBill';

const Wallet = ({ navigation }) => {
  const [transBtn, setTransBtn] = useState(true)
  const [billsBtn, setBillsBtn] = useState(false)
  let [fontsLoaded] = useFonts({
    InterBlack: require("../assets/Fonts/Inter-Black.ttf"),
    InterLight: require("../assets/Fonts/Inter-Light.ttf"),
  });

  const toggleBtnHandler = (activeIndex) => {
    if (activeIndex == "trans") {
      setTransBtn(true)
      setBillsBtn(false)
    } else if (activeIndex == "bills") {
      setTransBtn(false)
      setBillsBtn(true)
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />
      <View style={styles.headerWrapper}>
        <View style={styles.header}>
          <TouchableOpacity>
            <MaterialIcons name="arrow-back-ios" size={22} color={COLORS.white} />
          </TouchableOpacity>
          <View style={styles.headerTextWrapper}>
            {fontsLoaded &&
              <Text style={[styles.headerText, { fontSize: 20, fontWeight: "bold", fontFamily: "InterBlack", }]}>Wallet</Text>
            }
          </View>
          <TouchableOpacity>
            <Ionicons name="ios-notifications-outline" size={28} color={COLORS.white} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.contentContainer}>
        {fontsLoaded &&
          <View style={[styles.walletHeader, { paddingVertical: 20 }]}>
            <View style={[styles.walletHeader]}>
              <Text style={{ color: COLORS.secDark, fontSize: 18 }}>Total Balance</Text>
              <Text style={{ color: COLORS.dark, fontSize: 32, fontWeight: "700", marginTop: 10 }}>$2,548.00</Text>
            </View>
          </View>
        }
        <View style={styles.walletFunc}>
          <TouchableOpacity activeOpacity={0.6} style={styles.walletFuncWrapper}>
            <View style={styles.walletFuncIcon}>
              <Ionicons name="add" size={30} color={COLORS.primary} />
            </View>
            <Text style={styles.walletFuncText}>Add</Text>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.6} style={styles.walletFuncWrapper}>
            <View style={styles.walletFuncIcon}>
              <Ionicons name="qr-code-outline" size={22} color={COLORS.primary} />
            </View>
            <Text style={styles.walletFuncText}>Pay</Text>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.6} style={styles.walletFuncWrapper}>
            <View style={styles.walletFuncIcon}>
              <Ionicons name="md-send-sharp" size={22} color={COLORS.primary} />
            </View>
            <Text style={styles.walletFuncText}>Send</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.walletTitleHeader}>
          <TouchableOpacity activeOpacity={0.9} style={{ ...styles.walletTitleText, backgroundColor: transBtn ? COLORS.white : COLORS.secWhite, borderRadius: 50, }} onPress={() => toggleBtnHandler("trans")}>
            <Text style={{ fontSize: 14 }}>Transactions</Text>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.9} style={{ ...styles.walletTitleText, backgroundColor: billsBtn ? COLORS.white : COLORS.secWhite, borderRadius: 50, }} onPress={() => toggleBtnHandler("bills")}>
            <Text style={{ fontSize: 14 }}>Upcoming Bills</Text>
          </TouchableOpacity>
        </View>
        <ScrollView showsVerticalScrollIndicator={false}
          style={{ paddingTop: 10 }}
        >
          {transBtn ?

            <>
              <TrasanctionStats navigation={navigation} />
              <TrasanctionStats navigation={navigation} />
            </> :
            <>
              <UpcomingBill navigation={navigation}/>
            </>
          }
        </ScrollView>
      </View>
    </SafeAreaView>
  )
}

export default Wallet

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
  walletFunc: {
    flexDirection: "row",
    justifyContent: "center"
  },
  walletFuncIcon: {
    justifyContent: "center",
    alignItems: "center",
    width: 50,
    height: 50,
    borderWidth: 1,
    borderColor: COLORS.primary,
    borderRadius: 25,
    marginHorizontal: 10
  },
  walletFuncWrapper: {
    justifyContent: "center",
    alignItems: "center",
  },
  walletFuncText: {
    marginTop: 7,
    fontSize: 15,
    fontWeight: "500"
  },
  walletTitleHeader: {
    backgroundColor: COLORS.secWhite,
    marginTop: 20,
    marginBottom: 10,
    padding: 5,
    flexDirection: "row",
    borderRadius: 50,
  },
  walletTitleText: {
    flex: 1,
    paddingVertical: 10,
    borderRadius: 50,
    alignItems: "center",
  }
})