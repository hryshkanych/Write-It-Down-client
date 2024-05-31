import { StyleSheet, Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const color = '#847B7B';

const mainScreenStyles = StyleSheet.create({
  screenSettings: {
    paddingTop: 140,
    backgroundColor: '#FAF5F7'
  },
  addButtonContainer: {
    width: '100%',
    height: 110,
    position: 'absolute',
    bottom: 0,
    left: 0,
    alignItems: 'center',
  },
  
});

export default mainScreenStyles;
