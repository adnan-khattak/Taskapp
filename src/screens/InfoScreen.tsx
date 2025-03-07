import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import CustomTextInput from '../components/CustomTextInput';
import CustomButton from '../components/CustomButon';

const InfoScreen: React.FC = () => {
  const navigation = useNavigation();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleNext = () => {
    console.log('Name:', name);
    console.log('Email:', email);
    navigation.navigate('Setup');
  };

  return (
    <View style={styles.container}>
      {}
      <Text style={styles.title}>
        We need some Details? <Text style={styles.emoji}>🫣</Text>
      </Text>
      <Text style={styles.subtitle}>
        Norem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie.
      </Text>

      {}
      <Text style={styles.label}>Name</Text>
      <CustomTextInput 
        placeholder="eg. Muzamil Mehdi" 
        value={name} 
        onChangeText={setName} 
      />

      <Text style={styles.label}>Mail</Text>
      <CustomTextInput 
        placeholder="abc@xyz.com" 
        value={email} 
        onChangeText={setEmail} 
      />

      {}
      <CustomButton title="Next" onPress={handleNext} style={styles.button} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    paddingHorizontal: wp('5%'),
    paddingTop: hp('6%'),
  },
  title: {
    fontSize: wp('6%'),
    fontWeight: 'bold',
    color: '#222',
    textAlign: 'left',
  },
  emoji: {
    fontSize: wp('5%'),
  },
  subtitle: {
    fontSize: wp('4%'),
    color: '#666',
    marginTop: hp('1%'),
    marginBottom: hp('4%'),
  },
  label: {
    fontSize: wp('4%'),
    fontWeight: '600',
    color: '#222',
    marginBottom: hp('1%'),
  },
  button: {
    position: 'absolute',
    bottom: hp('5%'),
    width: wp('80%'),
    alignSelf: 'center',
  },
});

export default InfoScreen;
