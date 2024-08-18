import {
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  View,
} from 'react-native';
import { BLACK, GRAY, PRIMARY } from '../colors';
import { useState } from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export enum KeyboardTypes {
  DEFAULT = 'default',
  EMAIL = 'email-address',
}

export enum ReturnKeyTypes {
  DONE = 'done',
  NEXT = 'next',
}

export enum IconNameTypes {
  EMAIL = 'email',
  PASSWORD = 'lock',
}

const Input = (props: InputPropsType) => {
  const { title, placeholder, value, iconName, ...remainProps } = props;
  const [isFocused, setIsFocused] = useState(false);

  return (
    <View style={styles.container}>
      <Text
        style={[
          styles.title,
          value !== '' && styles.hasValueTitle,
          isFocused && styles.focusedTitle,
        ]}
      >
        {title}
      </Text>
      <View>
        <TextInput
          {...remainProps}
          style={[
            styles.input,
            value !== '' && styles.hasValueInput,
            isFocused && styles.focusedInput,
          ]}
          placeholder={placeholder ?? title}
          placeholderTextColor={GRAY.DEFAULT}
          autoCapitalize="none"
          autoCorrect={false}
          textContentType="none"
          keyboardAppearance="light"
          value={value}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
        <View style={styles.icon}>
          <MaterialCommunityIcons
            name={iconName}
            size={20}
            color={(() => {
              switch (true) {
                case isFocused:
                  return PRIMARY.DEFAULT;
                case !!value:
                  return BLACK;
                default:
                  return GRAY.DEFAULT;
              }
            })()}
          ></MaterialCommunityIcons>
        </View>
      </View>
    </View>
  );
};

type InputPropsType = {
  title: string;
  value: string;
  placeholder?: string;
  iconName: IconNameTypes;
} & TextInputProps;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingHorizontal: 20,
    marginVertical: 10,
  },
  title: {
    marginBottom: 4,
    color: GRAY.DEFAULT,
  },
  hasValueTitle: {
    color: BLACK,
  },
  focusedTitle: {
    fontWeight: '600',
    color: PRIMARY.DEFAULT,
  },
  input: {
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 120,
    height: 42,
    borderColor: GRAY.DEFAULT,
    paddingLeft: 30,
  },
  hasValueInput: {
    borderColor: BLACK,
    color: BLACK,
  },
  focusedInput: {
    borderWidth: 2,
    borderColor: PRIMARY.DEFAULT,
    color: PRIMARY.DEFAULT,
  },
  icon: {
    position: 'absolute',
    left: 8,
    height: '100%',
    justifyContent: 'center',
  },
});

export default Input;
