import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const slides = [
  {
    heading: 'Explore Our App Features',
    subText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus.',
  },
  {
    heading: 'Seamless Connectivity',
    subText: 'Experience smooth and effortless connection with our powerful integrations and real-time data syncing.',
  },
  {
    heading: 'Start Your Journey',
    subText: 'Join our platform today and take advantage of amazing features tailored for you!',
  },
];

const WelcomeScreen = () => {
  const navigation = useNavigation();
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleSkip = () => navigation.navigate('Info');
  const handleNext = () => {
    if (currentIndex < slides.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      navigation.navigate('Info');
    }
  };
  const handleDotPress = (index) => setCurrentIndex(index);

  return (
    <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.topSection}>
        <Image source={require('../assets/images/rectangle.png')} style={styles.phoneMockup} resizeMode="contain" />
        <TouchableOpacity style={styles.skipButton} onPress={handleSkip}>
          <Text style={styles.skipText}>Skip</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.bottomSection}>
        <Text style={styles.heading}>{slides[currentIndex].heading}</Text>
        <Text style={styles.subText}>{slides[currentIndex].subText}</Text>
        <View style={styles.progressContainer}>
          {slides.map((_, index) => (
            <TouchableOpacity key={index} onPress={() => handleDotPress(index)}>
              <View style={[styles.progressDot, currentIndex === index ? styles.activeDot : null]} />
            </TouchableOpacity>
          ))}
        </View>
        <TouchableOpacity style={styles.continueButton} onPress={handleNext}>
          <Text style={styles.continueText}>{currentIndex < slides.length - 1 ? 'Continue' : 'Get Started'}</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  topSection: {
    width: '100%',
    height: hp(55),
    backgroundColor: '#4CAF50',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomLeftRadius: wp(15),
    borderBottomRightRadius: wp(15),
    overflow: 'hidden',
  },
  phoneMockup: {
    width: wp(80),
    height: wp(92),
    marginTop: hp(14),
  },
  skipButton: {
    position: 'absolute',
    top: hp(4),
    right: wp(5),
    padding: wp(2),
    backgroundColor: '#fff',
    borderRadius: 5,
    elevation: 3,
  },
  skipText: {
    color: '#4CAF50',
    fontWeight: '600',
    fontSize: wp(3.5),
  },
  bottomSection: {
    padding: wp(5),
  },
  heading: {
    fontSize: wp(6),
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: hp(2),
  },
  subText: {
    fontSize: wp(4),
    color: '#666',
    textAlign: 'center',
    marginBottom: hp(5),
    lineHeight: hp(3),
    paddingHorizontal: wp(5),
  },
  progressContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: hp(2),
  },
  progressDot: {
    width: wp(3),
    height: wp(3),
    borderRadius: wp(1.5),
    backgroundColor: '#ccc',
    marginHorizontal: wp(1),
  },
  activeDot: {
    backgroundColor: '#4CAF50',
    width: wp(8),
    borderRadius: wp(4),
  },
  continueButton: {
    backgroundColor: '#4CAF50',
    padding: hp(2),
    borderRadius: wp(3),
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: hp(2),
  },
  continueText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: wp(4.5),
  },
});

export default WelcomeScreen;
