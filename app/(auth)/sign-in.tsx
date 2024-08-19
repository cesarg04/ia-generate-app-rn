import FormControl from '@/shared/components/FormControl';
import TextField from '@/shared/components/TextField';
import React from 'react'
import { Form, FormProvider, useForm } from 'react-hook-form';
import { View, Text, Alert } from 'react-native'
import { Button, MD3Theme, useTheme } from 'react-native-paper';
import { StyleSheet } from 'react-native';

const SignIn = () => {

    const formConfig = useForm({
        defaultValues: {
            hello: ""
        }
    })


    const onSubmit = (values: any) => {
        console.log(values)
        // Alert.alert(JSON.stringify(values))
    }

    const theme = useTheme()

    return (
        <FormProvider {...formConfig} >
            {/* <form style={{ width: "100%" }} onSubmit={formConfig.handleSubmit(onSubmit)} > */}
            <View  >

                <Text>

                </Text>

                <FormControl name='hello' >
                    <TextField />
                </FormControl>

                <Button
                    mode='contained'
                    onPress={formConfig.handleSubmit(onSubmit)}
                >
                    Send
                </Button>
            </View>

            {/* </form> */}
        </FormProvider>
    )
}

export default SignIn;

// const styles = StyleSheet.create({
//     container: (theme: any) => ({
//         flex: 1,
//         backgroundColor: theme.colors.
//     })
// })