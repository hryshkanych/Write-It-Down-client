import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import buttonStyles from './style';
import { mainButtonGradient, gradientEnd } from '../../styles/MainStyles';

const TapButton = ({ onPress, buttonText }) => (
  <TouchableOpacity style={[buttonStyles.mainButton, buttonStyles.mainButton]} onPress={onPress}>
    <LinearGradient
      colors={[mainButtonGradient.firstColor, mainButtonGradient.secondColor, mainButtonGradient.thirdColor]}
      end={gradientEnd}
      style={buttonStyles.gradient}
    >
      <Text style={buttonStyles.buttonText}>{buttonText}</Text>
    </LinearGradient>
  </TouchableOpacity>
);

export default TapButton;
