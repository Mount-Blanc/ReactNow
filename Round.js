import React, {useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import useCount from './hooks/count'
function Round () {
    const [loadSound,fiveCount] =useCount()
    const [countdown, setcountdown] = useState(5);

    
    return(
        <View>T
            <Text>{fiveCount}</Text>
        </View>

    )
}
export default Round