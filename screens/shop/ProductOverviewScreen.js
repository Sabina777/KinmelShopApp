import React from 'react';
import {FlatList, View, Text, TouchableOpacity} from 'react-native';
import Product from '../../models/Product';
import ProductItem from '../../components/shop/ProductItem';
import {useSelector, useDispatch} from 'react-redux';
import * as cartActions from '../../store/actions/cart';
const ProductOverviewScreen = ({navigation}) => {
  const products = useSelector((state) => state.products.availableProducts);
  //initiate the dispatch function
  const dispatch = useDispatch();
  return (
    <FlatList
      data={products}
      keyExtractor={(item) => item.id}
      renderItem={(itemData) => (
        <ProductItem
          image={itemData.item.imageUrl}
          title={itemData.item.title}
          price={itemData.item.price}
          description={itemData.item.description}
          onViewDetails={() => {
            navigation.navigate('ProductDetail', {
              productId: itemData.item.id,
              productTitle: itemData.item.title,
            });
          }}
          onAddToCart={() => {
            dispatch(cartActions.addToCart(itemData.item));
          }}
        />
      )}
    />
  );
};

export default ProductOverviewScreen;
