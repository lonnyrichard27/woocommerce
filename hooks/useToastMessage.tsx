import React from 'react';
import { Pressable, StyleSheet, useWindowDimensions, View } from 'react-native';
import Toast from 'react-native-toast-message';
import { ToastOptions } from 'react-native-toast-message/lib/src/types';
import { AntDesign } from '@expo/vector-icons';
import CustomText from '@/components/custom/CustomText';
import Feather from '@expo/vector-icons/Feather';


function CustomToastMessageContainer({ props }: ToastOptions) {
  const windowDimension = useWindowDimensions();
  return (
    <View style={[ styles.container, { width: windowDimension.width - 16 * 2 },]}>
      <View style={styles.body}>
        <View style={styles.iconWrapper}>
          <AntDesign name="checkcircleo" size={20} color="#00B074" />    
        </View>

        <View style={styles.messageWrapper}>
          <CustomText marginTopStyle={5} semiBold fontSizeStyle={14} colorStyle='#334155' value={props.title} />
        </View>

        <Pressable onPress={() => Toast.hide()} style={styles.closeButton}>
          <Feather name="x" size={20} color="black" />
        </Pressable>
      </View>
    </View>
  );
}

export const toastMessageConfig = {
  custom: (props: any) => {
    return <CustomToastMessageContainer {...props} />;
  },
};

export function useToastMessage() {
  const success = ({
    title = 'Success',
    message = '',
    icon = <AntDesign name="checkcircle" size={20} color="white" />,
  }) => {
    return Toast.show({
      type: 'custom',
      props: {
        message,
        title,
        icon,
        type: 'success',
      },
    });
  };
  
  const hide = () => Toast.hide();

  return { success, hide };
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: 10,
  },
  indicator: {
    width: 6,
    height: '100%',
    borderTopLeftRadius: 3,
    borderBottomLeftRadius: 3,
  },
  body: {
    flex: 1,
    borderRadius: 14,
    borderLeftWidth: 6,
    borderLeftColor: '#10B981',
    paddingVertical: 15,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    columnGap: 12,
    backgroundColor: '#fff',
  },
  iconWrapper: {
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  messageWrapper: {
    flex: 1,
    flexDirection: 'column',
    rowGap: 2,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    columnGap: 4,
    width: '100%',
    height: '100%',
  },
  closeButton: {
    paddingLeft: 12,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});