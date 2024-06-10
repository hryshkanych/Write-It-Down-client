import { StyleSheet } from 'react-native';

const  drawingGirlStyles = StyleSheet.create({
    headerSection: {
      width: '100%',
      height: '55%',
      backgroundColor: 'pink'
    },
    waveDivider: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      width: '100%',
      overflow: 'hidden',
      lineHeight: 0,
    },
    trainer: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
    image: {
        height: '100%'
    }
  });

export default drawingGirlStyles;