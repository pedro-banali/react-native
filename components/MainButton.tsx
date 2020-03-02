import React, { FC } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform,
  Touchable,
  TouchableMixin
} from 'react-native';
import Colors from '../constants/colors';

export const MainButton: FC<{ style?: {}; onPress: () => void }> = ({
  style,
  onPress,
  children
}) => {
  let ButtonComponent: any = TouchableOpacity;
  if (Platform.OS === 'android' && Platform.Version >= 21) {
    ButtonComponent = TouchableNativeFeedback;
  }
  return (
    <View style={styles.buttonContainer}>
      <ButtonComponent activeOpacity={0.6} onPress={onPress}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>{children}</Text>
        </View>
      </ButtonComponent>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    borderRadius: 25,
    overflow: 'hidden'
  },
  button: {
    backgroundColor: Colors.primary,
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25
  },
  buttonText: {
    color: 'white',
    fontFamily: 'open-sans',
    fontSize: 18
  }
});
