import { StyleSheet } from 'react-native';
import { inputColors } from '../../styles/MainStyles';

const noteStyles = StyleSheet.create({
  noteContainer: {
    width: '100%',
    height: 300,
    borderRadius: 20,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.15,
    shadowRadius: 6.84,
    elevation: 2,
  },
  header: {
    width: '100%',
    height: 45,
    alignItems: 'center',
    // borderWidth: 1,
    // borderColor: 'grey'
  },
  line: {
    width: '100%',
    height: 1.5,
    backgroundColor: inputColors.border,
    position: 'absolute',
    bottom: 0,
  },
  contentContainer: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
  },
  actionButton: {
    width: 30,
    height: 30,

    justifyContent: 'center',
    alignItems: 'center',
  }

});

export default noteStyles;





