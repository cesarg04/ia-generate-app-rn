import React, { useEffect } from "react";
import { Text } from "react-native-paper";
import { Platform, StyleSheet } from "react-native";
import { fontFamilies } from "@/shared/constants/fonts.const";

interface IFormLabelProps {
  children: React.ReactNode;
}

const FormLabel = (props: IFormLabelProps) => {
  return (
    <Text
      style={{
        ...styles.text,
        fontFamily: Platform.select(fontFamilies.Bold),
      }}
    >
      {props.children}
    </Text>
  );
};

export default FormLabel;

const styles = StyleSheet.create({
  text: {
    color: "white",
    fontSize: 20,
    fontWeight: "600",
  },
});
