import { Text, TouchableOpacity, View, StyleSheet } from "react-native"

interface buttonProps {
  text: string;
}

export const Button = ({
  text,
}: buttonProps) => {
  return(
    <TouchableOpacity style={styles.button}>
    <Text style={styles.buttonText}>
    {text}
    </Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#713ddd',
    paddingVertical: 15, 
    paddingHorizontal: 30,
    borderRadius: 25, 
    alignItems: 'center',
    marginVertical: 10,
    width: 300,
  },
  buttonText: {
    color: '#fff', 
    fontWeight: 'bold',
    fontSize: 20, 
  },
});
