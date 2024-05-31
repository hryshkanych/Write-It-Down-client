import { StyleSheet, Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const color = '#847B7B';

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
    // Тінь для iOS
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    // Тінь для Android
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
    backgroundColor: color, 
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
