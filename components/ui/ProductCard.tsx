import { Image, Pressable, StyleSheet } from 'react-native'
import React from 'react'
import CustomText from '../custom/CustomText';

interface Product {
  id: number;
  name: string;
  price: string;
  image: Record<string, any>;
  onPress?: () => void;
}

const ProductCard = ({ image, name, price, onPress }: Product) => {
  return (
    <Pressable style={styles.productCard} onPress={onPress}>
      <Image source={image} style={styles.productImage} resizeMode="cover" />
      <CustomText value={name} fontSizeStyle={15} />
      <CustomText
        value={price}
        fontSizeStyle={16} 
        bold
        marginTopStyle={4}
      />
    </Pressable>
  );
}

export default ProductCard;

const styles = StyleSheet.create({
  productCard: {
    width: '48%',
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 15,
    marginBottom: 20,
  },
  productImage: {
    width: '100%',
    height: 162,
    borderRadius: 8,
    marginBottom: 12,
  },
})