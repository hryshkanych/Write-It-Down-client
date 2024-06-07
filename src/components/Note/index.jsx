import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { MaterialIcons } from 'react-native-vector-icons';
import noteStyles from './style';
import { mainStyles } from '../../styles/MainStyles';
import { mainAppColors } from '../../styles/MainStyles';

const formatDate = (dateString) => {
  const date = new Date(dateString);
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  return new Intl.DateTimeFormat('en-US', options).format(date);
};

const Note = ({ memory }) => {
  const formattedDate = formatDate(memory.creationDate);

  return (
    <View style={noteStyles.noteContainer}>
      <View style={noteStyles.header}>
        <Text style={mainStyles.textDescriptionGrey}>{formattedDate}</Text>
        <TouchableOpacity style={noteStyles.actionButton}>
          <MaterialIcons name="more-vert" size={26} color={mainAppColors.icon} style={{ transform: [{ rotate: '90deg' }]}} />
        </TouchableOpacity>
      </View>
      <View style={noteStyles.line}></View>
      <View style={noteStyles.contentContainer}>
        {memory.images.length > 0 && (
          <View style={noteStyles.imageContainer}>
            {memory.images.map((image, idx) => (
              <View key={idx} style={noteStyles.imageWrapper}>
                <Image source={{ uri: image }} style={noteStyles.selectedImage} />
              </View>
            ))}
          </View>
        )}
        <Text style={mainStyles.textDescription}>{memory.textNote}</Text>
      </View>
    </View>
  );
};

export default Note;
