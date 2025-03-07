import React from 'react';
import { TextInput, StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const CustomTextInput = ({ placeholder, value, onChangeText, multiline = false, style }:any) => {
  return (
    <TextInput
      style={[styles.input, multiline && styles.multiline, style]}
      placeholder={placeholder}
      value={value}
      onChangeText={onChangeText}
      multiline={multiline}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: wp(4),
    borderRadius: wp(3),
    fontSize: wp(4),
    marginVertical: hp(1.5),
    width: wp(85),
    alignSelf: 'center',
  },
  multiline: {
    height: hp(12),
    textAlignVertical: 'top',
  }
});

export default CustomTextInput;
