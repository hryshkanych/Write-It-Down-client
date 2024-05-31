import { StyleSheet, Dimensions } from 'react-native';
import { fontSizes } from '../../styles/MainStyles';

const windowWidth = Dimensions.get('window').width;

const creatingBottomStyles = StyleSheet.create({
  bottomContainer: {
    width: '100%',
    height: 95,
    paddingTop: '5%',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    flexDirection: 'row',
    paddingBottom: 10,
    position: 'absolute',
    bottom: 0,
    left: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.35,
    shadowRadius: 6.84,
    elevation: 5,
    zIndex: 10,
  },
  optionsContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '50%',
  }
  
});

export default creatingBottomStyles;
