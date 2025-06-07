import TabIcon from '@/components/custom/CustomTabIcon';
import CartIcon from '@/components/icons/CartIcon';
import FavoriteIcon from '@/components/icons/FavoriteIcon';
import HomeIcon from '@/components/icons/HomeIcon';
import ProfileIcon from '@/components/icons/ProfileIcon'
import { Tabs } from 'expo-router';
import React from 'react';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: 'white',
          borderTopWidth: 0,
          elevation: 0,
          shadowOpacity: 0,
          height: 80,
          paddingBottom: 10,
          paddingTop: 10,
        },
        tabBarShowLabel: true,
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '500',
          marginTop: 4,
        },
        tabBarActiveTintColor: '#4A90E2',
        tabBarInactiveTintColor: '#000',
      }}
    >
    <Tabs.Screen
      name="index"
      options={{
        title: 'Home',
        tabBarIcon: ({ focused }) => (
          <TabIcon
            focused={focused}
            icon={<HomeIcon color={focused ? '#fff' : '#000'} />}
            showBackground={focused && true}
          />
        ),
      }}
    />

    <Tabs.Screen
      name="cart"
      options={{
        title: 'Cart',
        tabBarIcon: ({ focused }) => (
          <TabIcon
            focused={focused}
            icon={<CartIcon color={focused ? '#fff' : '#000'} />}
            showBackground={focused && true}
          />
        ),
      }}
    />

    <Tabs.Screen
      name="favorites"
      options={{
        title: 'Favorites',
        tabBarIcon: ({ focused }) => (
          <TabIcon
            focused={focused}
            icon={<FavoriteIcon color={focused ? '#fff' : '#000'} />}
            showBackground={focused && true}
          />
        ),
      }}
    />

    <Tabs.Screen
      name="profile"
      options={{
        title: 'Profile',
        tabBarIcon: ({ focused }) => (
          <TabIcon
            focused={focused}
            icon={<ProfileIcon color={focused ? '#fff' : '#000'} />}
            showBackground={focused && true}
          />
        ),
      }}
    />
  </Tabs>
  );
}