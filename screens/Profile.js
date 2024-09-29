import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function Profile () {
  return (
    <View style={styles.container}>
    <Text style={styles.title}>Welcome to your profile page{"\n"}</Text>
    <Text style={styles.text}>
      It's still in the making but you will be able to see your personal CO2 footprint
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
