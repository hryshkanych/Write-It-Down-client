import { StyleSheet } from 'react-native';

const loginScreenStyles = StyleSheet.create({
  backdroundView: {
    height: '63%',
  },
  contentContainer: {
    width: '100%',
    height: '78%',
    backgroundColor: 'white',  // change!
    borderRadius: 60,
    position: 'absolute', 
    bottom: 0, 
    left: 0, 
    right: 0, 
    zIndex: 1, 
  },
});
  
export default loginScreenStyles;
  