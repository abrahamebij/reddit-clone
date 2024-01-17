import { View, Text} from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome"

const Inbox = () => {
  return (
    <View className="flex-1 justify-center items-center">
      <FontAwesome name="reddit" size={60} color={"gray"} />
      <Text className="text-gray-600 pt-2">No Messages Yet !!!</Text>
    </View>
  )
}

export default Inbox