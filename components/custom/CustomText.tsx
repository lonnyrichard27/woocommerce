import React from 'react';
import { Text, StyleSheet, Platform } from 'react-native';

interface CustomTextProps {
  value: string | number;
  customStyles?: any;
  bold?: boolean;
  semiBold?: boolean;
  medium?: boolean;
  marginLeftStyle?: number;
  marginTopStyle?: number;
  marginRightStyle?: number;
  marginBottomStyle?: number;
  fontSizeStyle?: number;
  colorStyle?: string;
  marginVerticalStyle?: number;
  marginHorizontalStyle?: number; 
  lineHeightStyle?: number;
  textAlignStyle?: string;
}

const CustomText: React.FC<CustomTextProps> = ({ 
  value, 
  customStyles, 
  colorStyle, 
  bold, 
  semiBold, 
  medium,
  marginLeftStyle,
  marginBottomStyle,
  marginRightStyle,
  marginTopStyle, 
  fontSizeStyle,
  marginVerticalStyle,
  marginHorizontalStyle,
  lineHeightStyle,
  textAlignStyle,
  ...restProps }) => {

  let fontFamily = 'Regular';
  let marginLeft = marginLeftStyle ? marginLeftStyle : 0
  let marginTop = marginTopStyle ? marginTopStyle : 0
  let marginRight = marginRightStyle ? marginRightStyle : 0
  let marginBottom = marginBottomStyle ? marginBottomStyle : 0
  let marginVertical = marginVerticalStyle ? marginVerticalStyle : 0
  let marginHorizontal= marginHorizontalStyle ? marginHorizontalStyle : 0
  let textAlign = textAlignStyle ? textAlignStyle : 'left'
  let fontSize = fontSizeStyle ? fontSizeStyle : 16;
  let color = colorStyle ? colorStyle : '#000';

  if (bold) {
    fontFamily = 'Bold';
  } else if (semiBold) {
    fontFamily = 'SemiBold';
  } else if (medium) {
    fontFamily = 'Medium'
  }

  return (
    <Text 
      style={[ styles.text,
        { 
          fontFamily, 
          marginLeft, 
          fontWeight: bold ? '700' : semiBold ? '600' : medium ? '500' : 'normal',
          fontSize: Platform.OS === 'android' ? fontSize - 2 : fontSize,
          color, 
          marginBottom, 
          marginRight, 
          marginTop, 
          marginHorizontal, 
          marginVertical, 
          textAlign 
        },
        customStyles
      ]}
      {...restProps}
    >
      {value}
    </Text>
  );
};

export default CustomText;

const styles = StyleSheet.create({
  text:{
    color: '#000',
  }
})