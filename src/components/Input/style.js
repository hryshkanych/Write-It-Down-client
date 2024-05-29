import { StyleSheet } from 'react-native';
import { inputColors, fontSizes} from '../../styles/MainStyles';

const inputStyles = StyleSheet.create({
  inputContainer: {
    height: 55,
    width: '100%',
    paddingHorizontal: 15,
    backgroundColor: inputColors.main,
    borderRadius: 50,
    fontSize: fontSizes.main,
    borderWidth: 1,
    borderColor: inputColors.border,
    justifyContent: 'center',
    flexDirection: 'row'
  },
  input: {
    flex: 1,
  },
  icon: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 26,
    marginRight: 8,
  }
});


export default inputStyles;
