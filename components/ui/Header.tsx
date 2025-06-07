import { Pressable, StyleSheet, TextInput, View } from 'react-native'
import React from 'react'
import NotificationIcon from '../icons/NotificationIcon'
import CustomText from '../custom/CustomText'
import SearchIcon from '../icons/SearchIcon'
import Entypo from '@expo/vector-icons/Entypo';
import { useRouter } from 'expo-router'

interface HeaderProps {
  text: string
  showSearch?: boolean
}

const Header = ({ text, showSearch}: HeaderProps) => {
  const { back } = useRouter();
  return (
    <View>
      <View style={styles.header}>
        <View style={styles.logoContainer}>
          <CustomText value='Full Logo' colorStyle='#2563EB' fontSizeStyle={14} semiBold />
        </View>
        
        <View style={styles.deliverySection}>
          <CustomText 
            value='DELIVERY ADDRESS' 
            colorStyle='#334155' 
            fontSizeStyle={14} 
            semiBold
            lineHeightStyle={28}
          />
          <CustomText 
            value='Umuezike Road, Oyo State'
            colorStyle='#334155' 
            fontSizeStyle={16} 
            semiBold 
            lineHeightStyle={28}
            marginTopStyle={8}
          />
        </View>
        
        <Pressable style={styles.notificationButton}>
          <NotificationIcon />
        </Pressable>
      </View>
      {showSearch && 
        <View style={styles.searchContainer}>
          <View style={{ marginRight: 10 }}>
            <SearchIcon />
          </View>
          <TextInput
            style={styles.searchInput}
            placeholder="Search..."
            placeholderTextColor="#CBD5E1"
          />
        </View>
      }
      <View style={styles.borderBottom} />

      {/* Page Header */}
      <Pressable style={styles.pageHeader} onPress={() => back()}>
        <Pressable style={styles.backButton}  onPress={() => back()}>
          <Entypo name="chevron-small-left" size={24} color="black" />
        </Pressable>
        <CustomText 
          value={text}
          colorStyle='#334155' 
          fontSizeStyle={20} 
          bold
          lineHeightStyle={28}
        />
      </Pressable>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: '#fff',
  },
  borderBottom:{
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },  
  logoContainer: {
    borderWidth: 2,
    borderColor: '#2563EB',
    backgroundColor: '#93C5FD',
    borderStyle: 'dashed',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 4,
  },
  borderLine: {
    height: 1,
    backgroundColor: '#f0f0f0',
    marginHorizontal: 20,
  },
  deliverySection: {
    alignItems: 'center',
    flex: 1,
    marginHorizontal: 20,
  },
  notificationButton: {
    padding: 8,
  },
  notificationIcon: {
    fontSize: 20,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    marginHorizontal: 20,
    marginVertical: 15,
    paddingHorizontal: 15,
    paddingVertical: 12,
    borderRadius: 5,
    borderWidth: 1,
    borderColor:"#E2E8F0"
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: '#333',
  },
  pageHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    marginBottom: 20,
    paddingHorizontal: 20,
  },
  backButton: {
    padding: 5,
    marginRight: 8
  },
  backIcon: {
    fontSize: 20,
    color: '#333',
  },
  pageTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
})