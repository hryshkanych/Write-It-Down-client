import React from 'react';
import { View, Text } from 'react-native';
import dividerLineStyles from './style';

const DividerLine = () => (
  <View style={dividerLineStyles.lineContainer}>
    <View style={dividerLineStyles.line} />
    <Text style={dividerLineStyles.textLine}>Or</Text>
    <View style={dividerLineStyles.line} />
  </View>
);

export default DividerLine;
