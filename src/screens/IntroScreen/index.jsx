import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { mainStyles, mainButtonGradient, gradientEnd} from '../../styles/MainStyles';
import introScreenStyles from './style';
import Wave from '../../components/Wave';
import TapButton from '../../components/Button';

const IntroScreen = () => {
  const handleGetStartedPress = () => {
    
  }

  return (
    <View style={mainStyles.screenSettings}>
      <Wave/>
      <View style={[mainStyles.equalizer]}>
        <View style={introScreenStyles.contentContainer}>
          <View style={introScreenStyles.nameTextContainer}>
            <Text style={[mainStyles.mainHeaderText, introScreenStyles.mainHeaderText]}>Write It Down</Text>
            <Text style={[mainStyles.textDescription, introScreenStyles.textDescription]}>
              This is a mobile diary app that allows you to document events, 
              record emotions, and attach photos and audio. Capture your 
              memories effortlessly and keep track of your daily experiences 
              all in one place.
            </Text>
          </View>
          <TapButton onPress={handleGetStartedPress} buttonText="Get Started"/>
        </View>
      </View>
    </View>
  );
};

export default IntroScreen;