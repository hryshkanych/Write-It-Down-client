import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, TextInput, Alert, Image, TouchableOpacity } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as MediaLibrary from 'expo-media-library';
import { mainStyles } from '../../styles/MainStyles';
import createMemoryScreenStyles from './style';
import CreatingHeader from '../../components/CreatingHeader';
import CreatingBottom from '../../components/CreatingBottom';
import { useUserContext } from '../../contexts/userContext';
import { addMemory, updateMemoryById } from '../../services/memoryService';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useLoadingContext } from '../../contexts/loadingContext';

const CreateMemoryScreen = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [memoryId, setMemoryId] = useState('');
  const [textNote, setTextNote] = useState('');
  const [selectedImages, setSelectedImages] = useState([]);
  const [creationDate, setCreationDate] = useState('');
  const { user } = useUserContext();
  const { setLoading } = useLoadingContext();
  const { params } = useRoute(); 
  const navigation = useNavigation();

  useEffect(() => {
    if (params && params.memory) {
      setIsEditing(true);
      setMemoryId(params.memory._id)
      setTextNote(params.memory.textNote);
      const formattedImages = params.memory.images.map(uri => ({ uri }));
      setSelectedImages(formattedImages);
      setCreationDate(params.memory.creationDate);
    } else {
      setIsEditing(false);
      const currentDate = new Date();
      const formattedDate = currentDate.toISOString();
      setCreationDate(formattedDate);
    }
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
      if (!result.canceled) {
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

  const handleCreateMemory = async () => {
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
      setLoading(true)
      navigation.navigate('Main-page');
    } catch (error) {
      console.log('Error creating memory:', error);
      Alert.alert('Error', 'Something went wrong while creating your memory.');
    }
  };

  const handleUpdateMemory = async () => {
    try {
      await updateMemoryById(memoryId, textNote); 
      setLoading(true)
      navigation.navigate('Main-page');
    } catch (error) {
      console.log('Error updating memory:', error);
      Alert.alert('Error', 'Something went wrong while updating your memory.');
    }
  };


  return (
    <View style={mainStyles.screenSettings}>
      <CreatingHeader creationDate={creationDate} onSave={ isEditing? handleUpdateMemory : handleCreateMemory} />
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
