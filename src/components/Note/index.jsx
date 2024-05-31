import React from 'react';
import { View, TextInput, Text, TouchableOpacity } from 'react-native';
import { FontAwesome } from 'react-native-vector-icons';
import { MaterialIcons } from 'react-native-vector-icons';
import noteStyles from './style';
import { LinearGradient } from 'expo-linear-gradient';
import { mainButtonGradient, gradientEnd } from '../../styles/MainStyles';
import { mainStyles } from '../../styles/MainStyles';
import { fontColors, mainAppColors } from '../../styles/MainStyles';


const Note = () => (
  <View style={noteStyles.noteContainer}>
    <View style={noteStyles.header}>
      <View style={noteStyles.contentContainer}>
        <Text style={mainStyles.textDescriptionGrey}>Saturday, May 2, 2024</Text>
        <TouchableOpacity style={noteStyles.actionButton}>
          <MaterialIcons name="more-vert" size={26} color={mainAppColors.icon} style={{ transform: [{ rotate: '90deg' }]}} />
        </TouchableOpacity>
      </View>
      <View style={noteStyles.line}></View>
    </View>
  </View>
);

export default Note;
