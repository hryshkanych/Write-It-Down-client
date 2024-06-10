import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { BlurView } from 'expo-blur';
import { FontAwesome } from '@expo/vector-icons';
import { mainStyles } from '../../styles/MainStyles';
import headerStyles from './style';
import { mainAppColors } from '../../styles/MainStyles';

const Header = ({ selectedFilter, setSelectedFilter }) => {
  const [isFilterMenuVisible, setIsFilterMenuVisible] = useState(false);

  const toggleFilterMenu = () => {
    setIsFilterMenuVisible(!isFilterMenuVisible);
  };

  const handleSelectFilter = (filter) => {
    setSelectedFilter(filter);
    setIsFilterMenuVisible(false);
  };

  return (
    <BlurView intensity={50} style={[headerStyles.headerContainer, mainStyles.equalizer]}>
      <Text style={[mainStyles.headerText, headerStyles.headerText]}>Memories</Text>
      <TouchableOpacity style={headerStyles.filterButton} onPress={toggleFilterMenu}>
        <FontAwesome name="bars" size={18} color={'white'} />
      </TouchableOpacity>

      {isFilterMenuVisible && (
        <View style={headerStyles.filteringMenu}>
          <TouchableOpacity style={headerStyles.filteringMenuItem} onPress={() => handleSelectFilter('All')}>
            <Text style={headerStyles.filteringMenuItemText}>All</Text>
            {selectedFilter === 'All' && <FontAwesome name="check" size={18} color={'white'} />}
          </TouchableOpacity>
          <View style={headerStyles.separator}></View>
          <TouchableOpacity style={headerStyles.filteringMenuItem} onPress={() => handleSelectFilter('Liked')}>
            <Text style={headerStyles.filteringMenuItemText}>Liked</Text>
            {selectedFilter === 'Liked' && <FontAwesome name="check" size={18} color={'white'} />}
          </TouchableOpacity>
        </View>
      )}
    </BlurView>
  );
};

export default Header;
