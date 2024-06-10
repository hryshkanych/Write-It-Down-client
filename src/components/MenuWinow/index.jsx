import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { MaterialIcons } from 'react-native-vector-icons';
import menuWindowStyles from './style';
import { useNavigation } from '@react-navigation/native';


const MenuWindow = ({ isVisible, onClose, memory, onDelete, onLike, likeMemory }) => {
  const navigation = useNavigation();

  const handleDelete = async () => {
    try {
      await onDelete(memory._id);
    } catch (error) {
      console.error('Error deleting memory:', error);
    }
  };

  const handleEdit = () => {
    navigation.navigate('Create-memory', { memory });
    onClose();
  };

  const handeLike = async () => {
    try {
      likeMemory();
      await onLike(memory._id, !memory.selected);
    } catch (error) {
      console.error('Error likeing memory:', error);
    }
  }



  return (
    isVisible && (
      <View style={menuWindowStyles.menuContainer}>
        <TouchableOpacity style={menuWindowStyles.menuItem} onPress={handleEdit}>
          <MaterialIcons name="edit" size={20} color={'white'} />
          <Text style={menuWindowStyles.buttonText}>Edit</Text>
        </TouchableOpacity>
        <TouchableOpacity style={menuWindowStyles.menuItem} onPress={handeLike} >
          <MaterialIcons name="thumb-up" size={20} color={'white'} />
          <Text style={menuWindowStyles.buttonText}>Like</Text>
        </TouchableOpacity>
        <TouchableOpacity style={menuWindowStyles.menuItem} onPress={handleDelete}>
          <MaterialIcons name="delete" size={20} color={'white'} />
          <Text style={menuWindowStyles.buttonText}>Delete</Text>
        </TouchableOpacity>
      </View>
    )
  );
};

export default MenuWindow;