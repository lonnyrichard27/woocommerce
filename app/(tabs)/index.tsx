import Header from '@/components/ui/Header';
import ProductCard from '@/components/ui/ProductCard';
import { products } from '@/data/products';
import { useProductStore } from '@/store/useProductStore';
import { useRouter } from 'expo-router';
import React from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  SafeAreaView,
  StatusBar
} from 'react-native';

const TechnologyStore = () => {
  const { push } = useRouter()
  const { setSelectedProduct } = useProductStore();
  const handleProductPress = (product:any) => {
    push(`/ProductDetail`)
    setSelectedProduct(product)
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      
      <ScrollView 
        style={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
        bounces={true}
        contentContainerStyle={styles.scrollContent}
      >
        <Header text='Technology' showSearch />
        <Text style={styles.sectionTitle}>
          Smartphones, Laptops & Accessories
        </Text>

        <View style={styles.productsGrid}>
          {products.map((product) => (
            <ProductCard 
              key={product.id}
              id={product.id}
              name={product.name}
              price={product.price}
              image={product.image}
              onPress={() => handleProductPress(product)}
            />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollContainer: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    paddingBottom: 30,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: '#333',
    marginBottom: 25,
    lineHeight: 28,
    paddingHorizontal: 20,
    fontFamily: 'IBMPlexMono',
  },
  productsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  productCard: {
    width: '48%',
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 15,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
    position: 'relative',
  },
  productImage: {
    width: '100%',
    height: 120,
    borderRadius: 8,
    marginBottom: 12,
    backgroundColor: '#f0f0f0',
  },
  productName: {
    fontSize: 14,
    fontWeight: '500',
    color: '#333',
    marginBottom: 8,
    lineHeight: 18,
    minHeight: 36,
  },
  productPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  discountBadge: {
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: '#ff4444',
    borderRadius: 12,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  discountText: {
    color: '#fff',
    fontSize: 10,
    fontWeight: 'bold',
  },
  featuredProduct: {
    borderWidth: 2,
    borderColor: '#6B9EFF',
  },
});

export default TechnologyStore;