import {
  View,
  Text,
  NativeSyntheticEvent,
  TextInputChangeEventData,
  StyleProp,
  TextStyle,
  ViewStyle,
  Platform,
} from "react-native";
import React, { useState } from "react";
import { shadow, TextInput, TextInputProps } from "react-native-paper";
import { useFormControlContext } from "../form-control/FormControl";
import theme from "../../theme/theme";
import { fontFamilies } from "@/shared/constants/fonts.const";

interface ITextFieldProps extends TextInputProps {
  style?: StyleProp<TextStyle>;
  otulineStyles?: StyleProp<ViewStyle>;
  type?: "pass" | "normal";
}

const TextField = (props: ITextFieldProps) => {
  const {
    field,
    fieldState: { error },
  } = useFormControlContext();
  const handleChange = (e: NativeSyntheticEvent<TextInputChangeEventData>) => {
    field.onChange(e.nativeEvent.text);
  };
  const [isShowPass, setIsShowPass] = useState(true);

  const config: TextInputProps = {
    ...props,
    ...field,
    mode: "outlined",
    error: !!error?.message,
    onChange: handleChange,
    ref: field.ref,
    onBlur: field.onBlur,
    textColor: "white",
    style: {
      backgroundColor: theme.colors.inputs,
      height: 70,
      fontSize: 20,
    },
    outlineStyle: {
      borderRadius: 20,
      borderColor: theme.colors.inputs,
    },
    placeholderTextColor: "#ccc",
    right: props.right ? (
      props.right
    ) : props.type === "pass" ? (
      <TextInput.Icon
        icon="eye"
        color="white"
        onPress={() => setIsShowPass(!isShowPass)}
      />
    ) : undefined,
    secureTextEntry: props.secureTextEntry
      ? props.secureTextEntry
      : props.type === "pass"
      ? isShowPass
      : false,
  };

  return <TextInput {...config} />;
};

export default TextField;
