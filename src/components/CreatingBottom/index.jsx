import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { BlurView } from 'expo-blur';
import { FontAwesome, MaterialIcons } from 'react-native-vector-icons';
import { mainStyles } from '../../styles/MainStyles';
import creatingBottomStyles from './style';
import { fontColors, mainAppColors } from '../../styles/MainStyles';



const CreatingBottom = () => {
  return (
    <BlurView intensity={50} style={[creatingBottomStyles.bottomContainer, mainStyles.equalizer]}>
      <View style={creatingBottomStyles.optionsContainer}>
        <FontAwesome name="image" size={28} color={mainAppColors.icon}/>
        <FontAwesome name="camera" size={28} color={mainAppColors.icon}/>
        <FontAwesome name="signal" size={28} color={mainAppColors.icon}/>
      </View>
    </BlurView>
  );
};

export default CreatingBottom;
