import { View, Text, Pressable,StyleSheet } from "react-native";
function Home({ navigation }) {



  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    ButtonChronograph : {
      backgroundColor:"#f1c40f",
      paddingVertical: 40,
      paddingHorizontal: 60,
      borderRadius: 5,
      marginBottom: 70,
    },
    
    ButtonReact : {
      backgroundColor:"#3D6DCC",
      paddingVertical: 40,
      paddingHorizontal: 85,
      borderRadius: 5,
      margin:70,
    },
    ButtonText: {
      color: 'white',

    }
  });


  return (
    <View style={styles.container}>
      <Pressable
        onPress={() => navigation.navigate("Chronograph")}
        style={styles.ButtonChronograph}
      >
        <Text >Go to Chronograph</Text>
      </Pressable>
      <Pressable
        onPress={() => navigation.navigate("React")}
        style={styles.ButtonReact}
      >
        <Text style={styles.ButtonText}>Go to React</Text>
      </Pressable>
    </View>
  );
}
export default Home;
