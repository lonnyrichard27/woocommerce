import { Colors } from "@/constants/Colors";
import { StyleSheet, View } from "react-native";

interface TabIconProps {
  focused: boolean;
  icon: React.ReactNode;
  showBackground?: boolean;
}

const TabIcon: React.FC<TabIconProps> = ({ focused, icon, showBackground = true }) => {
  if (focused && showBackground) {
    return (
      <View style={styles.activeTabContainer}>
        {icon}
      </View>
    );
  }

  return <View style={styles.inactiveTabContainer}>{icon}</View>;
};

const styles = StyleSheet.create({
  activeTabContainer: {
    backgroundColor: Colors.main,
    borderRadius: 25,
    width: 56,
    height: 32,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inactiveTabContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 50,
    height: 50,
  },
});

export default TabIcon;