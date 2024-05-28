import { StyleSheet, Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const mainButtonGradient = { 
  firstColor: '#C696A5', 
  secondColor: '#BAA09B',
  thirdColor: '#B6A8A0',
};

const fontSizes = {
  header: 38,
  button: 16,
  main: 14,
};

const fontWeights = {
  button: 'bold',
}

const fontColors = {
  button: 'white',
}

const gradientEnd = { x: 1, y: 0 };


const mainStyles = StyleSheet.create({
  //settings
  screenSettings: {
    width: windowWidth,
    height: windowHeight,
    },
  equalizer: {
    paddingHorizontal: 32,
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

  //buttons
  mainButton: {
    width: '100%',
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    overflow: 'hidden',
  },
  buttonText: {
    color: fontColors.button,
    fontWeight: fontWeights.button,
    fontSize: fontSizes.button
  },
  gradient: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  }

});


export { mainStyles, fontSizes, mainButtonGradient, gradientEnd };
