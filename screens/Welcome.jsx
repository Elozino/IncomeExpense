import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable'
import { COLORS } from '../constant/color'

const Welcome = ({ navigation }) => {

  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/image/Man.svg")}
        resizeMode="contain"
        style={styles.image}
      />
      <View style={{ alignItems: "center" }}>
        <Text style={styles.welcomeText}>Spend Smarter</Text>
        <Text style={styles.welcomeText}>Save More</Text>
      </View>
      <TouchableOpacity
        activeOpacity={0.8}
        style={styles.getStartedBtn}
        onPress={() => navigation.navigate("BottomTabScreen")}
      >
        <Text style={styles.getStartedBtnText}>Get Started</Text>
      </TouchableOpacity>
      <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
        <Text>Already Have Account? </Text>
        <Pressable>
          <Text style={{color: COLORS.btnPrimary}}>Log In</Text>
        </Pressable>
      </View>
    </View>
  )
}

export default Welcome

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20
  },
  image: {
    width: 100,
    // height: 500
  },
  welcomeText: {
    fontSize: 32,
    fontWeight: "bold",
    color: COLORS.btnPrimary,
  },
  getStartedBtn: {
    backgroundColor: COLORS.btnPrimary,
    borderRadius: 50,
    elevation: 10,
    alignItems: "center",
    marginVertical: 20,
  },
  getStartedBtnText: {
    color: COLORS.white,
    padding: 20,
    fontSize: 20,
    fontWeight: "bold"
  }
})