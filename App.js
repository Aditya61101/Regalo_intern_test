import { HomeScreen } from "./Container/Home";
import { DiscoverScreen } from "./Container/Discover";
import { HistoryScreen } from "./Container/History";
import { Provider as PaperProvider } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons,MaterialIcons } from '@expo/vector-icons';
import { useFonts } from 'expo-font';

const Tab = createBottomTabNavigator();
export default function App() {
  const [fontsLoaded] = useFonts({
    'ClashDisplayMedium': require('./assets/fonts/ClashDisplay-Medium.otf'),
    'ClashDisplay': require('./assets/fonts/ClashDisplay-Regular.otf'),
  });
  if (!fontsLoaded) {
    return null;
  }
  return (
    <PaperProvider>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={{
            headerShown: false,
            tabBarStyle: {
              backgroundColor: "#1a1a1a",
              paddingBottom: 3,
            },
            tabBarLabelStyle:{
              fontFamily:'ClashDisplay'
            },
            tabBarActiveTintColor:"#ffd43a",
          }}
        >
          <Tab.Screen name="Home" component={HomeScreen} options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ focused, size }) => (
              <MaterialCommunityIcons name={focused ? "home" : "home-outline"} color="#FFD43A" size={size}/>
            ),
          }} />
          <Tab.Screen name="Discover" component={DiscoverScreen} options={{
            tabBarLabel: 'Discover',
            tabBarIcon: ({ size }) => (
              <MaterialIcons name="explore" size={size} color="#ffd43a" />
            ),
          }} />
          <Tab.Screen name="History" component={HistoryScreen} options={{
            tabBarLabel: 'History',
            tabBarIcon: ({ size }) => (
              <MaterialIcons name="history-toggle-off" size={size} color="#ffd43a" />
            ),
          }} />
        </Tab.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}