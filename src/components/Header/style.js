import { StyleSheet, Dimensions } from 'react-native';
import { inputColors, mainAppColors } from '../../styles/MainStyles';

const windowWidth = Dimensions.get('window').width;

const headerStyles = StyleSheet.create({
  headerContainer: {
    width: '100%',
    height: 105,
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    flexDirection: 'row',
    paddingBottom: 10,
    position: 'absolute',
    top: 0,
    left: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    zIndex: 10,
  },
  headerText: {
    marginBottom: 3,
  },
  filterButton: {
    width: 40,
    height: 40,
    borderRadius: 30,
    backgroundColor: mainAppColors.icon, 
    justifyContent: 'center',
    alignItems: 'center',
  },
  line: {
    backgroundColor: '#F7F7F7',
    height: 1,
    width: windowWidth,
    position: 'absolute',
    bottom: 0,
  },
  
});

export default headerStyles;
