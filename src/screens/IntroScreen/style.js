import { StyleSheet } from 'react-native';

const introScreenStyles = StyleSheet.create({
  screenSettings: {
    backgroundColor: 'white',
  },
  contentContainer: {
    marginTop: '9%',
    flex: 1,
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '20%',
  },
  nameTextContainer: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainHeaderText:{
    textAlign: 'center',
    marginBottom: 15
  },
  textDescription: {
    textAlign: 'center'
  }
});

export default introScreenStyles;
