import { StyleSheet, Dimensions } from 'react-native';
import { fontColors, fontSizes, fontWeights, inputColors, mainAppColors } from '../../styles/MainStyles';

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
  logOutButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  filterButton: {
    width: 40,
    height: 40,
    borderRadius: 30,
    backgroundColor: mainAppColors.icon, 
    justifyContent: 'center',
    alignItems: 'center',
  },
  textAndButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
  },
  line: {
    backgroundColor: '#F7F7F7',
    height: 1,
    width: windowWidth,
    position: 'absolute',
    bottom: 0,
  },
  filteringMenu: {
    width: '45%',
    height: 100,
    borderRadius: 15,
    backgroundColor: mainAppColors.icon,
    position: 'absolute',
    justifyContent: 'space-around',
    top: 100,
    right: 15,
  },
  filteringMenuItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    padding: 20,
  },
  filteringMenuItemText: {
    fontSize: fontSizes.button,
    color: fontColors.button,
    fontWeight: fontWeights.button,
  },
  separator: {
    width: '100%',
    height: 1,
    backgroundColor: 'white',
  },
  
});

export default headerStyles;
