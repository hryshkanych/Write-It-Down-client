import { StyleSheet, Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const mainButtonGradient = { 
  firstColor: '#C696A5', 
  secondColor: '#BAA09B',
  thirdColor: '#B6A8A0',
};

const mainAppColors = {
  background: 'white'
}

const fontSizes = {
  header: 38,
  subHeader: 22,
  button: 16,
  main: 14,
  intensiveMain: 18,
  small: 12.5,
};

const fontWeights = {
  button: 'bold',
  header: 'bold',
}

const fontColors = {
  button: 'white',
}

const inputColors = {
  main: '#F0F1F1',
  border: '#D8D8D8'
}

const gradientEnd = { x: 1, y: 0 };


const mainStyles = StyleSheet.create({
  //settings
  screenSettings: {
    width: windowWidth,
    height: windowHeight,
    },
  equalizer: {
    paddingHorizontal: 28,
    width: '100%',
    flex: 1,
  },
  positioning: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  //text
  mainHeaderText: {
    fontSize: fontSizes.header
  },
  textDescription: {
    fontSize: fontSizes.main
  },
  subHeaderText: {
    fontSize: fontSizes.subHeader,
    fontWeight: fontWeights.header,
  },
  intensiveMainText: {
    fontSize: fontSizes.intensiveMain
  },

});


export { mainStyles, fontSizes, mainButtonGradient, gradientEnd, mainAppColors, inputColors, fontColors, fontWeights};
