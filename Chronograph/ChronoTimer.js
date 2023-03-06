import { View, Text, Pressable,StyleSheet, Button } from "react-native";
import { useState, useRef,useEffect } from "react";
import useTimer from './Timer'


function ChronoTimer({ intervalValue, restValue }) {
  const [timerRunning, setTimerRunning] = useState(false);
  const [sound, setSound] = useState(null);
  const [timerType, setTimerType] = useState("interval");
const {startTimer,secondsRemaining,setSeconds,setrest,setinterval,stopTimer,round,} = useTimer()

  useEffect(() => {
    setinterval(intervalValue * 60 )
    console.log(restValue,'this is restvalue on useEffect')
    setrest(restValue)
  
  },[intervalValue,restValue])
  const handleStart = () => {
    setTimerRunning(true);   
    setSeconds(intervalValue * 60)
    setinterval(intervalValue)
    setrest(restValue)
    
    startTimer()
  };

  const handleStop = () => {
    setTimerRunning(false);
    stopTimer()
    console.log(secondsRemaining)
  };

  
  


  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    const paddedMinutes = minutes.toString().padStart(2, "0");
    const paddedSeconds = remainingSeconds.toString().padStart(2, "0");
    return `${paddedMinutes}:${paddedSeconds}`;
  };


  const styles = StyleSheet.create({
  
    Text: {
      color:'black',
      fontSize:40
    },
    RoundText: {
      color:'black',
      fontSize:40
    },
    ButtonStart : {
      backgroundColor:"#f1c40f",
      paddingVertical: 20,
      paddingHorizontal: 40,
      borderRadius: 15,
      marginRight:40,
      marginLeft:40
    },
  });
  

  return (
    <View style={styles.container}>
      <Text style={styles.RoundText}>Rounds:{round}</Text>
      <Text style={{ fontSize: 70 }}>
        {secondsRemaining !== null ? formatTime(secondsRemaining) : "--:--"}
      </Text>
      {!timerRunning && (
        <Pressable style={styles.ButtonStart} onPress={handleStart} color ="" >
          <Text style={styles.Text}>Start</Text>
        </Pressable>
      )}

      {timerRunning && <Button title="Stop" onPress={handleStop} color="red" />}
    </View>
  );
}
export default ChronoTimer;
