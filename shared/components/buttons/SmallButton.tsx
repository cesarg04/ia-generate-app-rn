import { Button, ButtonProps } from "react-native-paper"

interface ISmallButtonProps extends ButtonProps {
    color?: string;
}

const SmallButton = (props: ISmallButtonProps) => {

    const config: ButtonProps = {
        ...props,
        // buttonColor: 
    }

  return (
    <Button { ...config } />
  )
}

export default SmallButton