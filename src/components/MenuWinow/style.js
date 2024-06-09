import { StyleSheet } from 'react-native';
import { mainAppColors, inputColors, fontColors } from '../../styles/MainStyles';

const menuWindowStyles = StyleSheet.create({
  menuContainer: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 10,
    marginTop: 5,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '30%',
    height: 30,
    gap: 5,
    borderRadius: 15, // радіус закруглення бордеру (якщо потрібно)
    backgroundColor: mainAppColors.icon,
  },
  separator: {
    height: 1,
    backgroundColor: mainAppColors.separator,
    marginVertical: 10,
  },
  buttonText: {
    color: fontColors.button,
    fontWeight: '500',
  }
});

export default menuWindowStyles;
