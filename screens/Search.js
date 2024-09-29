import { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TextInput, FlatList, SafeAreaView } from "react-native";
import { getDatabase, ref, get } from "firebase/database";
import ProductItem from '../components/productItem';

export default function Search({ navigation }) {
  const [query, setQuery] = useState("");
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const db = getDatabase(); // Use the already initialized Firebase app
        const dbRef = ref(db, "products");
        const snapshot = await get(dbRef);
        if (snapshot.exists()) {
          const data = snapshot.val();
          setProducts(Object.values(data));
        } else {
          console.log("No data available");
        }
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, []); // Empty array as dependency means this runs only once when the component mounts

  const handlePress = (item) => {
    navigation.navigate('ProductDetail', { product: item });
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Looking for a product?</Text>
      <TextInput
        style={styles.searchBar}
        placeholder="Search here"
        value={query}
        onChangeText={setQuery}
      />
      {products.length === 0 ? (
        <Text style={styles.text}>No results found</Text>
      ) : (
        <FlatList
          data={products}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => <ProductItem item={item} onPress={handlePress} />}
        />
      )}
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 42,
    color: "#1E6904",
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  text: {
    fontSize: 28,
    color: "#1E6904",
    fontWeight: "bold",
    textAlign: "center",
  },
  searchBar: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 10,
    paddingLeft: 10,
    marginBottom: 20,
    marginTop: 20,
    width: "100%",
  },
});