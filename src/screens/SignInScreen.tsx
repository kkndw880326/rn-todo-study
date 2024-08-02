import { Image, StyleSheet, Text, View } from 'react-native';
import TestImage from '../../assets/test.png';

const SignInScreen = () => {
  return (
    <View style={styles.container}>
      <Image source={TestImage} style={styles.image}></Image>
      <Text>SignInScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200,
  },
});

export default SignInScreen;
