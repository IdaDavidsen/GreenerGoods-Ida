import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Search from './Search';
import ProductDetail from './screens/StackScreens/ProductDetail'; 

const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Search" component={Search} />
      <Stack.Screen name="ProductDetail" component={ProductDetail} /> 
    </Stack.Navigator>
  );
}