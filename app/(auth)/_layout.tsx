import React from 'react'
import { View } from 'react-native';
import { Stack } from 'expo-router';
import theme from '@/shared/theme/theme';

const AuthLayout = () => {
  return (
    <Stack screenOptions={{ headerShown: false, contentStyle: {
      backgroundColor: theme.colors.background,
    },}} >
        <Stack.Screen name='sign-in' />
        <Stack.Screen name='register' />
    </Stack>
  )
}

export default AuthLayout;