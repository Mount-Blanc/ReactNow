import { Text, View } from "react-native";
import Timer from "./Timer";
function CountDown({ countdown }) {
  return (
    <View>
      <Text>{countdown === 0 ? <Timer /> : countdown}</Text>
    </View>
  );
}
export default CountDown;
