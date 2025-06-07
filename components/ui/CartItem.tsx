import React from 'react';
import { View, Text, Image, StyleSheet, Pressable } from 'react-native';
import MinusIcon from '../icons/MinusIcon';
import PlusIcon from '../icons/PlusIcon';
import TrashIcon from '../icons/TrashIcon';
import CustomText from '../custom/CustomText';


interface CartItemProps {
  title: string;
  price: number;
  stock: string;
  quantity: number;
  imageUrl: string;
  onIncrease: () => void;
  onDecrease: () => void;
  onDelete: () => void;
}

const CartItem: React.FC<CartItemProps> = ({
  title,
  price,
  stock,
  quantity,
  imageUrl,
  onIncrease,
  onDecrease,
  onDelete,
}) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: imageUrl }} style={styles.image} />
      
      <View style={styles.info}>
        <CustomText value={title} colorStyle='#334155' />
        <CustomText  colorStyle="#334155" marginBottomStyle={5} marginTopStyle={5} semiBold fontSizeStyle={18} value={`$ ${price.toFixed(2)}`} />
        <CustomText colorStyle='#10B981' value={stock} />

        <View style={styles.controls}>
          <Pressable style={styles.decrease} onPress={onDecrease}>
            <MinusIcon />
          </Pressable>

          <Text style={styles.quantity}>{quantity}</Text>

          <Pressable onPress={onIncrease} style={styles.increase}>
            <PlusIcon />
          </Pressable>

          <Pressable style={styles.trashBtn} onPress={onDelete}>
            <TrashIcon />
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default CartItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#F6F5F8',
    padding: 16,
    borderRadius: 15,
    alignItems: 'center',
    marginVertical: 16,

  },
  increase:{
    borderColor:'#E2E8F0',
    borderWidth: 1,
    borderRadius: 20,
    backgroundColor: '#fff',
    height: 36,
    width: 36,
    justifyContent: 'center',
    alignItems: 'center',
  },
  decrease:{
    borderRadius: 20,
    backgroundColor: '#E2E8F0',
    height: 36,
    width: 36,
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  image: {
    width: 100,
    height: 100,
    marginRight: 16,
  },
  info: {
    flex: 1,
  },
  controls: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 12,
  },
  symbol: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
  },
  quantity: {
    fontSize: 16,
    fontWeight: '500',
    minWidth: 20,
    textAlign: 'center',
    marginHorizontal: 18,
  },
  trashBtn: {
    borderColor:'#E2E8F0',
    borderWidth: 1,
    borderRadius: 20,
    backgroundColor: '#fff',
    height: 40,
    width: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 18,
  },
});
