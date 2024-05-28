import React from 'react';
import { View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'; 
import Svg, { Path } from 'react-native-svg';
import waveStyles from './style';

const Wave = () => {
  return (
    <LinearGradient
      colors={['#9DCEFF', '#6C82F8']}
      style={waveStyles.headSection}
    >
      <View style={[waveStyles.waveDivider, { transform: [{ scaleX: -1 }] }]}>
        <Svg
          height={200}
          width={'100%'}
          viewBox="40 0 700 70"
          preserveAspectRatio="none"
        >
          <Path
            fill="white"
            d="M985.66,92.83C906.67,72,823.78,70,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
          />
        </Svg>
      </View>
    </LinearGradient>
  );
};

export default Wave;
