import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";

export default function Scan() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to seasons{"\n"}</Text>
      <Text style={styles.text}>
        Here you can see which goods there are in season
      </Text>
      <View>
        <Image source={require("../assets/seasonPic.png")} style={styles.Image}/>
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
});
