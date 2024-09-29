import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { getApps, initializeApp } from "firebase/app"; // Importer nødvendige funktioner fra Firebase SDK
import { getDatabase } from "firebase/database";

import Ionicons from "react-native-vector-icons/Ionicons";

import Home from "./screens/Home";
import Scan from "./screens/Season";
import Search from "./screens/Search";
import Profile from "./screens/Profile";
import History from "./screens/History";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBrTaP41sy8mc5Tusm1--bJLu0vwz9ih3s",
  authDomain: "greenergoods.firebaseapp.com",
  databaseURL:
    "https://greenergoods-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "greenergoods",
  storageBucket: "greenergoods.appspot.com",
  messagingSenderId: "220300318592",
  appId: "1:220300318592:web:f173601bc2eaebe95e5365",
};

// Initialiser Firebase kun hvis det ikke allerede er initialiseret
if (!getApps().length) {
  initializeApp(firebaseConfig);
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{ tabBarIcon: () => <Ionicons name="home" size={20} /> }}
        />
        <Tab.Screen
          name="Season"
          component={Scan}
          options={{
            tabBarIcon: () => <Ionicons name="nutrition-outline" size={20} />,
          }}
        />
        <Tab.Screen
          name="Search"
          component={Search}
          options={{
            tabBarIcon: () => <Ionicons name="search-outline" size={20} />,
          }}
        />
        <Tab.Screen
          name="History"
          component={History}
          options={{
            tabBarIcon: () => <Ionicons name="cart-outline" size={20} />,
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarIcon: () => (
              <Ionicons name="accessibility-outline" size={20} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
