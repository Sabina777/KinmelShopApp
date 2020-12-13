import * as React from 'react';
import {Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import ProductOverviewScreen from '../screens/shop/ProductOverviewScreen';
import ProductDetailScreen from '../screens/shop/ProductDetailScreen';
import CartScreen from '../screens/shop/CartScreen';
const Stack = createStackNavigator();

const ProductNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="ProductOverview"
          component={ProductOverviewScreen}
          options={({navigation, route}) => ({
            headerTitle: 'All Products',
            headerRight: () => (
              <Button
                onPress={() => navigation.navigate('CartScreen')}
                title="Cart"
                color="red"
              />
            ),
          })}
        />
        <Stack.Screen name="ProductDetail" component={ProductDetailScreen} />
        <Stack.Screen name="CartScreen" component={CartScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default ProductNavigator;
