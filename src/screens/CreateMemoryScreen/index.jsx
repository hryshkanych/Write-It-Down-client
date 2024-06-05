import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, TextInput, Keyboard, TouchableWithoutFeedback, Alert, Image, TouchableOpacity } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as MediaLibrary from 'expo-media-library';
import { mainStyles } from '../../styles/MainStyles';
import createMemoryScreenStyles from './style';
import CreatingHeader from '../../components/CreatingHeader';
import CreatingBottom from '../../components/CreatingBottom';

const CreateMemoryScreen = () => {
  const [note, setNote] = useState('');
  const [selectedImages, setSelectedImages] = useState([]);
  const [creationDate, setCreationDate] = useState('');

  useEffect(() => {
    const currentDate = new Date();
    const formattedDate = currentDate.toISOString(); // Форматуємо дату в ISO форматі
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
      if (!result.canceled) {
        const newSelectedImageUris = result.assets.map(asset => asset.uri);
        setSelectedImages([...selectedImages, ...newSelectedImageUris]); 
        console.log('Selected Images:', selectedImages);
      }
    } catch (error) {
      console.log('Error accessing gallery:', error);
      Alert.alert('Error', 'Something went wrong while accessing your photo gallery.');
    }
  };

  const handleCameraPress = () => {
    Alert.alert('Camera Pressed');
  };

  const handleSignalPress = () => {
    Alert.alert('Signal Pressed');
  };

  const handleRemoveImage = (uriToRemove) => {
    setSelectedImages(selectedImages.filter(uri => uri !== uriToRemove));
  };

  return (
    <View style={mainStyles.screenSettings}>
      <CreatingHeader creationDate={creationDate} />
      <CreatingBottom
        onImagePress={handleImagePress}
        onCameraPress={handleCameraPress}
        onSignalPress={handleSignalPress}
      />
      <ScrollView style={[mainStyles.screenSettings, createMemoryScreenStyles.screenSettings]}>
        <View style={mainStyles.equalizer}>
          {selectedImages.length > 0 && (
            <View style={createMemoryScreenStyles.imageContainer}>
              {selectedImages.map((uri, index) => (
                <View key={index} style={createMemoryScreenStyles.imageWrapper}>
                  <Image source={{ uri }} style={createMemoryScreenStyles.selectedImage} />
                  <TouchableOpacity
                    style={createMemoryScreenStyles.removeButton}
                    onPress={() => handleRemoveImage(uri)}
                  >
                    <Text style={createMemoryScreenStyles.removeButtonText}>✕</Text>
                  </TouchableOpacity>
                </View>
              ))}
            </View>
          )}
          <TextInput
            style={createMemoryScreenStyles.textInput}
            placeholder="Write your memory here..."
            multiline
            value={note}
            onChangeText={setNote}
            scrollEnabled={false}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default CreateMemoryScreen;
