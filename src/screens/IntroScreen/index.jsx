import React from 'react';
import { View, Text } from 'react-native';
import { mainStyles } from '../../styles/MainStyles';
import introScreenStyles from './style';
import DrawingGirl from '../../components/DrawingGirl';
import TapButton from '../../components/Button';
import { useNavigation } from '@react-navigation/native';


const IntroScreen = () => {
  const navigation = useNavigation();

  const handleGetStartedPress = () => {
    navigation.navigate('Sign-up');
  }

  return (
    <View style={[mainStyles.screenSettings, introScreenStyles.screenSettings]}>
      <DrawingGirl/>
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