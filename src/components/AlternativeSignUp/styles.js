import { StyleSheet } from 'react-native';
import { inputColors} from '../../styles/MainStyles';

const alternativeSignUpStyles = StyleSheet.create({
  alternaiveContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: '3%',
    gap: 25,
  },
  alternativeButton: {
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FDFDFD',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: inputColors.border,
  },
});
  
export default alternativeSignUpStyles;
  