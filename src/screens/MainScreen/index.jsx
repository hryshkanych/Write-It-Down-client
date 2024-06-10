import React, { useEffect, useState, useCallback } from 'react';
import { View, ScrollView, Text, TouchableOpacity, Image, Dimensions, ActivityIndicator } from 'react-native';
import { BlurView } from 'expo-blur';
import { LinearGradient } from 'expo-linear-gradient';
import { mainAppColors, mainStyles } from '../../styles/MainStyles';
import mainScreenStyles from './style';
import Header from '../../components/Header';
import Note from '../../components/Note';
import AddButton from '../../components/AddButton';
import { useUserContext } from '../../contexts/userContext';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { getAllMemories, deleteMemoryById, updateMemory } from '../../services/memoryService';
import { useLoadingContext } from '../../contexts/loadingContext';

const MainScreen = () => {
  const { user } = useUserContext();
  const { loading, setLoading } = useLoadingContext();
  const navigation = useNavigation();
  const [memories, setMemories] = useState([]);
  const [selectedFilter, setSelectedFilter] = useState('All');

  const fetchMemories = async () => {
    try {
      const memoriesData = await getAllMemories(user._id);
      setMemories(memoriesData.memories);
      setLoading(false); 
    } catch (error) {
      console.error('Error fetching memories:', error);
      setLoading(false); 
    }
  };

  useFocusEffect(
    useCallback(() => {
      setLoading(true);
      fetchMemories();
    }, [user._id])
  );

  const handleAddPress = () => {
    navigation.navigate('Create-memory');
  };

  const handleDeleteMemory = async (memoryId) => {
    try {
      await deleteMemoryById(memoryId);
      fetchMemories(); 
    } catch (error) {
      console.error('Error deleting memory:', error);
    }
  };

  const handleLikePress =  async (memoryId, selected) => {
    try {
      await updateMemory(memoryId, { selected: selected } );
      fetchMemories(); 
    } catch (error) {
      console.error('Error liking memory:', error);
    }
  };


  const filteredMemories = selectedFilter === 'All' 
    ? memories 
    : memories.filter(memory => memory.selected);

  return (
    <LinearGradient
      colors={['#F2E8EB', '#EEEEE8']}
      style={mainStyles.screenSettings}
    >
      <Header selectedFilter={selectedFilter} setSelectedFilter={setSelectedFilter} />
      <ScrollView style={[mainStyles.screenSettings, mainScreenStyles.screenSettings]}>
        {loading ? ( // Відображаємо Loader, якщо дані ще не завантажені
          <View style={mainScreenStyles.loaderContainer}>
            <ActivityIndicator size="large" color={mainAppColors.icon}/>
          </View>
        ) : (
          <View style={[mainStyles.equalizer, mainScreenStyles.contentPlacement]}>
            {filteredMemories.map((memory, index) => (
              <Note key={index} id={memory._id} memory={memory} onDelete={handleDeleteMemory} onLike={handleLikePress} />
            ))}
          </View>
        )}
      </ScrollView>
      <BlurView intensity={25} style={mainScreenStyles.addButtonContainer}>
        <AddButton onPress={handleAddPress} />
      </BlurView>
    </LinearGradient>
  );
};

export default MainScreen;
