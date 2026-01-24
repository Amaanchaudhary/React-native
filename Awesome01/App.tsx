import react from 'react';

import {
  View,
  Text,
  Button,
  Alert,
} from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';


function App() {
  return (
    <SafeAreaView>
      <View>
        <Text>Hello World!</Text>
        <Text>Hello World!</Text>
        <Text>Hello World!</Text>
        <Text>Hello World!</Text>
      </View>
      <Button title="Press Me" onPress={() => Alert.alert("Hello")} />
    </SafeAreaView>
  )
}

export default App;