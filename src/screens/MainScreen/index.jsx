import React from 'react';
import { View, ScrollView, Text, TouchableOpacity, Dimensions } from 'react-native';
import { BlurView } from 'expo-blur';
import { LinearGradient } from 'expo-linear-gradient';
import { FontAwesome } from 'react-native-vector-icons';
import { mainStyles } from '../../styles/MainStyles';
import { mainButtonGradient, gradientEnd } from '../../styles/MainStyles';
import mainScreenStyles from './style';
import AlternativeSignUp from '../../components/AlternativeSignUp';
import Header from '../../components/Header';
import Note from '../../components/Note';
import AddButton from '../../components/AddButton';


const MainScreen = () => {
  return (
    <View style={mainStyles.screenSettings}>
      <Header/>
      <ScrollView style={[mainStyles.screenSettings, mainScreenStyles.screenSettings]}>
        <View style={mainStyles.equalizer}>
          <Note/>
        </View>
      </ScrollView>
      <BlurView intensity={25} style={mainScreenStyles.addButtonContainer}>
        <AddButton />
      </BlurView>
    </View>
  );
};

export default MainScreen;
