import { useEffect, useState, useRef } from "react";
import { Audio } from "expo-av";

function useTimer() {
  const [secondsRemaining, setSecondsRemaining] = useState(null);
  const [timerType, setTimerType] = useState("interval");
  const [restseconds, setrestseconds] = useState(null);
  const [intervalminutes, setintervalminutes] = useState(null);
  const [round, setround] = useState(0);
  const intervalId = useRef(null);

  const [startSound, setstartSound] = useState(null);
  const [stopSound, setstopSound] = useState(null);

  const loadstartSound = async () => {
    try {
      const soundObj = new Audio.Sound();
      await soundObj.loadAsync(require("./Start.mp3"));
      setstartSound(soundObj);
    } catch (error) {
      console.error("Failed to load sound", error);
    }
  };

  const loadstopSound = async () => {
    try {
      const soundObj = new Audio.Sound();
      await soundObj.loadAsync(require("./Rest.mp3"));
      setstopSound(soundObj);
    } catch (error) {
      console.error("Failed to load sound", error);
    }
  };
  const handlestartSound = async () => {
    try {
      await startSound.replayAsync();
    } catch (error) {
      console.log(error);
    }
  };
  const handlestopSound = async () => {
    try {
      await stopSound.replayAsync();
    } catch (error) {
      console.log(error);
    }
  };

  const startTimer = () => {
    console.log(secondsRemaining, "start timer");
    clearInterval(intervalId.current);

    intervalId.current = setInterval(() => {
      if (round < 3) {
        setSecondsRemaining((prevSecondsRemaining) => {
          if (prevSecondsRemaining === 0) {
            clearInterval(intervalId.current);
            setSecondsRemaining(0);
            if (timerType == "interval") {
              setTimerType("rest");
              console.log("this is interval check", restseconds);
              setSecondsRemaining(restseconds);
              handlestopSound();
            }
            console.log(timerType, "between checks");
            if (timerType == "rest") {
              setTimerType("interval");
              console.log(
                "this is inside rest interval check",
                intervalminutes
              );
              setSecondsRemaining(intervalminutes * 60);
              setround((prev) => prev + 1);
              handlestartSound();
            }
            clearInterval(intervalId);
          }

          return prevSecondsRemaining > 0 ? prevSecondsRemaining - 1 : null;
        });
      }
    }, 1000);
  };

  useEffect(() => {
    if (secondsRemaining !== null) {
      startTimer();
    }
    return () => clearInterval(intervalId.current);
  }, [timerType]);

  useEffect(() => {
    loadstartSound();
    loadstopSound();
  }, []);

  const setSeconds = (value) => {
    setSecondsRemaining(value);
    console.log("this is seconds", secondsRemaining);
  };

  const setType = (value) => {
    setTimerType(value);
  };

  const setrest = (value) => {
    setrestseconds(value);
    console.log("restseconds", value);
  };
  const setinterval = (value) => {
    setintervalminutes(value);
    console.log("restseconds", value);
  };

  const stopTimer = () => {
    setSecondsRemaining(null);
    setround(0);
  };

  return {
    startTimer,
    secondsRemaining,
    setSeconds,
    timerType,
    setType,
    setrest,
    setinterval,
    stopTimer,
    round,
  };
}

export default useTimer;
