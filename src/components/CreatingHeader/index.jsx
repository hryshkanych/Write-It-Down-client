import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { BlurView } from 'expo-blur';
import { MaterialIcons } from 'react-native-vector-icons';
import { mainStyles } from '../../styles/MainStyles';
import cretingHeaderStyles from './style';
import { fontColors } from '../../styles/MainStyles';

const CreatingHeader = ({ creationDate }) => {
  const formattedDate = new Date(creationDate);
  const displayDate = formattedDate.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });

  return (
    <BlurView intensity={50} style={[cretingHeaderStyles.headerContainer, mainStyles.equalizer]}>
      <Text style={cretingHeaderStyles.clickableText}>Cancel</Text>
      <View style={cretingHeaderStyles.dataContainer}>
        <Text style={mainStyles.intensiveMainText}>{displayDate}</Text>
        <TouchableOpacity style={cretingHeaderStyles.editButton}>
          <MaterialIcons name="more-vert" size={20} color="white" style={{ transform: [{ rotate: '90deg' }] }} />
        </TouchableOpacity>
      </View>
      <Text style={cretingHeaderStyles.clickableText}>Done</Text>
    </BlurView>
  );
};

export default CreatingHeader;
