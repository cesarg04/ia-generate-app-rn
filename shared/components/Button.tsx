import { View, Text } from 'react-native'
import React from 'react'
import { ButtonProps } from 'react-native-paper'

interface IButtonProps extends ButtonProps {
    children: React.ReactNode
 }

const Button = (props: IButtonProps) => {

    const config: ButtonProps = {
        ...props,
        style: {
            height: 70
        }
    }

    return (
        <Button {...config} />
    )
}

export default Button