import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function ProductDetail({ route }) {
  const { product } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{product.Navn}</Text>
      <Text style={styles.text}>Kategori: {product.Kategori}</Text>
      <Text style={styles.text}>Total kg CO2e/kg: {product.Total_kg_CO2e_kg.toFixed(2)}</Text>
      <Text style={styles.text}>Landbrug: {product.Landbrug}</Text>
      <Text style={styles.text}>ILUC: {product.ILUC}</Text>
      <Text style={styles.text}>Forarbejdning: {product.Forarbejdning}</Text>
      <Text style={styles.text}>Emballage: {product.Emballage}</Text>
      <Text style={styles.text}>Transport: {product.Transport}</Text>
      <Text style={styles.text}>Detail: {product.Detail}</Text>
      <Text style={styles.text}>Energi (KJ/100 g): {product.Energi}</Text>
      <Text style={styles.text}>Fedt (g/100 g): {product.Fedt}</Text>
      <Text style={styles.text}>Kulhydrat (g/100 g): {product.Kulhydrat}</Text>
      <Text style={styles.text}>Protein (g/100 g): {product.Protein}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  text: {
    fontSize: 18,
    marginBottom: 5,
  },
});