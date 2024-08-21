import useModal from "@/shared/hooks/useModal"

export interface ICustomAlertProps {

    type: "success" | "error" | "warning" | "info" | "default";
    // color: TypographyProps["color"]; //
    message: string;
    declineBtnMessage?: string;
    confirmBtnMessage?: string;
}

const CustomAlert = () => {

    const { modal } = useModal()

  return (
    <></>
  )
}

export default CustomAlert