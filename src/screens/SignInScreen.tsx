import { Image, StyleSheet, View } from 'react-native';
import MainImage from '../../assets/main.png';
import Input, { KeyboardTypes, ReturnKeyTypes } from '../components/Input';
import SafeInputView from '../components/SafeInputView';

const SignInScreen = () => {
  return (
    <SafeInputView>
      <View style={styles.container}>
        <Image
          source={MainImage}
          style={styles.image}
          resizeMode="cover"
        ></Image>

        <Input
          title={'email'}
          placeholder="your@email.com"
          keyboardType={KeyboardTypes.EMAIL}
          returnKeyType={ReturnKeyTypes.NEXT}
        />
        <Input title={'password'} secureTextEntry />
      </View>
    </SafeInputView>
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
