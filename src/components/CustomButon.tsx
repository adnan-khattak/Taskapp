import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const CustomButton = ({ title, onPress, backgroundColor = '#4CAF50', textColor = '#fff', style }:any) => {
  return (
    <TouchableOpacity 
      style={[styles.button, { backgroundColor }, style]} 
      onPress={onPress}
    >
      <Text style={[styles.text, { color: textColor }]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingVertical: hp(2),
    paddingHorizontal: wp(5),
    borderRadius: wp(3),
    alignItems: 'center',
    justifyContent: 'center',
    width: wp(80),
    alignSelf: 'center',
    marginVertical: hp(1.5),
  },
  text: {
    fontSize: wp(4.5),
    fontWeight: 'bold',
  }
});

export default CustomButton;
