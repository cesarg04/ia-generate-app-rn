import theme from "@/shared/theme/theme"
import { useNavigation, useRouter } from "expo-router"
import { useEffect } from "react"
import { View, Text } from "react-native"
import { Button } from "react-native-paper"


const index = () => {

  const navigation = useNavigation()
  const router = useRouter()
  useEffect(() => {
    
    
    // router.replace('/sign-in')
    
  }, [])

  const onNavigate = () => {
    console.log("Navigate")
    router.push('/sign-in');
  }
  
  return (
    <View >
        <Text>Main screen super main</Text>
        <Button
          onPress={onNavigate}
        >
          Go to button
        </Button>
    </View>
  )
}

export default index