import { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import RNPickerSelect from "react-native-picker-select";
import ChronoTimer from "./ChronoTimer";
import { Picker } from "react-native";
function Chronograph() {
  const [selectedInterval, setSelectedInterval] = useState("1");
  const [selectedRest, setSelectedRest] = useState("10");

  const styles = StyleSheet.create({
    Title: {
      color: "#e8630a",
      fontSize: 40,
      margin: 20,
    },
  });

  const pickerSelectStyles = StyleSheet.create({
    inputIOS: {
      fontSize: 16,
      paddingVertical: 12,
      paddingHorizontal: 10,
      borderWidth: 1,
      borderColor: "#e8630a",
      borderRadius: 4,
      color: "#e8630a",
      paddingRight: 30, // to ensure the text is never behind the icon
    },
  });
  return (
    <View>
      <Text style={styles.Title}>Interval:</Text>
      {/* The picker below only works on React Native Web */}
      <Picker onValueChange={(value, index) => setSelectedInterval(value)}>
        <Picker.Item label="1 minute" value="1" />
        <Picker.Item label="2 minutes" value="2" />
        <Picker.Item label="3 minutes" value="3" />
        <Picker.Item label="4 minutes" value="4" />
        <Picker.Item label="5 minutes" value="5" />
        <Picker.Item label="6 minutes" value="6" />
        <Picker.Item label="7 minutes" value="7" />
        <Picker.Item label="8 minutes" value="8" />
        <Picker.Item label="9 minutes" value="9" />
        <Picker.Item label="10 minutes" value="10" />
      </Picker>
      ;<Text style={styles.Title}>Rest:</Text>
      <Picker onValueChange={(value) => setSelectedRest(value)}>
        <Picker.Item label="10 seconds" value="10" />
        <Picker.Item label="20 seconds" value="20" />
        <Picker.Item label="30 seconds" value="30" />
        <Picker.Item label="40 seconds" value="40" />
        <Picker.Item label="50 seconds" value="50" />
        <Picker.Item label="60 seconds" value="60" />
      </Picker>
      {/*  The RNPickerSelect below only works in React Native ios */}
      {/*<RNPickerSelect
            onValueChange={(value) => setSelectedInterval(value)}
            placeholder={{ label: "Select an Exercise Interval", value: null }}

            style={pickerSelectStyles}
            items={[
                { label: '1 minute', value: '1' },
                { label: '2 minutes', value: '2' },
                { label: '3 minutes', value: '3' },
                { label: '4 minutes', value: '4' },
                { label: '5 minutes', value: '5' },
                { label: '6 minutes', value: '6' },
                { label: '7 minutes', value: '7' },
                { label: '8 minutes', value: '8' },
                { label: '9 minutes', value: '9' },
                { label: '10 minutes', value: '10' }

               
            ]}
        />
       
        <Text style={styles.Title}>Rest:</Text>

        <RNPickerSelect
            onValueChange={(value) => setSelectedRest(value)}
            placeholder={{ label: "Select a Rest Interval", value: null }}
            style={pickerSelectStyles}
            items={[
              { label: '10 second', value: '10' },
              { label: '20 second', value: '20' },
              { label: '30 second', value: '30' },
              { label: '40 second', value: '40' },
              { label: '50 second', value: '50' },
              { label: '60 second', value: '60' },
               
            ]}
          /> */}
      <ChronoTimer intervalValue={selectedInterval} restValue={selectedRest} />
    </View>
  );
}
export default Chronograph;
