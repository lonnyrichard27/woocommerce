import CustomButton from '@/components/custom/CustomButton';
import CustomText from '@/components/custom/CustomText';
import FavoriteIcon from '@/components/icons/FavoriteIcon';
import Header from '@/components/ui/Header';
import { useToastMessage } from '@/hooks/useToastMessage';
import { useCartStore } from '@/store/useCartStore';
import { useProductStore } from '@/store/useProductStore';
import { useRouter } from 'expo-router';
import React from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  StyleSheet,
  SafeAreaView,
  Pressable,
} from 'react-native';

const ProductDetail= () => {
  const toastMessage = useToastMessage();
  const { push } = useRouter();
  const { addToCart } = useCartStore();
  const { selectedProduct } = useProductStore();

  const handleAddToCart = () => {
    toastMessage.success({ title:'Item has been added to cart' })
    if (selectedProduct) {
      const cleanProduct = {
        ...selectedProduct,
        price: parseFloat(selectedProduct.price.replace(/[^0-9.]/g, '')),
      };
      addToCart(cleanProduct);
      push('/CartScreen');
    }
  };
  

  return (
    <SafeAreaView style={styles.container}>
      <Header text='Go Back' />
      <ScrollView style={styles.scrollContainer} showsVerticalScrollIndicator={false}>
        <View style={styles.card}>
          <Pressable style={styles.heartIcon}>
            <FavoriteIcon />
          </Pressable>

          <View style={styles.imageContainer}>
            <Image source={require('../assets/images/bigiphone.png')} style={styles.productImage} />
          </View>
        </View>


        <View style={styles.productInfoSection}>
          <CustomText value={selectedProduct?.name ?? ''} fontSizeStyle={19} />
          <CustomText value={selectedProduct?.price ?? ''} fontSizeStyle={33} marginTopStyle={9} bold />  
          <View style={styles.aboutSection}>
            <CustomText value='About this item' fontSizeStyle={18} colorStyle='#999999' marginBottomStyle={16} />
            
            <View style={styles.bulletContainer}>
              <View style={styles.bulletPoint}>
                <Text style={styles.bullet}>•</Text>
                <Text style={styles.bulletText}>
                  This pre-owned product is not Apple certified, but has been professionally inspected, tested and cleaned by Amazon-qualified suppliers.
                </Text>
              </View>
              
              <View style={styles.bulletPoint}>
                <Text style={styles.bullet}>•</Text>
                <Text style={styles.bulletText}>
                  There will be no visible cosmetic imperfections when held at an  length. There will be no visible cosmetic imperfections when held at an 
                </Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>


      <View style={styles.bottomSection}>
        <CustomButton text='Add To Cart' onPress={handleAddToCart} />
      </View>
    </SafeAreaView>
  );
};

export default ProductDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  scrollContainer: {
    flex: 1,
  },
  card: {
    borderRadius: 24,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    margin: 10,
  },
  heartIcon: {
    position: 'absolute',
    top: 16,
    right: 16,
    backgroundColor: '#fff',
    borderRadius: 24,
    padding: 8,
  },
  heartImage: {
    width: 20,
    height: 20,
  },
  imageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  productImage: {
    width: 180,
    height: 330,
  },
  productInfoSection: {
    backgroundColor: '#fff',
    paddingTop: 24,
    paddingHorizontal: 16,
    paddingBottom: 100, 
  },
  aboutSection: {
    marginTop: 15,
  },
  bulletContainer: {
    gap: 16,
  },
  bulletPoint: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  bullet: {
    fontSize: 16,
    color: '#666',
    marginRight: 8,
    marginTop: 2,
    lineHeight: 20,
    fontFamily: 'Regular'
  },
  bulletText: {
    flex: 1,
    fontSize: 15,
    color: '#999999',
    lineHeight: 22,
    fontWeight: '400',
    fontFamily: 'Regular'
  },
  bottomSection: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    paddingVertical: 12,
    paddingBottom: 20,
    borderTopWidth: 1,
    borderTopColor: '#f0f0f0',
  },
  addToCartButton: {
    backgroundColor: '#5B9BD5',
    paddingVertical: 16,
    borderRadius: 8,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  addToCartText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '500',
  },
});