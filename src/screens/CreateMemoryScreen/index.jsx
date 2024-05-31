import React from 'react';
import { View, ScrollView, Text, TouchableOpacity, Dimensions } from 'react-native';
import { BlurView } from 'expo-blur';
import { LinearGradient } from 'expo-linear-gradient';
import { FontAwesome } from 'react-native-vector-icons';
import { mainStyles } from '../../styles/MainStyles';
import { mainButtonGradient, gradientEnd } from '../../styles/MainStyles';
import createMemoryScreenStyles from './style';
import AlternativeSignUp from '../../components/AlternativeSignUp';
import CreatingHeader from '../../components/CreatingHeader';
import Note from '../../components/Note';
import AddButton from '../../components/AddButton';

const CreateMemoryScreen = () => {
  return (
    <View style={mainStyles.screenSettings}>
      <CreatingHeader/>
      <ScrollView style={[mainStyles.screenSettings, createMemoryScreenStyles.screenSettings]}>
        <View style={mainStyles.equalizer}>
        </View>
      </ScrollView>
    </View>
  );
};

export default CreateMemoryScreen;
