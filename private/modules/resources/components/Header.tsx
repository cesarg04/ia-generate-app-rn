import React from "react";
import { View, StyleSheet, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { DrawerActions } from "@react-navigation/native";
import { IconButton, ToggleButton } from "react-native-paper";

const HeaderComponent = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <ToggleButton
        icon="menu"
        value="left"
        iconColor="white"
        size={30}
        onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
        style={{
          position: "absolute",
          left: 10,
        }}
      />
    </View>
  );
};

export default HeaderComponent;

const styles = StyleSheet.create({
  container: {
    height: 50,
    borderBottomColor: "red",
    position: "relative",
    marginVertical: 5,
  },
});
