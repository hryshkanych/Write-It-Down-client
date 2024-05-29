import React from 'react';
import { View, TextInput } from 'react-native';
import { FontAwesome } from 'react-native-vector-icons';
import inputStyles from './style';
import { inputColors } from '../../styles/MainStyles';

const InputWithIcon = ({ iconName, placeholder, value, onChangeText, iconSize }) => (
  <View style={inputStyles.inputContainer}>
    <View style={inputStyles.icon}>
      <FontAwesome name={iconName} size={iconSize} color={'#BFBFBF'} />
    </View>
    <TextInput
      style={inputStyles.input}
      placeholder={placeholder}
      value={value}
      onChangeText={onChangeText}
    />
  </View>
);

export default InputWithIcon;
