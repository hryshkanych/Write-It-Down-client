import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { FontAwesome } from 'react-native-vector-icons';
import alternativeLoginStyles from './styles';

const AlternativeLogin = () => (
  <View style={alternativeLoginStyles.alternaiveContainer}>
    <TouchableOpacity style={alternativeLoginStyles.alternativeButton}>
      <FontAwesome name="google" size={26} color="#DB4437" />
    </TouchableOpacity>
    <TouchableOpacity style={alternativeLoginStyles.alternativeButton}>
      <FontAwesome name="facebook" size={26} color="blue" />
    </TouchableOpacity>
  </View>
);

export default AlternativeLogin;
