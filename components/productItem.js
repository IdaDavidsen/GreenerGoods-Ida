import React, { memo } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import ProductDetail from '../screens/StackScreens/ProductDetail';

// The ProductItem component is memoized using React.memo to prevent unnecessary re-renders.
const ProductItem = memo(({ item, onPress }) => (
  <TouchableOpacity onPress={() => onPress(item)}>
    <View style={styles.itemContainer}>
      <Text style={styles.itemText}>{item.Navn}</Text>
      <Text style={styles.itemText}>C02 footprint: {item.Total_kg_CO2e_kg.toFixed(2)} total kg CO2e/kg</Text>
    </View>
  </TouchableOpacity>
));

const styles = StyleSheet.create({
  itemContainer: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  itemText: {
    fontSize: 18,
  },
});

export default ProductItem;
