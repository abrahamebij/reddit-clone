import { Image, View, Text, TouchableOpacity } from "react-native";
import Entypo from "@expo/vector-icons/Entypo";
import AntDesign from "@expo/vector-icons/AntDesign";
import Octicons from "@expo/vector-icons/Octicons";

TouchableOpacity.defaultProps = { activeOpacity: 0.35 }

const Post = () => {
  // function handleTouch(e) {
  //   console.log(e);
  // }
  return (
    <View className="gap-y-3 my-1 px-3 pt-1 rounded-xl pb-5 bg-white">

      {/* Post Header */}
      <View className="flex-row items-center justify-between">
        <View className="flex-row gap-x-2 items-center">
          <Image
            source={require("../../assets/favicon.png")}
            className="w-7 h-7"
          />
          <Text className="font-semibold text-base">r/AskReddit</Text>
        </View>
        <Entypo name="dots-three-vertical" size={16} color={"#6b7280"} />
      </View>

      {/* Post Body */}
      <View>
        <Text className="font-semibold text-base leading-2">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio, itaque!</Text>
        <View className="flex-row items-center pt-4">
          <Text className="text-gray-400 font-semibold text-sm">Lorem ipsum dolor sit amet</Text>
          <Entypo name="dot-single" size={20} color={"#9ca3af"} />
          <Text className="text-gray-400 font-semibold">7h</Text>
        </View>
      </View>

      {/* Post Footer */}
      <View className="flex-row justify-between pt-3 pr-3">
        <View className="flex-row gap-x-2 items-center">
          <TouchableOpacity>
            <AntDesign name="arrowup" size={16} color={"#6b7280"} />
          </TouchableOpacity>
          <Text className="text-gray-500 font-semibold">28.2K</Text>
          <TouchableOpacity>
            <AntDesign name="arrowdown" size={16} color={"#6b7280"} />
          </TouchableOpacity>
        </View>

        <TouchableOpacity className="flex-row gap-x-2 items-center">
          <Octicons name="comment" size={16} color={"#6b7280"} />
          <Text className="text-gray-500 font-semibold">3K</Text>
        </TouchableOpacity>

        <View className="flex-row gap-x-2 items-center">
        <TouchableOpacity className="flex-row gap-x-2 items-center">
          <Octicons name="share-android" size={16} color={"#6b7280"} />
          <Text className="text-gray-500 font-semibold">Share</Text>
        </TouchableOpacity>
        </View>
      </View>

    </View>
  );
};

export default Post;
