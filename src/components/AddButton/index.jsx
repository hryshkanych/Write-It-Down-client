import React from 'react';
import { TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { FontAwesome } from 'react-native-vector-icons';
import { mainButtonGradient, gradientEnd } from '../../styles/MainStyles';
import addButtonStyles from './style';

const AddButton = ({ onPress }) => {
  return (
    <TouchableOpacity style={addButtonStyles.addButton} onPress={onPress}>
      <LinearGradient
        colors={[mainButtonGradient.firstColor, mainButtonGradient.secondColor, mainButtonGradient.thirdColor]}
        end={gradientEnd}
        style={addButtonStyles.gradient}
      >
        <FontAwesome name="plus" size={26} color="white" />
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default AddButton;
