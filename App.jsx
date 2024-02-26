import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/components/screens/Home';
import Profile from './src/components/screens/Profile';
import Contact from './src/components/screens/Contact';

export default function App() {
  const Stack = createNativeStackNavigator();

  return (  
<NavigationContainer>
<Stack.Navigator>
<Stack.Screen name="Home" component={Home} 
options={{
  title: 'Home',
  headerStyle: {
  backgroudColor: "#f4511e",
  },
  headerTintColor: '#000',
  headerTitleStyle: {
  fontweight: "bold",
  },
  headerTitleAling: "center",
  // headerShown: false,
  }}
/>
<Stack.Screen name="Profile" component={Profile} options={{
  title: 'Profile',
  headerStyle: {
  backgroudColor: "#f4511e",
  },
  headerTintColor: '#000',
  headerTitleStyle: {
  fontweight: "bold",
  },
  headerTitleAling: "center",
  // headerShown: false,
  }}/>
<Stack.Screen name="Contact" component={Contact} options={
  {
    title: 'Contact',
    headerStyle: {
    backgroudColor: "#f4511e",
    },
    headerTintColor: '#000',
    headerTitleStyle: {
    fontweight: "bold",
    },
    headerTitleAling: "center",
    // headerShown: false,
    }
  
}/>
</Stack.Navigator>
</NavigationContainer>
  );
}
