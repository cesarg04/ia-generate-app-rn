import { View, Text } from 'react-native'
import React from 'react'
import { ButtonProps } from 'react-native-paper'

interface IButtonProps extends ButtonProps {
    children: React.ReactNode
 }

const Button = (props: IButtonProps) => {

    return (
        <Button { ...props } />
    )
}

export default Button