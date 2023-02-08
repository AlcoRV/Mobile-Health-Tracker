import { StyleSheet, Text, View } from 'react-native';
import { NavigatorContainer } from './navigation/NavigatorContainer';

export default function App() {
  return (
    <NavigatorContainer />
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
