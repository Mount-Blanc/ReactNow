import { useState } from "react";
import {
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  Pressable,
  Button,
} from "react-native";
import CountDown from "./CountDown";
import useCount from "./hooks/count";

function Start() {
  const { fiveCount, loadSound, countdown, loopCount,Clear,clearTimer } = useCount();

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    button: {
      backgroundColor: "#3D6DCC",
      borderRadius: 200,
      borderWidth: 5,
      borderColor: "#1A4C9B",
      padding: 70,
      color: "white",
    },
    buttonText: {
      color: "#3D6DCC",
      fontSize: 18,
      fontWeight: "bold",
    },
  });

 
  return (
    <View style={styles.container}>
      {countdown != 5 ?(
        <TouchableOpacity
        onPress={fiveCount}>
        <CountDown style={styles.buttonText} countdown={countdown} />
    </TouchableOpacity>
        )  : (

        <TouchableOpacity
          title="Start"
          style={styles.button}
          onPress={fiveCount}
        ></TouchableOpacity>

      )}
    </View>
  );
}
export default Start;
