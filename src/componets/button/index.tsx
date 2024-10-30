import { Text, View } from "react-native"

interface buttonProps {
  text: string;
}

export const Button = ({
  text,
}: buttonProps) => {
  return(
    <View>
      <Text>{text}</Text>
    </View>
  )
}