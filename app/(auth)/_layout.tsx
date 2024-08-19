import React from 'react'
import { View } from 'react-native';
import { Stack } from 'expo-router';

const AuthLayout = () => {
  return (
    <Stack screenOptions={{ headerShown: false }} >
        <Stack.Screen name='sign-in' />
        <Stack.Screen name='register' />
    </Stack>
  )
}

export default AuthLayout;