import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { BlurView } from 'expo-blur';
import { FontAwesome } from 'react-native-vector-icons';
import { mainStyles } from '../../styles/MainStyles';
import creatingBottomStyles from './style';
import { mainAppColors } from '../../styles/MainStyles';

const CreatingBottom = ({ onImagePress, onCameraPress, onSignalPress }) => {
  return (
    <BlurView intensity={50} style={[creatingBottomStyles.bottomContainer, mainStyles.equalizer]}>
      <View style={creatingBottomStyles.optionsContainer}>
        <TouchableOpacity onPress={onImagePress}>
          <FontAwesome name="image" size={28} color={mainAppColors.icon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={onCameraPress}>
          <FontAwesome name="camera" size={28} color={mainAppColors.icon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={onSignalPress}>
          <FontAwesome name="signal" size={28} color={mainAppColors.icon} />
        </TouchableOpacity>
      </View>
    </BlurView>
  );
};

export default CreatingBottom;
