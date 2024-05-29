import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { FontAwesome } from 'react-native-vector-icons';
import alternativeSignUpStyles from './styles';

const AlternativeSignUp = () => (
  <View style={alternativeSignUpStyles.alternaiveContainer}>
    <TouchableOpacity style={alternativeSignUpStyles.alternativeButton}>
      <FontAwesome name="google" size={26} color="#DB4437" />
    </TouchableOpacity>
    <TouchableOpacity style={alternativeSignUpStyles.alternativeButton}>
      <FontAwesome name="facebook" size={26} color="#535DBE" />
    </TouchableOpacity>
  </View>
);

export default AlternativeSignUp;
