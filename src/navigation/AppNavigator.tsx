import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from '../screens/SplashScreen';
import WelcomeScreen from '../screens/WelcomeScreen';
import InfoScreen from '../screens/InfoScreen';
import CreateHabit from '../screens/CreateHabit';
import HomeScreen from '../screens/HomeScreen';
import SetupScreen from '../screens/SetupScreen';

export type RootStackParamList = {
    Splash: undefined;
    Welcome: undefined;
    Info:undefined;
    Setup:undefined;
    MainApp:undefined;
    Habit:undefined;
  };
  
  const Stack = createNativeStackNavigator<RootStackParamList>();
const AppNavigator = () => {
    return (
      <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='Splash'>
        <Stack.Screen name='Splash' component={SplashScreen}/>
        <Stack.Screen name='Welcome' component={WelcomeScreen}/>
        <Stack.Screen name='Info' component={InfoScreen}/>
        <Stack.Screen name='Setup' component={SetupScreen}/>
        <Stack.Screen name='MainApp' component={HomeScreen}/>
        <Stack.Screen name='Habit' component={CreateHabit}/>
      </Stack.Navigator>
    );
  };
  export default AppNavigator;