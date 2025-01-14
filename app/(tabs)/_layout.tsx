import { Tabs } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';

import { HapticTab } from '@/components/HapticTab';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarStyle: Platform.select({
          ios: {
            // Use a transparent background on iOS to show the blur effect
            position: 'absolute',
          },
          default: {
            backgroundColor:"#FBFBFB"
          },
        }),
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Task',
          tabBarIcon: ({ color }) => <FontAwesome5 name="tasks" size={22}  color = {"rgba(0,0,0,0.7)"} />,
        }}
      />
      <Tabs.Screen
        name="calender"
        options={{
          title: 'Calender',
          tabBarIcon: ({ color }) => <FontAwesome name="calendar-o" size={22}  color = {"rgba(0,0,0,0.7)"}/>,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'profile',
          tabBarIcon: ({ color }) => <MaterialCommunityIcons name="account-circle-outline" size={24} color = {"rgba(0,0,0,0.7)"}/>,
        }}
      />
    </Tabs>
  );
}
