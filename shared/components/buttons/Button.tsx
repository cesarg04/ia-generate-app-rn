import { View, Text, Platform } from "react-native";
import React from "react";
import {
  ButtonProps,
  Button as ButtonPaper,
  ActivityIndicator,
} from "react-native-paper";
import { fontFamilies } from "@/shared/constants/fonts.const";

interface IButtonProps extends ButtonProps {
  children: React.ReactNode;
  color?: string;
  isLoading?: boolean;
}

const Button = (props: IButtonProps) => {
  const config: ButtonProps = {
    ...props,
    style: {
      backgroundColor: props.color ? props.color : undefined,
    },
    contentStyle: {
      height: 70,
    },
    labelStyle: {
      fontSize: 23,
      fontFamily: Platform.select(fontFamilies.Bold),
      paddingTop: 10,
    },
    children: props.isLoading ? (
      <ActivityIndicator size={"large"} color="white" />
    ) : (
      props.children
    ),
  };

  return <ButtonPaper {...config} />;
};

export default Button;
