import { StyleSheet } from 'react-native';
import { mainAppColors, inputColors, fontSizes } from '../../styles/MainStyles';

const logInStyles = StyleSheet.create({
  backdroundView: {
    height: '63%',
  },
  contentContainer: {
    width: '100%',
    height: '78%',
    backgroundColor: mainAppColors.background, 
    borderRadius: 60,
    position: 'absolute', 
    bottom: 0, 
    left: 0, 
    right: 0, 
    zIndex: 1, 
  },
  placement: {
    gap: '15%',
  },
  headerTextContainer: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '10%',
    marginBottom: '5%'
  },
  intensiveMainText: {
    textAlign: 'center',
    marginBottom: 10,
  },
  subHeaderText: {
    textAlign: 'center'
  },
  inputContainer:{
    marginBottom: 1,
  },
  forgotPassContainer: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-around',
    flexDirection: 'row',
    marginBottom: '4%',
  },
  toSignUpContainer: {
    gap: 7,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  clickableText: {
    color: '#B0255F',
    textDecorationLine: 'underline',
  }
});
  
export default logInStyles;
  