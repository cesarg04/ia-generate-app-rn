import { stylesMap } from "@/shared/constants/alerts/alerts-colors.const";
import useModal from "@/shared/hooks/useModal";
import { StyleSheet, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Button, Text } from "react-native-paper";
import theme from "@/shared/theme/theme";

export interface ICustomAlertProps {
  type: "success" | "error" | "warning" | "info" | "default";
  // color: TypographyProps["color"]; //
  message: string;
  declineBtnMessage?: string;
  confirmBtnMessage?: string;
}

const CustomAlertTemplate = (props: ICustomAlertProps) => {
  const stylesType = stylesMap[props.type];

  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Ionicons
          name={stylesType.icon as any}
          size={60}
          color={stylesType.iconColor}
        />
      </View>
      <View>
        <Text style={[stylesType.text]}>{props.message}</Text>
      </View>

      <View style={styles.buttonsContainer}>
        <View style={styles.buttonContent} >
          <Button buttonColor={theme.colors.error} mode="outlined">
            Cancelar
          </Button>
        </View>

        <View style={styles.buttonContent} >
          <Button buttonColor={theme.colors.primary} mode="contained">
            Ok
          </Button>
        </View>
      </View>
    </View>
  );
};

export default CustomAlertTemplate;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    textAlign: "center",
  },
  iconContainer: {},
  buttonsContainer: {
    width: "100%",
    display: "flex",
    justifyContent: "space-around",
    flexDirection: 'row',
    marginTop: 10
  },
  buttonContent: {
    width: "40%",
  },
});
