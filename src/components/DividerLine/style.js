import { StyleSheet } from 'react-native';
import { inputColors } from '../../styles/MainStyles';

const dividerLineStyles = StyleSheet.create({
  lineContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: '3%', 
  },
  line: {
    flex: 1,
    height: 1.5,
    backgroundColor: inputColors.border,
  },
  textLine: {
    marginHorizontal: 10, 
  },
});
  
export default dividerLineStyles;
  