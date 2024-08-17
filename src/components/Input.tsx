import {
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  View,
} from 'react-native';
import { GRAY } from '../colors';

export enum KeyboardTypes {
  DEFAULT = 'default',
  EMAIL = 'email-address',
}

export enum ReturnKeyTypes {
  DONE = 'done',
  NEXT = 'next',
}

const Input = (props: InputPropsType) => {
  const { title, placeholder, ...remainProps } = props;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <TextInput
        {...remainProps}
        style={styles.input}
        placeholder={placeholder ?? title}
        placeholderTextColor={GRAY.DEFAULT}
        autoCapitalize="none"
        autoCorrect={false}
        textContentType="none"
        keyboardAppearance="light"
      />
    </View>
  );
};

type InputPropsType = {
  title: string;
  placeholder?: string;
} & TextInputProps;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingHorizontal: 20,
    marginVertical: 10,
  },
  title: {
    marginBottom: 4,
  },
  input: {
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 120,
    height: 42,
  },
});

export default Input;
