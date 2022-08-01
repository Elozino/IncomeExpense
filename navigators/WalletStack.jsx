import React from 'react'
import { createStackNavigator } from "@react-navigation/stack";
import { BillDetails, BillPayment, ConnectWallet, TransactionDetails, Wallet } from '../screens';
import { StatusBar } from 'expo-status-bar';

const Stack = createStackNavigator();

const WalletStack = () => {
  return (
    <>
      <StatusBar style="auto" />
      <Stack.Navigator screenOptions={{ header: () => null }}>
        <Stack.Screen name="Wallet" component={Wallet} />
        <Stack.Screen name="TransactionDetails" component={TransactionDetails} />
        <Stack.Screen name="BillDetails" component={BillDetails} />
        <Stack.Screen name="BillPayment" component={BillPayment} />
        <Stack.Screen name="ConnectWallet" component={ConnectWallet} />
      </Stack.Navigator>
    </>
  )
}

export default WalletStack