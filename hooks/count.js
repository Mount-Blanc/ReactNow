import { useEffect, useState } from "react";
import { Audio } from "expo-av";
import { Text } from "react-native";

function useCount() {
  const [sound, setSound] = useState(null);
  const [countdown, setCountdown] = useState(5);
  const [isPaused, setIsPaused] = useState(false);
  const [loopCount, setLoopCount] = useState(0);
  const [Clear, setClear] = useState(false);


  const loadSound = async () => {
    try {
      const soundObj = new Audio.Sound();
      await soundObj.loadAsync(require("../beep.mp3"));
      setSound(soundObj);
    } catch (error) {
      console.error("Failed to load sound", error);
    }
  };

  const handlePlaySound = async () => {
    try {
      await sound.replayAsync();
    } catch (error) {
      console.log(error);
    }
  };

  const fiveCount = () => {
    let countTime = 5;
    const count = setInterval(() => {
      const difference = countTime--;
    console.log(difference)
      setCountdown(difference);

      if (difference <= 0) {
        clearInterval(count);
        handlePlaySound();
        setIsPaused(false);
      }
    }, 1000);
    setCountdown(5);
  };

  useEffect(() => {
    loadSound();
  }, []);

  const truePaused = () => {
    setIsPaused(true);
  };

  const loopstate = () => {
    setLoopCount((prev) => prev + 1);
    console.log(loopCount,'loop function')
  };

  const clearTimer= () => {
    setClear(true)
  }
  return { fiveCount, loadSound, countdown, truePaused, isPaused, loopstate,loopCount,clearTimer,Clear };
}

export default useCount;
