import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, TextInput, Alert, Image, TouchableOpacity } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as MediaLibrary from 'expo-media-library';
import { mainStyles } from '../../styles/MainStyles';
import createMemoryScreenStyles from './style';
import CreatingHeader from '../../components/CreatingHeader';
import CreatingBottom from '../../components/CreatingBottom';
import { useUserContext } from '../../contexts/userContext';
import { addMemory } from '../../services/memoryService';
import { useNavigation } from '@react-navigation/native';


const CreateMemoryScreen = () => {
  const [textNote, setTextNote] = useState('');
  const [selectedImages, setSelectedImages] = useState([]);
  const [creationDate, setCreationDate] = useState('');
  const { user } = useUserContext();
  const navigation = useNavigation();

  useEffect(() => {
    const currentDate = new Date();
    const formattedDate = currentDate.toISOString();
    setCreationDate(formattedDate);
  }, []);

  const handleImagePress = async () => {
    try {
      const { status } = await MediaLibrary.requestPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert('Permission Denied', 'We need permission to access your photo gallery.');
        return;
      }
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsMultipleSelection: true,
        quality: 1,
      });
      if (!result.cancelled) {
        const newSelectedImages = result.assets.map(asset => ({
          uri: asset.uri,
          type: asset.mediaType,
          filename: asset.fileName || `image-${selectedImages.length + 1}`,
        }));
        setSelectedImages(prevSelectedImages => [...prevSelectedImages, ...newSelectedImages]);
      }
    } catch (error) {
      console.log('Error accessing gallery:', error);
      Alert.alert('Error', 'Something went wrong while accessing your photo gallery.');
    }
  };

  const handleRemoveImage = uriToRemove => {
    setSelectedImages(prevSelectedImages =>
      prevSelectedImages.filter(image => image.uri !== uriToRemove)
    );
  };

  const handleSaveMemoryPress = async () => {
    try {
      const formData = new FormData();
      formData.append('userId', user._id);
      formData.append('creationDate', creationDate);
      formData.append('selected', false);
      formData.append('textNote', textNote);
  
      selectedImages.forEach((image, index) => {
        const filename = image.uri.split('/').pop();
        const type = 'image/jpeg'; 
  
        formData.append(`file`, {
          uri: image.uri,
          type: type,
          name: filename,
        });

      });
  
      await addMemory(formData);
      navigation.navigate('Main-page');
    } catch (error) {
      console.log('Error saving memory:', error);
      Alert.alert('Error', 'Something went wrong while saving your memory.');
    }
  };


  return (
    <View style={mainStyles.screenSettings}>
      <CreatingHeader creationDate={creationDate} onSave={handleSaveMemoryPress} />
      <CreatingBottom
        onImagePress={handleImagePress}
        onCameraPress={() => {}}
        onSignalPress={() => {}}
      />
      <ScrollView style={[mainStyles.screenSettings, createMemoryScreenStyles.screenSettings]}>
        <View style={mainStyles.equalizer}>
          {selectedImages.length > 0 && (
            <View style={createMemoryScreenStyles.imageContainer}>
              {selectedImages.map((image, index) => (
                <View key={index} style={createMemoryScreenStyles.imageWrapper}>
                  <Image source={{ uri: image.uri }} style={createMemoryScreenStyles.selectedImage} />
                  <TouchableOpacity
                    style={createMemoryScreenStyles.removeButton}
                    onPress={() => handleRemoveImage(image.uri)}
                  >
                    <Text style={createMemoryScreenStyles.removeButtonText}>✕</Text>
                  </TouchableOpacity>
                </View>
              ))}
            </View>
          )}
          <TextInput
            style={[createMemoryScreenStyles.textInput, mainStyles.textDescription]}
            placeholder="Write your memory here..."
            multiline
            value={textNote}
            onChangeText={setTextNote}
            scrollEnabled={false}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default CreateMemoryScreen;
