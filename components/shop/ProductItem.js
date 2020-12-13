import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Button,
  TouchableOpacity,
  Platform,
  TouchableNativeFeedback,
} from 'react-native';

const ProductItem = ({title, image, price, onViewDetails, onAddToCart}) => {
  //   let TouchableCmp = <TouchableOpacity />;
  //   if (Platform.OS === 'android' && Platform.Version > 21) {
  //     TouchableCmp = <TouchableNativeFeedback />;
  //   }

  return (
    <TouchableOpacity onPress={onViewDetails}>
      <View style={styles.product}>
        <Image source={{uri: image}} style={styles.image} />
        <View style={styles.details}>
          <Text style={styles.title}>{title}</Text>

          <Text style={styles.price}>{price}</Text>
        </View>

        <View style={styles.action}>
          <Button title="View Details" onPress={onViewDetails} />
          <Button title="Add to Cart" onPress={onAddToCart} />
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  product: {
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 8,
    elevation: 5,
    backgroundColor: 'white',
    height: 300,
    margin: 20,
  },
  image: {
    width: '100%',
    height: '60%',
  },
  title: {
    fontSize: 18,
    marginVertical: 4,
  },
  price: {
    fontSize: 14,
    color: '#888',
  },
  action: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '25%',
    paddingHorizontal: 20,
  },
  details: {
    alignItems: 'center',
    height: '15%',
    padding: 10,
  },
});
export default ProductItem;
