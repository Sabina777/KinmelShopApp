import React from 'react';
import {ScrollView, StyleSheet, View, Text, Button, Image} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';

import * as cartActions from '.././../store/actions/cart';
const ProductDetailScreen = ({navigation, route}) => {
  //get product id from he navigatin params
  const productId = route.params.productId;
  //find the selected product from the products avaialable in the store
  const selectedProduct = useSelector((state) =>
    state.products.availableProducts.find((prod) => prod.id === productId),
  );

  const dispatch = useDispatch();
  return (
    <ScrollView>
      <Image source={{uri: selectedProduct.imageUrl}} style={styles.image} />

      <View style={styles.action}>
        <Button
          title="Add To Cart"
          onress={() => {
            dispatch(cartActions.addToCart(selectedProduct));
          }}
        />
      </View>

      <Text style={styles.price}>{selectedProduct.price}</Text>
      <Text style={styles.description}>{selectedProduct.description}</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 300,
  },
  action: {
    marginVertical: 10,
    alignItems: 'center',
  },
  price: {
    fontSize: 14,
    textAlign: 'center',
    marginHorizontal: 20,
  },
  description: {
    textAlign: 'center',
  },
});

export default ProductDetailScreen;
