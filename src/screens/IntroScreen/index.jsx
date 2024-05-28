import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { mainStyles, mainButtonGradient, gradientEnd} from '../../styles/MainStyles';
import IntroScreenStyles from './style';
import Wave from '../../components/Wave';

const IntroScreen = () => {
  return (
    <View style={mainStyles.screenSettings}>
      <Wave/>
      <View style={[mainStyles.equalizer]}>
        <View style={IntroScreenStyles.contentContainer}>
          <View style={IntroScreenStyles.nameTextContainer}>
            <Text style={[mainStyles.mainHeaderText, IntroScreenStyles.mainHeaderText]}>Write It Down</Text>
            <Text style={[mainStyles.textDescription, IntroScreenStyles.textDescription]}>
              This is a mobile diary app that allows you to document events, 
              record emotions, and attach photos and audio. Capture your 
              memories effortlessly and keep track of your daily experiences 
              all in one place.
            </Text>
          </View>
          <TouchableOpacity style={mainStyles.mainButton}>
            <LinearGradient
              colors={[mainButtonGradient.firstColor, mainButtonGradient.secondColor, mainButtonGradient.thirdColor]}
              end={gradientEnd}
              style={mainStyles.gradient}
            >
              <Text style={mainStyles.buttonText}>Get Started</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default IntroScreen;