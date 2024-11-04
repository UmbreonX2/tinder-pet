import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Button as RegisterButton} from './src/components/button';

export default function App() {
  return (
    <View style={alignment.container}>
      <StatusBar style="auto" />
      <RegisterButton text={'SIGN UP'} />
      <RegisterButton text={'REGISTER'} />
      <RegisterButton text={'CONFIRM'} />
    </View>
  );
}

const alignment = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
