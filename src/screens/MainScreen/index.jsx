import React, { useEffect, useState, useCallback } from 'react';
import { View, ScrollView, Text, TouchableOpacity, Image, Dimensions } from 'react-native'; // Import Image component
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
import { useUserContext } from '../../contexts/userContext';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { getAllMemories } from '../../services/memoryService';

const MainScreen = () => {
  const { user } = useUserContext();
  const navigation = useNavigation();
  const [memories, setMemories] = useState([]);

  const fetchMemories = async () => {
    try {
      const memoriesData = await getAllMemories(user._id);
      setMemories(memoriesData.memories);
    } catch (error) {
      console.error('Error fetching memories:', error);
    }
  };

  useFocusEffect(
    useCallback(() => {
      fetchMemories();
    }, [user._id])
  );

  const handleAddPress = () => {
    navigation.navigate('Create-memory');
  }

  return (
    <LinearGradient
      colors={['#F2E8EB', '#EEEEE8']}
      style={mainStyles.screenSettings}
    >
      <Header />
      <ScrollView style={[mainStyles.screenSettings, mainScreenStyles.screenSettings]}>
        <View style={[mainStyles.equalizer, mainScreenStyles.contentPlacement]}>
          {memories.map((memory, index) => (
            <Note key={index} memory={memory} />
          ))}
        </View>
      </ScrollView>
      <BlurView intensity={25} style={mainScreenStyles.addButtonContainer}>
        <AddButton onPress={handleAddPress} />
      </BlurView>
    </LinearGradient>
  );
};

export default MainScreen;
