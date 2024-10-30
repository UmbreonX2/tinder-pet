import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from './src/componets/button';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello world!</Text>
      <StatusBar style="auto" />
      <Button text={'Fafa'}/>
      <Button text={'Jose valdo'}/>
      <Button text={'gente ruim'}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
