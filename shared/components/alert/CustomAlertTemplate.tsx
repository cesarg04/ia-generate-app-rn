import { stylesMap } from "@/shared/constants/alerts/alerts-colors.const";
import useModal from "@/shared/hooks/useModal";
import { StyleSheet, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Button, Text } from "react-native-paper";
import theme from "@/shared/theme/theme";
import { useMemo } from "react";

export interface ICustomAlertProps {
  type: "success" | "error" | "warning" | "info" | "default";
  message: string;
  declineBtnMessage?: string;
  confirmBtnMessage?: string;
  onClose?: () => void;
  onConfirm?: () => void;
}

const CustomAlertTemplate = (props: ICustomAlertProps) => {
  const stylesType = stylesMap[props.type];

  const showButtonDecline = useMemo(() => {
    return (
      props.type === "default" ||
      props.type === "info" ||
      props.type === "warning"
    );
  }, [props.type]);

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
        <Text style={[stylesType.text, { textAlign: "center" }]}>
          {props.message}
        </Text>
      </View>

      <View style={styles.buttonsContainer}>
        {showButtonDecline && (
          <View style={styles.buttonContent}>
            <Button
              textColor={theme.colors.inverseOnSurface}
              mode="outlined"
              onPress={props.onClose}
            >
              {props.declineBtnMessage ? props.declineBtnMessage : "Cancelar"}
            </Button>
          </View>
        )}

        <View style={styles.buttonContent}>
          <Button
            buttonColor={theme.colors.primary}
            mode="contained"
            onPress={props.onConfirm}
          >
            {props.confirmBtnMessage ? props.confirmBtnMessage : "Ok"}
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
    paddingVertical: 10,
  },
  iconContainer: {},
  buttonsContainer: {
    width: "100%",
    display: "flex",
    justifyContent: "space-around",
    flexDirection: "row",
    alignItems: "flex-end",
    marginTop: 10,
    flex: 1,
  },
  buttonContent: {
    width: "40%",
  },
});
