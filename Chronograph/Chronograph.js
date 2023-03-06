import { useState } from "react"
import { View,Text, StyleSheet } from "react-native"
import RNPickerSelect from 'react-native-picker-select';import ChronoTimer from "./ChronoTimer";
function Chronograph () {
    const [selectedInterval, setSelectedInterval] = useState("1");
    const [selectedRest, setSelectedRest] = useState("10");




    const styles = StyleSheet.create({
      Title: {
        color:'#e8630a',
        fontSize:40,
        margin:20
      },

    });
    
    const pickerSelectStyles = StyleSheet.create({
      inputIOS: {
        fontSize: 16,
        paddingVertical: 12,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: '#e8630a',
        borderRadius: 4,
        color: '#e8630a',
        paddingRight: 30, // to ensure the text is never behind the icon
    }
  })
    return(
        <View>
            <Text style={styles.Title}>Interval:</Text>
            <RNPickerSelect
            onValueChange={(value) => setSelectedInterval(value)}
            placeholder={{ label: "Select an Exercise Interval", value: null }}

            style={pickerSelectStyles}
            items={[
                { label: '1 minute', value: '1' },
                { label: '2 minute', value: '2' },
                { label: '3 minute', value: '3' },
                { label: '4 minute', value: '4' },
                { label: '5 minute', value: '5' },
                { label: '6 minute', value: '6' },
                { label: '7 minute', value: '7' },
                { label: '8 minute', value: '8' },
                { label: '9 minute', value: '9' },
                { label: '10 minute', value: '10' }

               
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
        />
       
      <ChronoTimer intervalValue={selectedInterval}
      restValue={selectedRest }/>
        </View>
    )
}
export default Chronograph