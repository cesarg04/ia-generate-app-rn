import theme from "@/shared/theme/theme"
import { router } from "expo-router"
import { useEffect } from "react"
import { View, Text } from "react-native"
import { Button } from "react-native-paper"


const index = () => {

  
  useEffect(() => {
    
    
    // router.replace('/sign-in')
    
  }, [])
  
  return (
    <View >
        <Text>Main screen super main</Text>
        <Button
          onPress={() => router.navigate('/sign-in')}
        >
          Go to button
        </Button>
    </View>
  )
}

export default index