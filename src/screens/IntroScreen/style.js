import { StyleSheet } from 'react-native';

const IntroScreenStyles = StyleSheet.create({
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
    // backgroundColor: 'red',
  },
  mainHeaderText:{
    textAlign: 'center',
    marginBottom: 15
  },
  textDescription: {
    textAlign: 'center'
  }
});

export default IntroScreenStyles;
