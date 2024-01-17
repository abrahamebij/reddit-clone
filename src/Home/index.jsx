import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import Entypo from "@expo/vector-icons/Entypo";
import Post from "../components/Post";

const Home = () => {
  return (
    <View className="pt-3 flex-1 min-w-md"> 
      <ScrollView className="px-3">
        <View className="flex-row items-center gap-x-3 bg-white py-5 w-full ml-0.5 ">
          <Text className="font-semibold">Trending</Text>
          <Entypo name="chevron-right" size={20} />
        </View>

        <View className="first:rounded-t-none first-of-type:rounded-t-none">
          <Post />
          <Post />
          <Post />
          <Post />
        </View>
      </ScrollView>
      <TouchableOpacity className="bg-orange-600 p-2 rounded-full w-fit absolute bottom-5 right-3">
        <Entypo name="plus" size={24} color={"white"} />
      </TouchableOpacity>
    </View>
  )
}

export default Home;