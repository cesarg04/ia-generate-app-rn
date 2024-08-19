import { View, Text, NativeSyntheticEvent, TextInputChangeEventData } from 'react-native'
import React from 'react'
import { TextInput, TextInputProps } from 'react-native-paper';
import { useFormControlContext } from './FormControl';

interface ITextFieldProps extends TextInputProps { }

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
    }

    return (
        <TextInput {...config} />
    )
}

export default TextField;