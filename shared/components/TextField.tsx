import { View, Text, NativeSyntheticEvent, TextInputChangeEventData, StyleProp, TextStyle, ViewStyle } from 'react-native'
import React from 'react'
import { TextInput, TextInputProps } from 'react-native-paper';
import { useFormControlContext } from './FormControl';
import theme from '../theme/theme';

interface ITextFieldProps extends TextInputProps {
    style?: StyleProp<TextStyle>;
    otulineStyles?: StyleProp<ViewStyle>
 }

const TextField = (props: ITextFieldProps) => {
    const { field, fieldState: { error } } = useFormControlContext()
    const handleChange = (e: NativeSyntheticEvent<TextInputChangeEventData>) => {
        field.onChange(e.nativeEvent.text)
    }


    const config: TextInputProps = {
        ...props,
        mode: 'outlined',
        error: error?.message ? true : false,
        onChange: handleChange,
        ref: field.ref,
        onBlur: field.onBlur,
        textColor: 'white',
        style: {
            backgroundColor: theme.colors.inputs,
            height: 70,
            fontSize: 20,
        },
        outlineStyle: {
            borderRadius: 20,
            borderColor: theme.colors.inputs,
        }
    }

    return (
        <TextInput {...config} />
    )
}

export default TextField;