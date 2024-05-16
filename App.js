import { StatusBar } from 'expo-status-bar';
import { ApplicationProvider } from '@ui-kitten/components';
import * as eva from '@eva-design/eva';
import StartUp from './pages/StartUp';
import GettingStarted from './pages/GettingStarted';
import HowManyDays from './pages/HowManyDays';
import ExercisesPerDay from './pages/ExercisesPerDay';
import DaySettings from './pages/DaySettings';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
const navigator = createNativeStackNavigator();

  return (
    <ApplicationProvider {...eva} theme={eva.light}>
    <NavigationContainer>
      <navigator.Navigator>
        <navigator.Screen 
        name="/"
        component={StartUp}
        options={{headerShown: false}}/>
        <navigator.Screen
            name="gettingstarted"
            component={GettingStarted}
            options={{ headerShown: false }}
          />
          <navigator.Screen
            name="howmanydays"
            component={HowManyDays}
            options={{ headerShown: false }}
          />
          <navigator.Screen
            name="exercisesperday"
            component={ExercisesPerDay}
            options={{ headerShown: false }}
          />
          <navigator.Screen
            name="daysettings"
            component={DaySettings}
            options={{ headerShown: false }}
          />
      </navigator.Navigator>
    </NavigationContainer>
    <StatusBar style="dark"/>
    </ApplicationProvider>
  );
}


