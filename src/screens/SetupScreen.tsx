import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import CustomButton from '../components/CustomButon';

const SetupScreen: React.FC = () => {
  const navigation = useNavigation();
  const [selectedOption, setSelectedOption] = useState<string | null>('7 - 8 hours');

  const sleepOptions = [
    { emoji: '😪', label: 'Less than 6 hours' },
    { emoji: '😌', label: '6 - 7 hours' },
    { emoji: '☺️', label: '7 - 8 hours' },
    { emoji: '😏', label: '8 - 9 hours' },
    { emoji: '😅', label: 'More than 9 hours' },
  ];

  const handleContinue = () => {
    navigation.navigate('MainApp');
  };

  return (
    <View style={styles.container}>
      {}
      <View style={styles.progressContainer}>
        <TouchableOpacity>
          <Icon name="arrow-left" size={wp('6%')} color="black" />
        </TouchableOpacity>
        <View style={styles.progressBarContainer}>
          <View style={styles.progressBar} />
        </View>
        <Text style={styles.stepText}>1/6</Text>
      </View>

      {}
      <Text style={styles.title}>
        How long do you usually <Text style={styles.highlight}>Sleep</Text> at Night? 😴
      </Text>
      <Text style={styles.subtitle}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </Text>

      {}
      {sleepOptions.map((option) => (
        <TouchableOpacity
          key={option.label}
          style={[
            styles.option,
            selectedOption === option.label && styles.selectedOption,
          ]}
          onPress={() => setSelectedOption(option.label)}
        >
          <Text style={styles.optionText}>
            {option.emoji} {option.label}
          </Text>
        </TouchableOpacity>
      ))}
      <CustomButton title="Continue" onPress={handleContinue} style={styles.button} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    paddingHorizontal: wp('5%'),
    paddingTop: hp('5%'),
  },
  progressContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: hp('3%'),
  },
  progressBarContainer: {
    flex: 1,
    height: hp('1.2%'),
    width: wp('60%'),
    backgroundColor: '#E0E0E0',
    borderRadius: hp('0.6%'),
    marginHorizontal: wp('3%'),
  },
  progressBar: {
    width: wp('10%'),
    height: '100%',
    backgroundColor: '#4CAF50',
    borderRadius: hp('0.6%'),
  },
  stepText: {
    fontSize: wp('4%'),
    fontWeight: '500',
    color: '#333',
  },
  title: {
    fontSize: wp('7%'),
    fontWeight: 'bold',
    color: '#222',
    textAlign: 'center',
    marginBottom: hp('1%'),
  },
  highlight: {
    color: '#4CAF50',
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: wp('4.5%'),
    color: '#666',
    textAlign: 'center',
    marginBottom: hp('4%'),
  },
  option: {
    width: '100%',
    paddingVertical: hp('2%'),
    paddingHorizontal: wp('4%'),
    borderRadius: wp('2.5%'),
    borderWidth: 1,
    borderColor: '#E0E0E0',
    marginBottom: hp('1.5%'),
  },
  selectedOption: {
    borderColor: '#4CAF50',
  },
  optionText: {
    fontSize: wp('4.5%'),
    color: '#222',
  },
  button: {
    position: 'absolute',
    bottom: hp('5%'),
    width: wp('80%'),
    alignSelf: 'center',
  },
});

export default SetupScreen;
