import { StatusBar as ExpoBar } from "expo-status-bar";
import {
  StyleSheet,
  ScrollView,
  SafeAreaView,
  StatusBar,
  Platform,
  Text,
  View
} from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Ionicons from "@expo/vector-icons/Ionicons";
import Entypo from "@expo/vector-icons/Entypo";
import Home from "./src/Home";
import Inbox from "./src/Inbox";
import People from "./src/People";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
 
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <SafeAreaView style={styles.container} className="">
      <NavigationContainer>
      <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color = focused ? "#ff4500" : "", size = focused ? 40 : 10 }) => {

              if (route.name === "Home") {
                return <Entypo name="home" color={color} size={size} />;
              } else if (route.name === "People") {
                return <FontAwesome name="users" color={color} size={size} />;
              } else if (route.name === "Comment") {
                return <Ionicons name="chatbubble" color={color} size={size} />;
              }else if (route.name === "Inbox") {
                return <FontAwesome name="inbox" color={color} size={size} />;
              }

              // You can return any component that you like here!
            },
            headerShown: false,
            tabBarShowLabel: false,
            tabBarActiveTintColor: "tomato",
            tabBarInactiveTintColor: "gray",
          })}
        >
          <Tab.Screen name="Home" component={Home} />
          <Tab.Screen name="People" component={People} />
          <Tab.Screen name="Comment" component={Home} />
          <Tab.Screen name="Inbox" component={Inbox} />
        </Tab.Navigator>
      </NavigationContainer>
      <ExpoBar style="auto" translucent={true} backgroundColor="#F2F2F2" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
