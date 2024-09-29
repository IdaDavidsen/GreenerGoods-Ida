import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to GreenerGoods {"\n"}</Text>
      <Text style={styles.text}>
        The app that helps you to make your groceries greener - fast and easy!
        {"\n"}
        {"\n"}
        Read about your products CO2 footprint, see greener alternatives or browse in the seasonal goods
       
      </Text>
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
