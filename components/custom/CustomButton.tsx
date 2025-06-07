import { Colors } from '@/constants/Colors';
import React from 'react';
import { StyleSheet, Pressable} from 'react-native';
import CustomText from './CustomText';

interface CustomButtonProps {
  text: string;
  onPress: () => void;
}

const CustomButton: React.FC<CustomButtonProps> = ({ text, onPress }) => {
  return (
    <Pressable style={styles.button} onPress={onPress}>
      <CustomText value={text} colorStyle={"#fff"} semiBold fontSizeStyle={18} />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderRadius: 8,
    width: "100%",
    height: 56,
    backgroundColor: Colors.main,
  },
});

export default CustomButton;