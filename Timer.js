import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import useCount from "./hooks/count";
function Timer() {
  const [time, setTime] = useState(0);
  const { fiveCount, load, countdown,truePaused,isPaused,loopstate,loopCount } = useCount();

  useEffect(() => {
    let interval;
    if (loopCount < 3) {
      if (isPaused) {
        fiveCount();
      }

      if (!isPaused) {
        interval = setInterval(() => {
          setTime((prevTime) => prevTime + 15);
          if (time >= 3000) {
            loopstate()
            setTime(0);
            truePaused();
          }
        }, 10);
      }
    }

    return () => clearInterval(interval);
  }, [loopCount, time, isPaused]);

  function formatTime() {
    const seconds = Math.floor(time / 1000);
    const milliseconds = time % 1000;
    return `${seconds}:${milliseconds}`;
  }

  const styles = StyleSheet.create({
    timer: {
      fontSize: 40,
      color: "#3D6DCC",
      fontWeight: "bold",
    },
    text: {
      color:'#3D6DCC',
      fontSize:40,
    }
  });

  return (
    <View>
      <Text style={styles.text}>Round:{loopCount}</Text>
      <Text style={styles.text}>{countdown}</Text>
      <Text style={styles.timer}>{formatTime()}</Text>
    </View>
  );
}

export default Timer;
