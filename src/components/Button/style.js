import { StyleSheet } from 'react-native';
import { fontWeights, fontSizes, fontColors} from '../../styles/MainStyles';


const buttonStyles = StyleSheet.create({
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
  },

});


export default buttonStyles;
