import React from 'react';
import { View, Text, TouchableOpacity, ImageBackground } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { mainStyles, mainButtonGradient, gradientEnd } from '../../styles/MainStyles';
import loginScreenStyles from './style';

// Ensure the correct path to your image
const backgroundImage = require('../../../assets/Images/viewLogin.png');

const LoginScreen = () => {
  return (
    <View style={mainStyles.screenSettings}>
      <ImageBackground
        source={backgroundImage}
        style={loginScreenStyles.backdroundView}
        resizeMode="cover" 
      />
      <View style={loginScreenStyles.contentContainer}>
        <View style={[mainStyles.equalizer]}>
        
        </View>
      </View>
    </View>
  );
};

export default LoginScreen;
