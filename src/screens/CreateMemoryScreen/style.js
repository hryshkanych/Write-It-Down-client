import { StyleSheet, Dimensions } from 'react-native';
import { fontSizes } from '../../styles/MainStyles';

const createMemoryScreenStyles = StyleSheet.create({
  screenSettings: {
    paddingTop: 130,
  },
  textInput: {
    marginBottom: 250,
  },
  imageContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 5,
    marginBottom: 15,
  },
  imageWrapper: {
    position: 'relative',
    width: '33.333%',
    height: '10%',
    aspectRatio: 1,
  },
  selectedImage: {
    width: '100%',
    height: '100%',
    aspectRatio: 1,
  },
  removeButton: {
    position: 'absolute',
    top: 5,
    right: 5,
    backgroundColor: 'rgba(0,0,0,0.5)',
    borderRadius: 10,
    padding: 2,
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  removeButtonText: {
    color: 'white',
    fontSize: fontSizes.small,
  },
});

export default createMemoryScreenStyles;
