import CustomButton from '@/components/custom/CustomButton';
import CustomText from '@/components/custom/CustomText';
import CartItem from '@/components/ui/CartItem';
import Header from '@/components/ui/Header';
import { useCartStore } from '@/store/useCartStore';
import React from 'react';
import {
  ScrollView,
  Image,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  View,
} from 'react-native';

const ShoppingCartScreen = () => {
  const {
    cart,
    addQuantity,
    removeQuantity,
    removeItem,
    subtotal,
  } = useCartStore();

  const shippingCost = 10.0;
  const total = subtotal() + shippingCost;

  
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="dark-content" backgroundColor="#fff" />
        <Header text="Your Cart" />
  
        <ScrollView style={styles.scrollContainer} showsVerticalScrollIndicator={false}>
          {/* Cart Items */}
          <View style={styles.cartItemsContainer}>
            {cart.length > 0 ? (
              cart.map((product) => (
                <CartItem
                  key={product.id}
                  title={product.name}
                  price={product.price}
                  stock="In stock"
                  quantity={product.quantity || 1}
                  imageUrl={Image.resolveAssetSource(product.image).uri}
                  onIncrease={() => addQuantity(product.id)}
                  onDecrease={() => removeQuantity(product.id)}
                  onDelete={() => removeItem(product.id)}
                />
              ))
            ) : (
              <CustomText value="Your cart is empty" fontSizeStyle={16} />
            )}
          </View>
  
          {/* Order Info Section */}
          <View style={styles.orderInfoSection}>
            <CustomText value="Order Info" bold fontSizeStyle={16} marginBottomStyle={30} />
  
            <View style={styles.orderRow}>
              <CustomText value="Subtotal" fontSizeStyle={16} />
              <CustomText value={`$${subtotal().toFixed(2)}`} fontSizeStyle={16} />
            </View>
  
            <View style={[styles.orderRow, { marginVertical: 15}]}>
              <CustomText value="Shipping" fontSizeStyle={16} />
              <CustomText value={`$${shippingCost.toFixed(2)}`} fontSizeStyle={16} />
            </View>
  
            <View style={styles.orderRow}>
              <CustomText bold value="Total" fontSizeStyle={16} />
              <CustomText bold value={`$${total.toFixed(2)}`} fontSizeStyle={16} />
            </View>
          </View>
        </ScrollView>
  
        {/* Checkout Button */}
        <View style={styles.checkoutContainer}>
          <CustomButton text={`Checkout $${total.toFixed(2)}`} onPress={() => console.log('first')} />
        </View>
      </SafeAreaView>
    );
  };
  
export default ShoppingCartScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
  },
  scrollContainer: {
    flex: 1,
    paddingBottom: 20,
    paddingHorizontal: 10,
  },
  cartItemsContainer: {
    paddingTop: 20,
  },
  orderInfoSection: {
    backgroundColor: '#fff',
    marginHorizontal: 16,
    marginTop: 20,
    padding: 20,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 2,
  },

  orderRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  totalRow: {
    borderTopWidth: 1,
    borderTopColor: '#f0f0f0',
    paddingTop: 16,
    marginBottom: 0,
  },
  checkoutContainer: {
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    paddingVertical: 16,
    paddingBottom: 20,
    borderTopWidth: 1,
    borderTopColor: '#f0f0f0',
  },
});