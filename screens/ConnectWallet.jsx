import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import CheckBox from "expo-checkbox";
import { SafeAreaView } from 'react-native-safe-area-context'
import { useFonts } from 'expo-font';
import { COLORS } from '../constant/color';
import { StatusBar } from 'expo-status-bar';
import Ionicons from "react-native-vector-icons/Ionicons"
import MaterialIcons from "react-native-vector-icons/MaterialIcons"
import { FontAwesome5 } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';


const Analytics = () => {
  const [card, setCard] = useState(true)
  const [account, setAccount] = useState(false)
  const [debit, setDebit] = useState(false)
  const [paypal, setPaypal] = useState(false)
  const [deposit, setDeposit] = useState(false)

  let [fontsLoaded] = useFonts({
    InterBlack: require("../assets/Fonts/Inter-Black.ttf"),
    InterLight: require("../assets/Fonts/Inter-Light.ttf"),
  });

  const toggleBtnHandler = (activeIndex) => {
    if (activeIndex == "trans") {
      setCard(true)
      setAccount(false)
    } else if (activeIndex == "bills") {
      setCard(false)
      setAccount(true)
    }
  }


  function Cards() {
    return (
      <>
        <TouchableOpacity
          style={{
            ...styles.flex,
            padding: 10,
            backgroundColor: debit ? "rgba(66, 150, 144, .3)" : "white",
            borderRadius: 10
          }}>
          <View style={styles.paymentMethod}>
            <View style={styles.iconWrapper}>
              <Ionicons name="wallet" size={24} color={COLORS.btnPrimary} />
            </View>
            <Text style={styles.text}>Debit Card</Text>
          </View>
          <CheckBox
            disabled={false}
            value={debit}
            onValueChange={(newValue) => {
              setDebit(newValue)
              setPaypal(false)
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            ...styles.flex,
            padding: 10,
            backgroundColor: paypal ? "rgba(66, 150, 144, .3)" : "white",
            borderRadius: 10,
            marginTop: 15
          }}
        >
          <View style={styles.paymentMethod}>
            <View style={styles.iconWrapper}>
              <FontAwesome5 name="paypal" size={24} color={COLORS.btnPrimary} />
            </View>
            <Text style={styles.text}>Paypal</Text>
          </View>
          <CheckBox
            disabled={false}
            value={paypal}
            onValueChange={(newValue) => {
              setPaypal(newValue)
              setDebit(false)
            }}
          />
        </TouchableOpacity>
      </>
    )
  }

  function Account() {
    return (
      <>
        <TouchableOpacity
          style={{
            ...styles.flex,
            padding: 10,
            backgroundColor: debit ? "rgba(66, 150, 144, .3)" : "white",
            borderRadius: 10
          }}>
          <View style={styles.paymentMethod}>
            <View style={styles.iconWrapper}>
              <FontAwesome name="bank" size={24} color={COLORS.btnPrimary} />
            </View>
            <View>
              <Text style={styles.text}>Bank Link</Text>
              <Text>Connect your bank account</Text>
              <Text>to deposit & fund</Text>
            </View>
          </View>
          <CheckBox
            disabled={false}
            value={debit}
            onValueChange={(newValue) => {
              setDebit(newValue)
              setPaypal(false)
              setDeposit(false)
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            ...styles.flex,
            padding: 10,
            backgroundColor: deposit ? "rgba(66, 150, 144, .3)" : "white",
            borderRadius: 10,
            marginTop: 15
          }}
        >
          <View style={styles.paymentMethod}>
            <View style={styles.iconWrapper}>
              <FontAwesome name="dollar" size={24} color={COLORS.btnPrimary} />
            </View>
            <View>
              <Text style={styles.text}>Microdeposits</Text>
              <Text>Connect bank in 5 - 7 days</Text>
            </View>
          </View>
          <CheckBox
            disabled={false}
            value={deposit}
            onValueChange={(newValue) => {
              setDeposit(newValue)
              setPaypal(false)
              setDebit(false)
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            ...styles.flex,
            padding: 10,
            backgroundColor: paypal ? "rgba(66, 150, 144, .3)" : "white",
            borderRadius: 10,
            marginTop: 15
          }}
        >
          <View style={styles.paymentMethod}>
            <View style={styles.iconWrapper}>
              <FontAwesome5 name="paypal" size={24} color={COLORS.btnPrimary} />
            </View>
            <View>
              <Text style={styles.text}>Paypal</Text>
              <Text>Connect your paypal account</Text>
            </View>
          </View>
          <CheckBox
            disabled={false}
            value={paypal}
            onValueChange={(newValue) => {
              setPaypal(newValue)
              setDeposit(false)
              setDebit(false)
            }}
          />
        </TouchableOpacity>
      </>
    )
  }
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
              <Text style={[styles.headerText, { fontSize: 20, fontWeight: "bold", fontFamily: "InterBlack", }]}>Connect Wallet</Text>
            }
          </View>
          <TouchableOpacity>
            <Ionicons name="ios-notifications-outline" size={28} color={COLORS.white} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.contentContainer}>
        {fontsLoaded &&
          <>
            <View style={styles.walletTitleHeader}>
              <TouchableOpacity activeOpacity={0.9} style={{ ...styles.walletTitleText, backgroundColor: card ? COLORS.white : COLORS.secWhite, borderRadius: 50, }} onPress={() => toggleBtnHandler("trans")}>
                <Text style={{ fontSize: 14 }}>Cards</Text>
              </TouchableOpacity>
              <TouchableOpacity activeOpacity={0.9} style={{ ...styles.walletTitleText, backgroundColor: account ? COLORS.white : COLORS.secWhite, borderRadius: 50, }} onPress={() => toggleBtnHandler("bills")}>
                <Text style={{ fontSize: 14 }}>Accounts</Text>
              </TouchableOpacity>
            </View>

            <View style={{
              flex: 1,
              justifyContent: "space-between",
            }}>
              <View>
                {card ? <Cards /> : <Account />}
              </View>
              <TouchableOpacity style={styles.btn}>
                <Text style={{ color: COLORS.primary, fontSize: 18, fontWeight: "700" }}>NEXT</Text>
              </TouchableOpacity>
            </View>
          </>
        }
      </View>
    </SafeAreaView>
  )
}

export default Analytics

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
  },
  flex: {
    paddingVertical: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
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
  },
  paymentMethod: {
    flexDirection: "row",
    alignItems: "center"
  },
  iconWrapper: {
    marginRight: 10,
    padding: 10,
    borderRadius: 50,
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.white,
  }
})