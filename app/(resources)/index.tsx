import React from 'react'
import { View, Text } from 'react-native';
import { Button } from 'react-native-paper';
import * as SecureStore from "expo-secure-store";

const Resources = () => {


    const onLogout = async() => {
        await SecureStore.deleteItemAsync('token')
    }

  return (
    <View>
        <Button onPress={onLogout} >
            Reset
        </Button>
    </View>
  )
}

export default Resources;