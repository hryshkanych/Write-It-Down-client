import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { BlurView } from 'expo-blur';
import { FontAwesome } from 'react-native-vector-icons';
import { mainStyles } from '../../styles/MainStyles';
import headerStyles from './style';
import { fontColors, mainAppColors } from '../../styles/MainStyles';

const Header = () => {
  return (
    <BlurView intensity={50} style={[headerStyles.headerContainer, mainStyles.equalizer]}>
      <Text style={[mainStyles.headerText, headerStyles.headerText]}>Memories</Text>
      <TouchableOpacity style={headerStyles.filterButton}>
        <FontAwesome name="bars" size={18} color={'white'} />
      </TouchableOpacity>
    </BlurView>
  );
};

export default Header;
