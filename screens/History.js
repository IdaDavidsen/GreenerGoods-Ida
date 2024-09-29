import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";

// import AssetComponent from "../components/AssetComponent";

export default function History() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to the history screen{"\n"}</Text>
      <Text style={styles.text}>
        Here you can see your previous scans and see the CO2 footprint and much
        more
      </Text>
      <View>
        <Image source={require("../assets/historyPic.png")} style={styles.Image}/>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 42,
    color: "#1E6904",
    fontWeight: "bold",
    textAlign: "center",
  },
  text: {
    fontSize: 28,
    color: "#1E6904",
    fontWeight: "bold",
    textAlign: "center",
  },
  Image: {
    width: 300,
    height: 300,
  },
});
