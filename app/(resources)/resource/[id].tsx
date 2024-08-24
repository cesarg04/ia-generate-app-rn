import { useRoute } from '@react-navigation/native'
import { useLocalSearchParams } from 'expo-router';
import React from 'react'
import { View, Text } from 'react-native'

const ResourcesById = () => {

  const { id } = useLocalSearchParams<{ id?: string }>();

  return (  
    <View>
        <Text>
            { id! }
        </Text>
    </View>
  )
}

export default ResourcesById