import { StyleSheet } from 'react-native';
import { inputColors } from '../../styles/MainStyles';

const noteStyles = StyleSheet.create({
  noteContainer: {
    width: '100%',
    borderRadius: 20,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.15,
    shadowRadius: 6.84,
    elevation: 2,
    marginBottom: 18,
    zIndex: 0,
  },
  header: {
    width: '100%',
    height: 45,
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    zIndex: 0,
  },
  line: {
    width: '100%',
    height: 1.5,
    backgroundColor: inputColors.border,
    position: 'absolute',
    top: 45,
  },
  contentContainer: {
    width: '100%',
    display: 'flex',
    paddingHorizontal: 15,
    paddingTop: 10,
    paddingBottom: 15,
  },
  actionButton: {
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 5,
    marginBottom: 10,
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
  likeOptionContainer: {
    flexDirection: 'row',
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    gap: 10,
  },
  iconLike: {
    paddingTop: 5,
  }
  

});

export default noteStyles;





