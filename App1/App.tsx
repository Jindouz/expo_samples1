import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Text>Open up App.tsx to start working on your app!</Text> */}
      <Text style={{fontSize: 200, color: 'red', fontWeight: 'bold'}}>Yo!</Text>
      <Image source={require('./assets/cat2.jpg')} style={[styles.image, { marginBottom: 15 }]} />
      <Image source={{ uri: 'https://picsum.photos/201/200' }} style={styles.image} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 320,
    height: 250,
    resizeMode: 'cover', // Adjust the resizeMode as per your requirement
  },
});
