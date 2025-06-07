import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';
import { useColorScheme } from '@/hooks/useColorScheme';
import Toast from 'react-native-toast-message';
import { toastMessageConfig } from '@/hooks/useToastMessage';


export default function RootLayout() {

  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    Regular: require('../assets/fonts/IBMPlexSans-Regular.ttf'),
    Bold: require('../assets/fonts/IBMPlexSans-Bold.ttf'),
    Medium: require('../assets/fonts/IBMPlexSans-Medium.ttf'),
    SemiBold: require('../assets/fonts/IBMPlexSans-SemiBold.ttf'),
    IBMPlexMono: require('../assets/fonts/IBMPlexMono-Medium.ttf'),
  });

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="ProductDetail" options={{ headerShown: false }} />
        <Stack.Screen name="CartScreen" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
      </Stack>
        <StatusBar style="auto" />
        <Toast config={toastMessageConfig} />
    </ThemeProvider>


  );
}

