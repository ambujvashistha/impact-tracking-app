import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BottomTabs from "./src/navigations/BottomTabs";
import CampaignScreen from "./src/screens/campaignDetailsScreen";
import DonateScreen from "./src/screens/donateScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="MainTabs"
          component={BottomTabs}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Campaign"
          component={CampaignScreen}
          options={{ title: "Campaign Details" }}
        />

        <Stack.Screen
          name="Donate"
          component={DonateScreen}
          options={{ title: "Support Jamiat" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
